import { Orgs, Prisma } from '../../prisma/generated/prisma/client.ts'

export interface OrgsRepositories {
  create(data: Prisma.OrgsCreateInput): Promise<Orgs>
  findByEmail(email: string): Promise<Orgs | null>
}
