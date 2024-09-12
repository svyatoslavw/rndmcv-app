/*
  Warnings:

  - You are about to drop the column `content` on the `resumes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `resumes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customization` to the `resumes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `general` to the `resumes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "resumes" DROP COLUMN "content",
ADD COLUMN     "customization" JSONB NOT NULL,
ADD COLUMN     "general" JSONB NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "resumes_id_key" ON "resumes"("id");
