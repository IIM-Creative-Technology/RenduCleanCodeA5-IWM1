import { Client} from "~/core/types/client";
import { ClientGateway} from "~/core/gateways/ClientGateway";

export const addClient = async (name: string, clientGateway: ClientGateway): Promise<Client> => {
  return await clientGateway.create(name)
}
