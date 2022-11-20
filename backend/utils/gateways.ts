import { nanoid } from 'nanoid'
import { PocketbaseClientGateway } from './../adapters/secondary/gateways/client/PocketbaseClientGateway'
import type { ClientGateway } from '~/core/gateways/ClientGateway'
import { InMemoryClientGateway } from '~/adapters/secondary/gateways/client/InMemoryClientGateway'

let chosenClientGateway: ClientGateway
if (useRuntimeConfig().backend === 'in-memory') {
  const gateway = new InMemoryClientGateway(nanoid)
  gateway.set([
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Doe' },
  ])
  chosenClientGateway = gateway
}
else if (useRuntimeConfig().backend === 'pocketbase') {
  chosenClientGateway = new PocketbaseClientGateway()
}

const clientGateway = chosenClientGateway

export {
  clientGateway,
}
