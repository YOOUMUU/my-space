'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export const SignInButton = () => {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return (
      <>
        <SignOutButton />
        <Link href="/dashboard">
          <Image
            src={session?.user?.image ?? '/mememan.webp'}
            width={36}
            height={36}
            alt="Your Name"
            className="rounded ml-2"
          />
        </Link>
      </>
    );
  }

  return (
    <button
      className="transition rounded px-4 py-2 sm:px-4 sm:py-3 font-medium  sm:hover:text-gray-950 sm:hover:bg-white"
      onClick={() => signIn()}
    >
      Sign In
    </button>
  );
};

export const SignOutButton = () => {
  return (
    <button
      className="transition rounded px-4 py-2 sm:px-4 sm:py-3 font-medium  sm:hover:text-gray-950 sm:hover:bg-white"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
};
