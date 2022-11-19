import type { Client } from '~/core/types/client'

// This plugin is used to init the server with basic data
export default defineNitroPlugin(async () => {
  const { env } = useRuntimeConfig()
  if (env === 'development') {
    await useStorage().setItem('clients', [
      { id: '1', name: 'John Doe' },
      { id: '2', name: 'Jane Doe' },
    ] as Client[])
  }
})
