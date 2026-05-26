/*
  Warnings:

  - A unique constraint covering the columns `[titlte]` on the table `Meme` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Meme_titlte_key` ON `Meme`(`titlte`);
