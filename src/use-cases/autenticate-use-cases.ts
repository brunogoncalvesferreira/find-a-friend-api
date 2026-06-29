import { compare } from 'bcryptjs'
import { OrgsRepositories } from '../repositories/orgs-repositories.ts'
import { Orgs } from '../../prisma/generated/prisma/client.ts'
import { InvalidCredentialsError } from './errors/invalid-credentials-errror.ts'

interface AutenticateUseCasesRequest {
  email: string
  password: string
}

interface AutenticateUseCasesResponse {
  org: Orgs
}

export class AutenticateUseCases {
  constructor(private orgsRepositories: OrgsRepositories) {}

  async execute(
    data: AutenticateUseCasesRequest,
  ): Promise<AutenticateUseCasesResponse> {
    const { email, password } = data

    const org = await this.orgsRepositories.findByEmail(email)

    if (!org) {
      throw new InvalidCredentialsError()
    }

    const passwordCompare = await compare(password, org.password)

    if (!passwordCompare) {
      throw new InvalidCredentialsError()
    }

    return {
      org,
    }
  }
}
