-- CreateEnum
CREATE TYPE "ProjectSource" AS ENUM ('OPEN_SOURCE', 'CLOSED_SOURCE');

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "link" TEXT NOT NULL,
    "source" "ProjectSource" NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
