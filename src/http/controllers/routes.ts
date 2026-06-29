import { FastifyInstance } from 'fastify'
import { createOrgs } from './orgs/create-orgs.ts'
import { autenticate } from './orgs/autenticate.ts'

export async function routes(app: FastifyInstance) {
  app.post('/orgs', createOrgs)
  app.post('/sessions', autenticate)
}
