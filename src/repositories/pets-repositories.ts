import { Pets, Prisma } from '../../prisma/generated/prisma/client.ts'

export interface ListPetsParams {
  city?: string // cidade do animal
  age?: string // idade do animal
  size?: string // porte do animal
  energy_level?: string // nível de energia
  independence_level?: string // nível de independência
}

export interface PetsRepositories {
  create(data: Prisma.PetsUncheckedCreateInput): Promise<Pets>
  list(data: ListPetsParams): Promise<{ pets: Pets[]; totalPets: number }>
}
