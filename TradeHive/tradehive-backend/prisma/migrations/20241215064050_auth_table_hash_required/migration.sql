/*
  Warnings:

  - Made the column `hashed_password` on table `auths` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "auths" ALTER COLUMN "hashed_password" SET NOT NULL;
