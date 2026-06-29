import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'
import { makeCreateOrgsUseCases } from '../../../use-cases/factories/make-create-orgs-use-cases.ts'

const createOrgsSchema = z.object({
  name: z.string().optional(),
  responsible_name: z.string(),
  email: z.email(),
  zip_code: z.string(),
  address: z.string(),
  password: z.string().min(6),
  whatsapp: z.string(),
})

export async function createOrgs(request: FastifyRequest, reply: FastifyReply) {
  const data = createOrgsSchema.parse(request.body)

  const createOrgsUseCases = await makeCreateOrgsUseCases()

  const { message } = await createOrgsUseCases.execute(data)

  return reply.status(201).send({ message })
}
