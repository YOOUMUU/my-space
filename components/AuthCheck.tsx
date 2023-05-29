'use client';

import { useSession } from 'next-auth/react';

interface Props {
  children: React.ReactNode;
}

const AuthCheck = ({ children }: Props) => {
  const { data: session, status } = useSession();

  if (status === 'loading') return <p>Loading...</p>;

  if (status === 'authenticated') return <>{children}</>;

  return <p>Access Denied</p>;
};

export default AuthCheck;
