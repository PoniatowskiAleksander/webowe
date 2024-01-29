-- CreateTable
CREATE TABLE `dane` (
    `name` VARCHAR(40) NOT NULL,
    `email` VARCHAR(40) NOT NULL,
    `subject` VARCHAR(40) NOT NULL,
    `content` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `dane_email_key`(`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `students` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL,
    `surname` VARCHAR(40) NOT NULL,
    `email` VARCHAR(40) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subjects` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL,
    `hoursAWeek` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
