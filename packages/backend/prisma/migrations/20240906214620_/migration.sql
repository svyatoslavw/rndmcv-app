/*
  Warnings:

  - Added the required column `expiresIn` to the `subscriptions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "subscriptions" ADD COLUMN     "expiresIn" TIMESTAMP(3) NOT NULL;
