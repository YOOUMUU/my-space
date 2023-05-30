import UserCard from '@components/UserCard';
import { prisma } from '@lib/prisma';

export default async function User() {
  const users = await prisma.user.findMany();

  return (
    <div className="container grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {users.map((user) => {
        return (
          <UserCard
            id={user.id}
            name={user.name}
            email={user.email}
            image={user.image}
          />
        );
      })}
    </div>
  );
}
