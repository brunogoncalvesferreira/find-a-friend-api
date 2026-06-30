import { PrismaPetsRepositories } from '../../repositories/prisma/prisma-pets-repositories.ts'
import { FindByIdPetsUseCases } from '../find-by-id-pets-use-cases.ts'

export async function makeFindByIdPetsUseCases() {
  const petsRepositories = new PrismaPetsRepositories()

  const useCases = new FindByIdPetsUseCases(petsRepositories)

  return useCases
}
