import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET (req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  try {
    const product = await prisma.product.findUnique({ where: { id } });
    return Response.json(product);
  } catch (error) {
    return Response.json({ error });
  }
}

export async function PUT (req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const { name, description, price } = await req.json();
  try {
    const product = await prisma.product.update({ where: { id }, data: { name, description, price } });
    return Response.json(product);
  } catch (error) {
    return Response.json({ error });
  }
}

export async function DELETE (req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  try {
    const product = await prisma.product.delete({ where: { id } });
    return Response.json(product);
  } catch (error) {
    return Response.json({ error });
  }
}