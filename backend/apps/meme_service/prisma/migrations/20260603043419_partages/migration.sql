-- CreateTable
CREATE TABLE `MemeShare` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `meme_id` INTEGER NOT NULL,
    `platform` VARCHAR(50) NOT NULL,
    `user_id` INTEGER NULL,
    `session_id` VARCHAR(191) NULL,
    `share_url` VARCHAR(500) NOT NULL,
    `isPublic` BOOLEAN NOT NULL DEFAULT false,
    `shared_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `expires_at` DATETIME(3) NULL,

    INDEX `MemeShare_meme_id_idx`(`meme_id`),
    INDEX `MemeShare_platform_idx`(`platform`),
    INDEX `MemeShare_user_id_idx`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MemeShare` ADD CONSTRAINT `MemeShare_meme_id_fkey` FOREIGN KEY (`meme_id`) REFERENCES `Meme`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
