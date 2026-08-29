import { PetsRepositories } from '../repositories/pets-repositories.ts'

interface ListPetsUseCasesRequest {
  city?: string | null
  age?: 'BABY' | 'YOUNG' | 'ADULT' | 'SENIOR' | null
  size?: 'SMALL'| 'MEDIUM'| 'LARGE' | null
  energy_level?: 'LOW'| 'MEDIUM'| 'HIGH' | null
  independence_level?: 'LOW'| 'MEDIUM'| 'HIGH' | null
}

export class ListPetsUseCases {
  constructor(private petsRepositories: PetsRepositories) {}

  async execute(data: ListPetsUseCasesRequest) {
    const { pets, totalPets } = await this.petsRepositories.list(data)

    return { pets, totalPets }
  }
}
