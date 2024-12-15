/*
  Warnings:

  - A unique constraint covering the columns `[user_name]` on the table `auths` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "auths_user_name_key" ON "auths"("user_name");
