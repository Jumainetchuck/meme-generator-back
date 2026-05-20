### installer nestjs dans le dossier backend global

### initiaiser git dans le dossier global de l'application qui contient backend, frontend, ...

### creer le workspace nest dans le dossier backend
nest new . " . pour creer le projet dans le dossier actuel"

### Transformer en monorepo NestJS, Nest possède un support natif du monorepo.
nest generate app api-gateway / nest g app api-gateway
nest g app auth_service
Chaque app devient un microservice indépendant.

###  installe le paquet officiel de NestJS permettant de créer et de connecter des 
### architectures de microservices
npm install @nestjs/microservices

### installer le paquet officiel de NestJS pour gérer les variables d'environnement 
### et la configuration de votre application .env .dotenv
npm install @nestjs/config

### lancer un microservice
npm run start api-gateway

### migration meme service
npx prisma migrate dev \
--schema=apps/meme-service/prisma/schema.prisma
### npm run db:auth:migrate avec l'automatisation de la migration pour le service auth-service

### generer les clients prisma pour chaque service
npx prisma generate \
--schema=apps/auth-service/prisma/schema.prisma



### installer swagger
npm install --save @nestjs/swagger

### installer nestjs
npm i -g @nestjs/cli

### creer app nest
nest new app-name

### creer module
nest g mo nom-module

### installer prisma
npm install prisma --save-dev
npx prisma init
npm install @prisma/client
npx prisma

### migrer son schema vers la base de donnees
npx prisma migrate dev --name init

### class validator
npm install class-validator class-transformer

### installer l'adaptateur mariadb
npm install --save-dev @prisma/adapter-mariadb

### paquets pour gerer la config typescript de prisma
npm install @prisma/config dotenv --save-dev
