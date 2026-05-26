/*
  Warnings:

  - You are about to drop the column `created_by` on the `meme` table. All the data in the column will be lost.
  - You are about to alter the column `visibility` on the `meme` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(0))`.
  - You are about to alter the column `owner_id` on the `meme` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `Int`.

*/
-- DropIndex
DROP INDEX `Meme_visibility_idx` ON `meme`;

-- AlterTable
ALTER TABLE `meme` DROP COLUMN `created_by`,
    MODIFY `visibility` ENUM('PRIVATE', 'PUBLIC', 'TEMPORARY') NOT NULL DEFAULT 'TEMPORARY',
    MODIFY `owner_id` INTEGER NULL;
