@echo off
setlocal
pushd "%~dp0.."
if errorlevel 1 exit /b 1

where pnpm.cmd >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Chua co pnpm. Chay: cmd /c scripts\setup-team.cmd
  popd
  exit /b 1
)

echo [INFO] Web: http://localhost:3000
echo [INFO] API: http://localhost:4000/api
echo [INFO] Nhan Ctrl+C de dung.
call pnpm.cmd dev
set "exitCode=%errorlevel%"
popd
exit /b %exitCode%
