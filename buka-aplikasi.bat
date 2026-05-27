@echo off
set "APP=%~dp0index.html"
where chrome >nul 2>nul
if %errorlevel%==0 (
    start chrome "%APP%"
) else (
    start "" "%APP%"
)
