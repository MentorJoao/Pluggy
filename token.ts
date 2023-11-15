import { VercelRequest, VercelResponse } from '@vercel/node'
import { PluggyClient } from 'pluggy-sdk'

const { PLUGGY_CLIENT_ID, PLUGGY_CLIENT_SECRET } = process.env

export default function (req: VercelRequest, res: VercelResponse) {
  const pluggyClient = new PluggyClient({
    clientId: "8f6e1465-ed6e-44c6-915a-87db281eb694",
    clientSecret: "732d4631-183c-44d9-bb17-9503f393ec94"
  })

  const { itemId, options } = req.body || {}

  pluggyClient.createConnectToken(itemId, options).then((data) => res.json(data))
}
