import type { ClientGateway } from '~/core/gateways/ClientGateway'
import type { Client } from '~/core/types/client'
import { ClientError } from '~/core/errors/ClientError'

export class InMemoryClientGateway implements ClientGateway {
  private clients: Client[] = []

  set(clients: Array<Client>) {
    this.clients = clients
  }

  async getAll(): Promise<Client[]> {
    return Promise.resolve(this.clients)
  }

  async remove(id: string): Promise<Client> {
    const clientIndex = this.clients.findIndex(client => client.id === id)
    if (clientIndex === -1)
      throw new ClientError(`No client with this id (${id})`, 404)
    return this.clients.splice(clientIndex, 1)[0]
  }

  async search(query: string): Promise<Client[]> {
    return this.clients.filter(client => client.name.includes(query))
  }
}
