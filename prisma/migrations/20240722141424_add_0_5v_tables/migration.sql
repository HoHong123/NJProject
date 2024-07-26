/*
  Warnings:

  - The primary key for the `duckUser` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `name` on the `duckUser` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(32)`.
  - You are about to alter the column `email` on the `duckUser` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(64)`.
  - You are about to alter the column `password` on the `duckUser` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(32)`.
  - The primary key for the `inventory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `items` on the `inventory` table. All the data in the column will be lost.
  - You are about to alter the column `slotSize` on the `inventory` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.

*/
-- AlterTable
ALTER TABLE "duckUser" DROP CONSTRAINT "duckUser_pkey",
ALTER COLUMN "id" SET DATA TYPE BIGINT,
ALTER COLUMN "name" SET DEFAULT '',
ALTER COLUMN "name" SET DATA TYPE VARCHAR(32),
ALTER COLUMN "email" SET DEFAULT '',
ALTER COLUMN "email" SET DATA TYPE VARCHAR(64),
ALTER COLUMN "password" SET DEFAULT '',
ALTER COLUMN "password" SET DATA TYPE VARCHAR(32),
ADD CONSTRAINT "duckUser_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "inventory" DROP CONSTRAINT "inventory_pkey",
DROP COLUMN "items",
ADD COLUMN     "level" SMALLINT NOT NULL DEFAULT 1,
ALTER COLUMN "id" SET DATA TYPE BIGINT,
ALTER COLUMN "userId" SET DATA TYPE BIGINT,
ALTER COLUMN "slotSize" SET DEFAULT 10,
ALTER COLUMN "slotSize" SET DATA TYPE SMALLINT,
ADD CONSTRAINT "inventory_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "ducks" (
    "id" BIGSERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" BIGINT,
    "name" VARCHAR(64) NOT NULL DEFAULT '',
    "image" VARCHAR(256) NOT NULL DEFAULT '',
    "price" BIGINT NOT NULL DEFAULT 0,

    CONSTRAINT "ducks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trade" (
    "id" BIGSERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "auctionId" BIGINT NOT NULL,
    "receiver" BIGINT NOT NULL,

    CONSTRAINT "trade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "receipt" (
    "id" BIGSERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tradeId" BIGINT NOT NULL,
    "status" SMALLINT NOT NULL DEFAULT 0,

    CONSTRAINT "receipt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auction" (
    "id" BIGSERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP + interval '1 week',
    "seller" BIGINT NOT NULL,
    "itemId" BIGINT NOT NULL,
    "price" BIGINT NOT NULL,
    "tax" BIGINT NOT NULL,

    CONSTRAINT "auction_pkey" PRIMARY KEY ("id")
);
