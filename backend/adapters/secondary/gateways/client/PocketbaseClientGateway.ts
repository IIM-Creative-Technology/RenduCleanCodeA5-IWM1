import { ClientError } from '~/core/errors/ClientError'
import type { ClientGateway } from '~/core/gateways/ClientGateway'
import type { Client } from '~/core/types/client'

export class PocketbaseClientGateway implements ClientGateway {
  private pocketbaseUrl: string

  constructor() {
    this.pocketbaseUrl = useRuntimeConfig().pocketbaseUrl
  }

  async getAll(): Promise<Client[]> {
    try {
      const response = await fetch(`${this.pocketbaseUrl}/collections/clients/records`)
      const json = await response.json()
      const clients: Client[] = json.items.map(item => ({
        id: item.id,
        name: item.name,
      }))
      return clients
    }
    catch (error) {
      throw new ClientError(error.message, error.code)
    }
  }

  async remove(id: string): Promise<Client> {
    try {
      const response = await fetch(`${this.pocketbaseUrl}/collections/clients/records/${id}`)
      const json = await response.json()
      const client: Client = {
        id: json.id,
        name: json.name,
      }
      await fetch(`${this.pocketbaseUrl}/collections/clients/records/${id}`, {
        method: 'DELETE',
      })
      return client
    }
    catch (error) {
      throw new ClientError(error.message, error.code)
    }
  }

  async search(query: string): Promise<Client[]> {
    try {
      const response = await fetch(`${this.pocketbaseUrl}/collections/clients/records?filter=(name~${query})`)
      const json = await response.json()
      const clients: Client[] = json.items.map(item => ({
        id: item.id,
        name: item.name,
      }))
      return clients
    }
    catch (error) {
      throw new ClientError(error.message, error.code)
    }
  }

  async getById(id: string): Promise<Client> {
    try {
      const response = await fetch(`${this.pocketbaseUrl}/collections/clients/records/${id}`)
      const json = await response.json()
      const client: Client = {
        id: json.id,
        name: json.name,
      }
      return client
    }
    catch (error) {
      throw new ClientError(error.message, error.code)
    }
  }

  async create(name: string): Promise<Client> {
    try {
      const response = await fetch(`${this.pocketbaseUrl}/collections/clients/records`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
        }),
      })
      const json = await response.json()
      const client: Client = {
        id: json.id,
        name: json.name,
      }
      return client
    }
    catch (error) {
      throw new ClientError(error.message, error.code)
    }
  }

  async update(modifiedClient: Client): Promise<Client> {
    try {
      const response = await fetch(`${this.pocketbaseUrl}/collections/clients/records/${modifiedClient.id}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: modifiedClient.name,
        }),
      })
      const json = await response.json()
      const client: Client = {
        id: json.id,
        name: json.name,
      }
      return client
    }
    catch (error) {
      throw new ClientError(error.message, error.code)
    }
  }
}
