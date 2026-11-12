@echo off
setlocal
pushd "%~dp0.."
if errorlevel 1 exit /b 1

where node.exe >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Chua co Node.js. Cai Node.js 22 tro len roi chay lai script.
  popd
  exit /b 1
)

git lfs version >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Chua co Git LFS. Cai Git LFS de tai bao cao goc roi chay lai script.
  popd
  exit /b 1
)

git lfs install
if errorlevel 1 (
  echo [ERROR] Khong khoi tao duoc Git LFS.
  popd
  exit /b 1
)

echo [INFO] Dang tai tai lieu goc tu Git LFS...
git lfs pull
if errorlevel 1 (
  echo [ERROR] Khong tai duoc tai lieu. Kiem tra GitHub/Git LFS.
  popd
  exit /b 1
)

node -e "if (Number(process.versions.node.split('.')[0]) < 22) process.exit(1)"
if errorlevel 1 (
  echo [ERROR] Node.js can phien ban 22 tro len.
  popd
  exit /b 1
)

where pnpm.cmd >nul 2>nul
if errorlevel 1 (
  echo [INFO] Dang cai pnpm 11.25.0...
  call npm.cmd install --global pnpm@11.25.0
  if errorlevel 1 (
    echo [ERROR] Khong cai duoc pnpm. Kiem tra mang va quyen npm.
    popd
    exit /b 1
  )
)

call pnpm.cmd --version
if errorlevel 1 (
  echo [ERROR] pnpm khong chay duoc.
  popd
  exit /b 1
)

if not exist "apps\api\.env" copy "apps\api\.env.example" "apps\api\.env" >nul
if not exist "apps\web\.env.local" copy "apps\web\.env.example" "apps\web\.env.local" >nul

echo [INFO] Dang cai dependencies...
call pnpm.cmd install --frozen-lockfile
if errorlevel 1 (
  echo [ERROR] Cai dependencies that bai. Gui log nay cho Huy.
  popd
  exit /b 1
)

echo [INFO] Dang tao Prisma Client cho API local...
call pnpm.cmd --filter api prisma:generate
if errorlevel 1 (
  echo [ERROR] Tao Prisma Client that bai. Gui log nay cho Huy.
  popd
  exit /b 1
)

echo.
echo [OK] Cai dat xong. Chay: cmd /c scripts\start-team.cmd
popd
exit /b 0
