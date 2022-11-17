import type { Client } from '@core/types/client'

export interface ClientGateway {
  set(clients: Client[]): void
  getAll(): Promise<Client[]>
}
