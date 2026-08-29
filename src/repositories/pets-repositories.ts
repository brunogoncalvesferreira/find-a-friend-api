import { Pets, Prisma } from '../../prisma/generated/prisma/client.ts'

export interface ListPetsParams {
  city?: string | null // cidade do animal
  age?: 'BABY' | 'YOUNG' | 'ADULT' | 'SENIOR' | null // idade do animal
  size?: 'SMALL'| 'MEDIUM'| 'LARGE' | null // porte do animal
  energy_level?: 'LOW'| 'MEDIUM'| 'HIGH' | null // nível de energia
  independence_level?: 'LOW'| 'MEDIUM'| 'HIGH' | null // nível de independência
}

export interface PetsRepositories {
  create(data: Prisma.PetsUncheckedCreateInput): Promise<Pets>
  list(data: ListPetsParams): Promise<{ pets: Pets[]; totalPets: number }>
  findByIdPet(id: string): Promise<Pets | null>
}
