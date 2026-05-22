import 'dotenv/config';
import { defineConfig } from 'prisma/config';
import * as dotenv from 'dotenv';

dotenv.config({
  path: 'apps/meme_service/.env',
  override: true,
});

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL,
  },
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
});
