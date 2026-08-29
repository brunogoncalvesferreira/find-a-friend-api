/*
  Warnings:

  - Changed the type of `size` on the `pets` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `energy_level` on the `pets` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `independence_level` on the `pets` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `environment` on the `pets` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Size" AS ENUM ('SMALL', 'MEDIUM', 'LARGE');

-- CreateEnum
CREATE TYPE "EnergyLevel" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "IndependenceLevel" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "Environment" AS ENUM ('APARTMENT', 'HOUSE_BACKYARD', 'HOUSE_WITHOUT_BACKYARD', 'FARM_ESTATE');

-- AlterTable
ALTER TABLE "pets" DROP COLUMN "size",
ADD COLUMN     "size" "Size" NOT NULL,
DROP COLUMN "energy_level",
ADD COLUMN     "energy_level" "EnergyLevel" NOT NULL,
DROP COLUMN "independence_level",
ADD COLUMN     "independence_level" "IndependenceLevel" NOT NULL,
DROP COLUMN "environment",
ADD COLUMN     "environment" "Environment" NOT NULL;
