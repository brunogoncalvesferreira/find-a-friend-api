import { FastifyInstance } from 'fastify'
import { createOrgs } from './orgs/create-orgs.ts'
import { autenticate } from './orgs/autenticate.ts'
import { createPets } from './pets/create-pets.ts'
import { verifyAuth } from '../../middleware/verify-auth.ts'

export async function routes(app: FastifyInstance) {
  app.post('/orgs', createOrgs)
  app.post('/sessions', autenticate)

  app.post('/pets', { onRequest: [verifyAuth] }, createPets)
}
