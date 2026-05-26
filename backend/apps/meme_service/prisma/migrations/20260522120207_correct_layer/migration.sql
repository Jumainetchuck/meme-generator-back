/*
  Warnings:

  - You are about to drop the `textplayer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `textplayer`;

-- CreateTable
CREATE TABLE `TextLayer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `meme_id` INTEGER NOT NULL,
    `text` VARCHAR(255) NOT NULL,
    `x_position` INTEGER NOT NULL,
    `y_position` INTEGER NOT NULL,
    `font_size` INTEGER NOT NULL,
    `font_family` VARCHAR(255) NOT NULL,
    `color` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
