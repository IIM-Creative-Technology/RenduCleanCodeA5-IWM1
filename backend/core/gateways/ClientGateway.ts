import type { Client } from '~/core/types/client'

export interface ClientGateway {
  set(clients: Client[]): void
  getAll(): Promise<Client[]>
  remove(id: string): Promise<Client>
  search(query: string): Promise<Client[]>
}
