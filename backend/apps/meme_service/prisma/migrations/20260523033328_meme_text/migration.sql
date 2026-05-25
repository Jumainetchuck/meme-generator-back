/*
  Warnings:

  - Added the required column `texte` to the `Meme` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `meme` ADD COLUMN `texte` VARCHAR(255) NOT NULL;
