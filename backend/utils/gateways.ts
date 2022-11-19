import { nanoid } from 'nanoid'
import { setClientsFromStorage } from './../adapters/primary/nitro/setClientsFromStorage'
import { InMemoryClientGateway } from '~/adapters/secondary/gateways/client/InMemoryClientGateway'

const clientGateway = new InMemoryClientGateway(nanoid)
setClientsFromStorage(useStorage(), clientGateway)

export {
  clientGateway,
}
