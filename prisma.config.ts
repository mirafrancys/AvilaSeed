import { defineConfig } from "@prisma/config";

export default defineConfig({
  schema: {
    kind: "postgres",
    url: process.env.DATABASE_URL,
  },
});
