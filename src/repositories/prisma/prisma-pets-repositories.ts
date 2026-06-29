import { Pets } from '../../../prisma/generated/prisma/client.ts'
import { PetsCreateInput } from '../../../prisma/generated/prisma/models.ts'
import { prisma } from '../../lib/prisma.ts'
import { PetsRepositories } from '../pets-repositories.ts'

export class PrismaPetsRepositories implements PetsRepositories {
  async create(data: PetsCreateInput): Promise<Pets> {
    const pet = await prisma.pets.create({
      data,
    })

    return pet
  }
}
