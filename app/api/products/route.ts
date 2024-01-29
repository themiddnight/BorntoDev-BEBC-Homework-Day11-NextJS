import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET () {
  const products = await prisma.product.findMany();
  return Response.json(products);
};

export async function POST (req: Request) {
  const { name, description, price } = await req.json();
  try {
    const product = await prisma.product.create({ data: { name, description, price } });
    return Response.json(product);
  } catch (error) {
    return Response.json({ error });
  }
}