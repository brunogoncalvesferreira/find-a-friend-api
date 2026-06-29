import { Pets } from '../../prisma/generated/prisma/client.ts'
import { prisma } from '../lib/prisma.ts'
import { PetsRepositories } from '../repositories/pets-repositories.ts'

interface CreatePetsUseCasesRequest {
  orgs_id: string
  name: string
  about: string
  age: string
  size: string
  energy_level: string
  independence_level: string
  environment: string
  city: string
  requirements?: string[]
}

export class CreatePetsUseCases {
  constructor(private petsRepositories: PetsRepositories) {}

  async execute(data: CreatePetsUseCasesRequest): Promise<Pets> {
    const pet = await this.petsRepositories.create({
      name: data.name,
      about: data.about,
      age: data.age,
      size: data.size,
      energy_level: data.energy_level,
      independence_level: data.independence_level,
      environment: data.environment,
      city: data.city,
      orgs_id: data.orgs_id,
    })

    if (data.requirements) {
      const requirementsArray = data.requirements.map((requirement) => {
        return { pets_id: pet.id, requirements: requirement }
      })

      await prisma.adoptionRequirements.createMany({
        data: requirementsArray,
      })
    }

    return pet
  }
}
