import type { ClientGateway } from '@core/gateways/clientGateway'
import type { Client } from '@core/types/client'

export class InMemoryClientGateway implements ClientGateway {
  private clients: Client[] = []

  set(clients: Array<Client>) {
    this.clients = clients
  }

  async getAll(): Promise<Client[]> {
    return Promise.resolve(this.clients)
  }
}
