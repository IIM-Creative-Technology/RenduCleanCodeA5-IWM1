import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
  runtimeConfig: {
    env: process.env.ENVIRONMENT,
  },
})
