/*
  Warnings:

  - You are about to drop the column `user_name` on the `auths` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `auths` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "auths_user_name_key";

-- AlterTable
ALTER TABLE "auths" DROP COLUMN "user_name",
ADD COLUMN     "email" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "auths_email_key" ON "auths"("email");
