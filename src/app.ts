import 'dotenv/config'

import fastify from 'fastify'
import { routes } from './http/controllers/routes.ts'
import fastifyJwt from '@fastify/jwt'
import fastifyCookie from '@fastify/cookie'

export const app = fastify()

app.register(fastifyCookie)

app.register(fastifyJwt, {
  secret: process.env.JWT_SECRET!,
  sign: {
    expiresIn: '10m',
  },
})

app.register(routes)
