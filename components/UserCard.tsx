import Image from 'next/image';
import Link from 'next/link';

interface Props {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
}

const UserCard = ({ id, name, email, image }: Props) => {
  return (
    <div className="min-h-full text-center flex flex-col justify-between rounded p-4 border border-gray-200 bg-gray-50 shadow-lg shadow-gray-100">
      <img
        src={image ?? '/mememan.webp'}
        alt={`${name}'s profile picture`}
        className="w-full rounded h-64 object-cover"
      />
      <div>
        <Link href={`/users/${id}`}>
          <h3 className="text-lg mt-2 font-bold">{name}</h3>
        </Link>
        <p>{email ? `email:${email}` : ''}</p>
      </div>
    </div>
  );
};

export default UserCard;
