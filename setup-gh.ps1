# Setup GitHub CLI path
$env:Path = [Environment]::GetEnvironmentVariable('Path', 'Machine') + ';C:\Program Files\GitHub CLI'

# Check current auth status
Write-Host "Checking auth status..."
gh auth status

if ($LASTEXITCODE -ne 0) {
    Write-Host "Not logged in. Starting login..."
    gh auth login --web
}
