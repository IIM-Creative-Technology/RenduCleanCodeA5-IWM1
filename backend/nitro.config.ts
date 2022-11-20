import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
  runtimeConfig: {
    env: process.env.ENVIRONMENT,
    backend: process.env.BACKEND,
    pocketbaseUrl: process.env.POCKETBASE_URL,
  },
})
