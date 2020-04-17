Write-Host "Stopping services..." -ForegroundColor Green

docker stop BusinessService
docker rm BusinessService
docker stop AuthService
docker rm AuthService
docker stop ClientService
docker rm ClientService

Write-Host "Services stopped." -ForegroundColor Green
Write-Host "Building Services..." -ForegroundColor Green

cd ./services/ApTap.Services.AuthService
docker build -t authservice .
cd ../
cd ./ApTap.Services.BusinessService
docker build -t businessservice .
cd ../..
cd ./client/aptap-client
docker build -t clientservice .
cd ../..

Write-Host "Build finished." -ForegroundColor Green

Write-Host "Starting Services..." -ForegroundColor Green

docker run -d -p 5000:80 --name AuthService authservice --network=bridge
docker run -d -p 5002:80 --name BusinessService businessservice --network=bridge
docker run -d -p 3000:80 --name ClientService clientservice

Write-Host "Services started." -ForegroundColor Green

docker ps
docker attach BusinessService