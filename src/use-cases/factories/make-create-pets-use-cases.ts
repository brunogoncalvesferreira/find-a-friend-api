import { PrismaPetsRepositories } from '../../repositories/prisma/prisma-pets-repositories.ts'
import { CreatePetsUseCases } from '../create-pets-use-cases.ts'

export async function makeCreatePetsUseCases() {
  const petsRepositories = new PrismaPetsRepositories()

  const useCases = new CreatePetsUseCases(petsRepositories)

  return useCases
}
