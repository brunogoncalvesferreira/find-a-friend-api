import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'
import { makeFindByIdPetsUseCases } from '../../../use-cases/factories/make-find-by-id-pets-use-cases.ts'

const findByIdPetsParamsSchema = z.object({
  id: z.string(),
})

export async function findByIdPets(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const { id } = findByIdPetsParamsSchema.parse(request.params)

    const findByIdPetsUseCases = await makeFindByIdPetsUseCases()

    const { pet } = await findByIdPetsUseCases.execute(id)

    return reply.status(200).send({ pet })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return reply.status(400).send({ message: error.issues })
    }
  }
}
