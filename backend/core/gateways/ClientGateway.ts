import type { Client } from '~/core/types/client'

export interface ClientGateway {
  set(clients: Client[]): void
  getAll(): Promise<Client[]>
  getById(id: string): Promise<Client>
  remove(id: string): Promise<Client>
  search(query: string): Promise<Client[]>
  create(name: string): Promise<Client>
  update(modifiedClient: Client): Promise<Client>
}
