// Prisma 7 configuration
// Uses dotenv to load DATABASE_URL since Prisma skips auto env loading with config file
// Install: npm install dotenv
// Docs: https://pris.ly/d/config-datasource

import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
