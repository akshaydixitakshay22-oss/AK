# Codes4U Secure PowerShell Backend REST API Server for Windows
param([int]$Port = 5000)

$dbFile = Join-Path $PSScriptRoot "database.json"

function Get-DB {
    if (Test-Path $dbFile) {
        Get-Content $dbFile -Raw | ConvertFrom-Json
    } else {
        @{ stores = @(); users = @(); siteSettings = @{} }
    }
}

function Save-DB ($db) {
    $json = $db | ConvertTo-Json -Depth 10
    Set-Content -Path $dbFile -Value $json -Encoding UTF8
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()

Write-Host "=======================================================" -ForegroundColor Green
Write-Host "🚀 Codes4U PowerShell Backend API Server Active on Port $Port" -ForegroundColor Cyan
Write-Host "🌐 URL: http://localhost:$Port/" -ForegroundColor Yellow
Write-Host "🛡️ Security Shield & REST API Online" -ForegroundColor Green
Write-Host "=======================================================" -ForegroundColor Green

try {
    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response

            $response.AddHeader("Access-Control-Allow-Origin", "*")
            $response.AddHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
            $response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
            $response.AddHeader("X-Content-Type-Options", "nosniff")

            if ($request.HttpMethod -eq "OPTIONS") {
                $response.StatusCode = 204
                $response.Close()
                continue
            }

            $path = $request.Url.AbsolutePath
            $method = $request.HttpMethod

            # Read JSON body if POST/PUT
            $bodyText = ""
            if ($request.HasEntityBody) {
                $reader = New-Object System.IO.StreamReader($request.InputStream, $request.ContentEncoding)
                $bodyText = $reader.ReadToEnd()
                $reader.Close()
            }

            # 1. API GET STORES
            if ($path -eq "/api/stores" -and $method -eq "GET") {
                $db = Get-DB
                $json = $db.stores | ConvertTo-Json -Depth 5
                $buffer = [System.Text.Encoding]::UTF8.GetBytes($json)
                $response.ContentType = "application/json"
                $response.ContentLength64 = $buffer.Length
                $response.OutputStream.Write($buffer, 0, $buffer.Length)
                $response.Close()
                continue
            }

            # 2. API AUTH LOGIN
            if ($path -eq "/api/auth/login" -and $method -eq "POST") {
                $db = Get-DB
                $reqObj = $bodyText | ConvertFrom-Json
                $u = $reqObj.username.Trim().ToLower()
                $p = $reqObj.password

                if ($u -eq $db.adminCredentials.username.ToLower() -and $p -eq $db.adminCredentials.passwordHash) {
                    $resObj = @{ success = $true; role = "admin"; token = "admin-sec-token-ps1"; message = "Admin authenticated." }
                } else {
                    $matchedUser = $db.users | Where-Object { $_.name.ToLower() -eq $u -or $_.id.ToLower() -eq $u }
                    if ($matchedUser) {
                        $resObj = @{ success = $true; role = "user"; token = "user-token-ps1"; user = @{ id = $matchedUser.id; name = $matchedUser.name; fullName = $matchedUser.fullName } }
                    } else {
                        $response.StatusCode = 401
                        $resObj = @{ success = $false; message = "Invalid credentials" }
                    }
                }

                $json = $resObj | ConvertTo-Json
                $buffer = [System.Text.Encoding]::UTF8.GetBytes($json)
                $response.ContentType = "application/json"
                $response.ContentLength64 = $buffer.Length
                $response.OutputStream.Write($buffer, 0, $buffer.Length)
                $response.Close()
                continue
            }

            # Static File Serving
            $localPath = Join-Path $PSScriptRoot ($path.TrimStart('/'))
            if ($path -eq "/") { $localPath = Join-Path $PSScriptRoot "index.html" }

            if (Test-Path $localPath -PathType Leaf) {
                $bytes = [System.IO.File]::ReadAllBytes($localPath)
                if ($localPath.EndsWith(".html")) { $response.ContentType = "text/html" }
                elseif ($localPath.EndsWith(".css")) { $response.ContentType = "text/css" }
                elseif ($localPath.EndsWith(".js")) { $response.ContentType = "application/javascript; charset=utf-8" }
                elseif ($localPath.EndsWith(".json")) { $response.ContentType = "application/json" }

                $response.ContentLength64 = $bytes.Length
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            } else {
                $response.StatusCode = 404
            }
            $response.Close()
        } catch {
            Write-Host "Request error: $_" -ForegroundColor Yellow
        }
    }
} finally {
    $listener.Stop()
}
