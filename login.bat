@echo off
REM GitHub Login Script
cd /d C:\weidong-jiejie

echo Starting GitHub login...
"C:\Program Files\GitHub CLI\gh.exe" auth login --web --insecure-storage

echo.
echo Checking status...
"C:\Program Files\GitHub CLI\gh.exe" auth status
