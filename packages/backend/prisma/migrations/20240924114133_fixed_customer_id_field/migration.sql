/*
  Warnings:

  - A unique constraint covering the columns `[customer_id]` on the table `subscriptions` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "subscriptions_customer_id_key" ON "subscriptions"("customer_id");
