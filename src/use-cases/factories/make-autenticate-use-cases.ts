import { PrismaOrgsRepositories } from '../../repositories/prisma/prisma-orgs-repositories.ts'
import { AutenticateUseCases } from '../autenticate-use-cases.ts'

export async function makeAutenticateUseCases() {
  const orgsRepositories = new PrismaOrgsRepositories()

  const useCases = new AutenticateUseCases(orgsRepositories)

  return useCases
}
