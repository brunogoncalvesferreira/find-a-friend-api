import { Pets } from '../../../prisma/generated/prisma/client.ts'
import { PetsCreateInput } from '../../../prisma/generated/prisma/models.ts'
import { prisma } from '../../lib/prisma.ts'
import { ListPetsParams, PetsRepositories } from '../pets-repositories.ts'

export class PrismaPetsRepositories implements PetsRepositories {
  async create(data: PetsCreateInput): Promise<Pets> {
    const pet = await prisma.pets.create({
      data,
    })

    return pet
  }

  async list(
    data: ListPetsParams,
  ): Promise<{ pets: Pets[]; totalPets: number }> {
    const pets = await prisma.pets.findMany({
      where: {
        city: {
          contains: data.city,
        },
        age: {
          contains: data.age,
        },
        size: {
          contains: data.size,
        },
        energy_level: {
          contains: data.energy_level,
        },
        independence_level: {
          contains: data.independence_level,
        },
      },
    })

    const totalPets = await prisma.pets.count({
      where: {
        city: {
          contains: data.city,
        },
        age: {
          contains: data.age,
        },
        size: {
          contains: data.size,
        },
        energy_level: {
          contains: data.energy_level,
        },
        independence_level: {
          contains: data.independence_level,
        },
      },
    })

    return { pets, totalPets }
  }

  async findByIdPet(id: string): Promise<Pets | null> {
    const pet = await prisma.pets.findUnique({
      where: {
        id,
      },

      include: {
        orgs: {
          select: {
            responsible_name: true,
            whatsapp: true,
          },
        },
      },
    })

    return pet
  }
}
