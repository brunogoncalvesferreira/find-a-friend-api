import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'
import { makeListPetsUseCases } from '../../../use-cases/factories/make-list-pets-use-cases.ts'

const listPetsSchemaParams = z.object({
  city: z
    .string()
    .transform((city) => city.toLowerCase().trim())
    .optional(),
  age: z.enum(['BABY', 'YOUNG', 'ADULT', 'SENIOR']).optional(),
  size: z.enum(['SMALL', 'MEDIUM', 'LARGE']).optional(),
  energy_level: z.enum(['LOW', 'MEDIUM', 'HIGH']).optional(),
  independence_level: z.enum(['LOW', 'MEDIUM', 'HIGH']).optional(),
})

export async function listPets(request: FastifyRequest, reply: FastifyReply) {
  try {
    const data = listPetsSchemaParams.parse(request.query)

    const listPetsUseCases = await makeListPetsUseCases()

    const { pets, totalPets } = await listPetsUseCases.execute(data)

    return reply.status(200).send({ pets, totalPets })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return reply
        .status(400)
        .send({ message: 'Invalid request parameters', errors: error })
    }
  }
}
