Write-Host "Stopping services..." -ForegroundColor Green

docker stop ClientService
docker rm ClientService

Write-Host "Services stopped." -ForegroundColor Green
Write-Host "Building Services..." -ForegroundColor Green

cd ./client/aptap-client
docker build -t clientservice .
cd ../..

Write-Host "Build finished." -ForegroundColor Green

Write-Host "Starting Services..." -ForegroundColor Green

docker run -d -p 3000:80 --name ClientService clientservice

Write-Host "Services started." -ForegroundColor Green

docker ps
docker attach ClientService