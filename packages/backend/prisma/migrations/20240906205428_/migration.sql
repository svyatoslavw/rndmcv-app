-- CreateEnum
CREATE TYPE "EnumSubscription" AS ENUM ('BASIC', 'STANDART', 'PREMIUM');

-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);
