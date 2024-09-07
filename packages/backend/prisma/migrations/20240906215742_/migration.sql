/*
  Warnings:

  - You are about to drop the column `expiresIn` on the `subscriptions` table. All the data in the column will be lost.
  - Added the required column `expiresAt` to the `subscriptions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "subscriptions" DROP COLUMN "expiresIn",
ADD COLUMN     "expiresAt" TIMESTAMP(3) NOT NULL;
