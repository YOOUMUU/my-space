import { prisma } from '@lib/prisma';
import { Metadata } from 'next';

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  return { title: `User Profile of ${user?.name}` };
}

export default async function UserProfile({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  const { name, email, image } = user ?? {};

  return (
    <div className="container">
      <h1 className="title font-bold">{name}</h1>
      <img src={image ?? '/mememan.webp'} alt={`${name}'s profile picture`} />
      <p className="mt-5 text-md font-medium">{`Email: ${email}`}</p>
    </div>
  );
}
