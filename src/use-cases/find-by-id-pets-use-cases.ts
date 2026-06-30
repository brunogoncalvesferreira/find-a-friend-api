import { PetsRepositories } from '../repositories/pets-repositories.ts'

export class FindByIdPetsUseCases {
  constructor(private petsRepositories: PetsRepositories) {}

  async execute(id: string) {
    const pet = await this.petsRepositories.findByIdPet(id)

    return { pet }
  }
}
