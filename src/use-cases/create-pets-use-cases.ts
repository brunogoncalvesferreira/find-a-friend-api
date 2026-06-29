import { PetsRepositories } from '../repositories/pets-repositories.ts'

interface CreatePetsUseCasesRequest {
  orgs_id: string
  name: string
  about: string
  age: string
  size: string
  energy_level: string
  independence_level: string
  environment: string
  city: string
}

export class CreatePetsUseCases {
  constructor(private petsRepositories: PetsRepositories) {}

  async execute(data: CreatePetsUseCasesRequest) {
    await this.petsRepositories.create(data)

    return { message: 'Pet cadastrado com sucesso!' }
  }
}
