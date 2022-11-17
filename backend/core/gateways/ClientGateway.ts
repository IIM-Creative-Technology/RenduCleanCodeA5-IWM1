import type { Client } from '@core/types/client'

export interface ClientGateway {
  getAll(): Promise<Client[]>
}
