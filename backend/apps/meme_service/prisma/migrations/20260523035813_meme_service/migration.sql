/*
  Warnings:

  - You are about to drop the column `texte` on the `meme` table. All the data in the column will be lost.
  - You are about to alter the column `visibility` on the `meme` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `Enum(EnumId(0))`.
  - You are about to drop the column `text` on the `textlayer` table. All the data in the column will be lost.
  - You are about to alter the column `x_position` on the `textlayer` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `y_position` on the `textlayer` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - Added the required column `owner_id` to the `Meme` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `TextLayer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `TextLayer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `meme` DROP COLUMN `texte`,
    ADD COLUMN `owner_id` VARCHAR(255) NOT NULL,
    MODIFY `visibility` ENUM('PRIVATE', 'PUBLIC', 'ARCHIVED') NOT NULL DEFAULT 'PRIVATE';

-- AlterTable
ALTER TABLE `textlayer` DROP COLUMN `text`,
    ADD COLUMN `content` VARCHAR(255) NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `rotation` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `stroke_color` VARCHAR(255) NOT NULL DEFAULT '#000000',
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL,
    ADD COLUMN `z_index` INTEGER NOT NULL DEFAULT 0,
    MODIFY `x_position` DOUBLE NOT NULL,
    MODIFY `y_position` DOUBLE NOT NULL,
    MODIFY `font_size` INTEGER NOT NULL DEFAULT 32,
    MODIFY `font_family` VARCHAR(255) NOT NULL DEFAULT 'impact',
    MODIFY `color` VARCHAR(255) NOT NULL DEFAULT '#FFFFFF';

-- CreateIndex
CREATE INDEX `Meme_owner_id_idx` ON `Meme`(`owner_id`);

-- CreateIndex
CREATE INDEX `Meme_visibility_idx` ON `Meme`(`visibility`);

-- CreateIndex
CREATE INDEX `TextLayer_meme_id_idx` ON `TextLayer`(`meme_id`);

-- AddForeignKey
ALTER TABLE `TextLayer` ADD CONSTRAINT `TextLayer_meme_id_fkey` FOREIGN KEY (`meme_id`) REFERENCES `Meme`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
