Write-Host "Building Services..." -ForegroundColor Green

cd ./services/ApTap.Services.AuthService
docker build -t authservice .
cd ../
cd ./ApTap.Services.BusinessService
docker build -t businessservice .
cd ../..

Write-Host "Build finished." -ForegroundColor Green

Write-Host "Starting Services..." -ForegroundColor Green

docker run -d -p 5000:80 --name AuthService authservice --network=bridge
docker run -d -p 5002:80 --name BusinessService businessservice --network=bridge

Write-Host "Services started." -ForegroundColor Green

docker ps