import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'
import { makeAutenticateUseCases } from '../../../use-cases/factories/make-autenticate-use-cases.ts'
import { InvalidCredentialsError } from '../../../use-cases/errors/invalid-credentials-errror.ts'

const autenticateSchema = z.object({
  email: z.email(),
  password: z.string(),
})

export async function autenticate(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const { email, password } = autenticateSchema.parse(request.body)

    const autenticateUseCases = await makeAutenticateUseCases()

    const { org } = await autenticateUseCases.execute({ email, password })

    const token = await reply.jwtSign(
      {},
      {
        sign: {
          sub: org.id,
        },
      },
    )

    const refreshToken = await reply.jwtSign(
      {},
      {
        sign: {
          sub: org.id,
          expiresIn: '7d',
        },
      },
    )

    return reply
      .setCookie('refreshToken', refreshToken, {
        path: '/',
        secure: true,
        sameSite: 'strict',
        httpOnly: true,
      })
      .status(200)
      .send({ token })
  } catch (error) {
    if (error instanceof InvalidCredentialsError) {
      return reply.status(400).send({ message: error.message })
    }

    return reply.status(500).send({ message: 'Internal server error' })
  }
}
