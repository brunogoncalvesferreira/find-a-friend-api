import { PrismaPetsRepositories } from '../../repositories/prisma/prisma-pets-repositories.ts'
import { ListPetsUseCases } from '../list-pets-use-cases.ts'

export async function makeListPetsUseCases() {
  const petsRepositories = new PrismaPetsRepositories()

  const useCases = new ListPetsUseCases(petsRepositories)

  return useCases
}
