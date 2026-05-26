/*
  Warnings:

  - You are about to drop the column `titlte` on the `meme` table. All the data in the column will be lost.
  - Added the required column `title` to the `Meme` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Meme_titlte_key` ON `meme`;

-- AlterTable
ALTER TABLE `meme` DROP COLUMN `titlte`,
    ADD COLUMN `title` VARCHAR(255) NOT NULL;
