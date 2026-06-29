import { PrismaOrgsRepositories } from '../../repositories/prisma/prisma-orgs-repositories.ts'
import { CreateOrgsUseCases } from '../create-orgs-use-cases.ts'

export async function makeCreateOrgsUseCases() {
  const orgsRepositories = new PrismaOrgsRepositories()

  const useCases = new CreateOrgsUseCases(orgsRepositories)

  return useCases
}
