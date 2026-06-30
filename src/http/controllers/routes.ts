import { FastifyInstance } from 'fastify'
import { createOrgs } from './orgs/create-orgs.ts'
import { autenticate } from './orgs/autenticate.ts'
import { createPets } from './pets/create-pets.ts'
import { verifyAuth } from '../../middleware/verify-auth.ts'
import { listPets } from './pets/list-pets.ts'
import { findByIdPets } from './pets/find-by-id-pets.ts'

export async function routes(app: FastifyInstance) {
  app.post('/orgs', createOrgs)
  app.post('/sessions', autenticate)

  app.post('/pets', { onRequest: [verifyAuth] }, createPets)
  app.get('/pets', listPets)
  app.get('/pets/:id', findByIdPets)
}
