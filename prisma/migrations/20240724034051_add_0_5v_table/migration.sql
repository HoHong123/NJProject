-- AlterTable
ALTER TABLE "auction" ALTER COLUMN "expiredAt" SET DEFAULT CURRENT_TIMESTAMP + interval '1 week';
