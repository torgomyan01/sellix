-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `parent_id` INTEGER NOT NULL,
    `icon_name` VARCHAR(191) NOT NULL,
    `icon_code` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `image_path` VARCHAR(191) NOT NULL,
    `its_company` BOOLEAN NOT NULL,
    `whats_app` BOOLEAN NOT NULL,
    `telegram` BOOLEAN NOT NULL,
    `viber` BOOLEAN NOT NULL,
    `fb_link` VARCHAR(191) NOT NULL,
    `insta_link` VARCHAR(191) NOT NULL,
    `linkedin_link` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
