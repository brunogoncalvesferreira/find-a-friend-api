import { Orgs } from '../../../prisma/generated/prisma/client.ts'
import { OrgsCreateInput } from '../../../prisma/generated/prisma/models.ts'
import { prisma } from '../../lib/prisma.ts'
import { OrgsRepositories } from '../orgs-repositories.ts'

export class PrismaOrgsRepositories implements OrgsRepositories {
  async create(data: OrgsCreateInput): Promise<Orgs> {
    const org = await prisma.orgs.create({
      data,
    })

    return org
  }

  async findByEmail(email: string): Promise<Orgs | null> {
    const org = await prisma.orgs.findUnique({
      where: {
        email,
      },
    })

    return org
  }
}
