import type { ClientGateway } from '~/core/gateways/ClientGateway'
import type { Client } from '~/core/types/client'
import { ClientError } from '~/core/errors/ClientError'

export class InMemoryClientGateway implements ClientGateway {
  private clients: Client[] = []
  private uuidGenerator: () => string

  constructor(uuidGenerator: () => string) {
    this.uuidGenerator = uuidGenerator
  }

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

  async getById(id: string): Promise<Client> {
    const foundClient = this.clients.find(client => client.id === id)
    if (!foundClient)
      throw new ClientError(`No client with this id (${id})`, 404)
    return Promise.resolve(foundClient)
  }

  async create(name: string): Promise<Client> {
    if (!name)
      throw new ClientError('Client name is not valid', 400)
    const newClient: Client = {
      id: this.uuidGenerator(),
      name,
    }
    this.clients.push(newClient)
    return Promise.resolve(newClient)
  }

  async update(modifiedClient: Client): Promise<Client> {
    const modifiedClientIndex = this.clients.findIndex(client => client.id === modifiedClient.id)
    if (modifiedClientIndex === -1)
      throw new ClientError(`No client with this id (${modifiedClient.id})`, 404)
    this.clients[modifiedClientIndex] = modifiedClient
    return Promise.resolve(this.clients[modifiedClientIndex])
  }
}
