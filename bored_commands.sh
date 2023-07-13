
npm i --legacy-peer-deps
npx prisma generate
npx prisma migrate dev --name init
sudo docker-compose up -d
sudo docker network connect web_server kuidis-api
