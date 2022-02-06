import { prismaClient } from '../prisma/client';

export const createUser = async (email: string) => {
  prismaClient.user.create({ data: { email } });
};
