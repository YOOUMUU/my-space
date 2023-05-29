'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition rounded px-4 py-2 sm:px-4 sm:py-3 font-medium ${
        isActive
          ? ' text-gray-950 bg-white'
          : ' sm:hover:text-gray-950 sm:hover:bg-white'
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
