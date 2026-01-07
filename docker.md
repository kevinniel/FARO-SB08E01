# Lancer le container psql
docker run -p 5433:5432 -d --name livre-d-or-db --network livre-d-or-network -e POSTGRES_USER=livre_d_or -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=livre_d_or postgres:17-alpine

# rentrer dans le container 
docker exec -it livre-d-or-db bash

# on se connecte à pgsql
psql -U livre_d_or

# on check les tables 
\dt




docker run -p 5433:5432 -d --name livre-d-or-db --network livre-d-or-network -e POSTGRES_USER=livre_d_or -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=livre_d_or livre-d-or-db-image


docker run -d -p 8005:3000 --network livre-d-or-network --name livre-d-or-app-container -e DB_URL=postgres://livre_d_or:admin@livre-d-or-db:5432/livre_d_or livre-d-or-app-image


docker build . -f dockerfile.database -t livre-d-or-db-image

