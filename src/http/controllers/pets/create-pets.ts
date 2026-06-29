import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'
import { makeCreatePetsUseCases } from '../../../use-cases/factories/make-create-pets-use-cases.ts'

const createPetsSchema = z.object({
  orgs_id: z.string(),
  name: z.string(),
  about: z.string(),
  age: z.string(),
  size: z.string(),
  energy_level: z.string(),
  independence_level: z.string(),
  environment: z.string(),
  city: z.string().transform((city) => city.toLowerCase().trim()),
  requirements: z.array(z.string()).optional(),
})

export async function createPets(request: FastifyRequest, reply: FastifyReply) {
  try {
    const data = createPetsSchema.parse(request.body)

    const createPetsUseCases = await makeCreatePetsUseCases()

    await createPetsUseCases.execute(data)

    return reply.status(201).send()
  } catch (error) {
    if (error instanceof z.ZodError) {
      return reply.status(400).send({
        message: 'Validation error',
        errors: error.issues,
      })
    }

    throw error
  }
}
