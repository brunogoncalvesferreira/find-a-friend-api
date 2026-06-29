import { Pets, Prisma } from '../../prisma/generated/prisma/client.ts'

export interface PetsRepositories {
  create(data: Prisma.PetsUncheckedCreateInput): Promise<Pets>
}
