/*
  Warnings:

  - You are about to drop the column `owner_id` on the `meme` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Meme_owner_id_idx` ON `meme`;

-- AlterTable
ALTER TABLE `meme` DROP COLUMN `owner_id`,
    ADD COLUMN `expires_at` DATETIME(3) NULL,
    ADD COLUMN `session_id` VARCHAR(191) NULL,
    ADD COLUMN `status` ENUM('DRAFT', 'COMPLETED', 'DELETED') NOT NULL DEFAULT 'DRAFT',
    ADD COLUMN `user_id` INTEGER NULL;

-- CreateTable
CREATE TABLE `Download` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `meme_id` INTEGER NOT NULL,
    `user_id` INTEGER NULL,
    `session_id` VARCHAR(191) NULL,
    `downloaded_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Download_meme_id_idx`(`meme_id`),
    INDEX `Download_user_id_idx`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Meme_user_id_idx` ON `Meme`(`user_id`);

-- CreateIndex
CREATE INDEX `Meme_session_id_idx` ON `Meme`(`session_id`);

-- CreateIndex
CREATE INDEX `Meme_expires_at_idx` ON `Meme`(`expires_at`);

-- AddForeignKey
ALTER TABLE `Download` ADD CONSTRAINT `Download_meme_id_fkey` FOREIGN KEY (`meme_id`) REFERENCES `Meme`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
