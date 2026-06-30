import { PetsRepositories } from '../repositories/pets-repositories.ts'

interface ListPetsUseCasesRequest {
  city?: string
  age?: string
  size?: string
  energy_level?: string
  independence_level?: string
}

export class ListPetsUseCases {
  constructor(private petsRepositories: PetsRepositories) {}

  async execute(data: ListPetsUseCasesRequest) {
    const { pets, totalPets } = await this.petsRepositories.list(data)

    return { pets, totalPets }
  }
}
