import { hash } from 'bcryptjs'
import { OrgsRepositories } from '../repositories/orgs-repositories.ts'

interface CreateOrgsUseCasesRequest {
  name?: string
  responsible_name: string
  email: string
  password: string
  whatsapp: string
  zip_code: string
  address: string
}

export class CreateOrgsUseCases {
  constructor(private orgsRepositories: OrgsRepositories) {}

  async execute(data: CreateOrgsUseCasesRequest) {
    const passwordHash = await hash(data.password, 6)

    await this.orgsRepositories.create({
      ...data,
      password: passwordHash,
    })

    return { message: 'ORG cadastrada com sucesso!' }
  }
}
