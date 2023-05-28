import NavLink from '@components/Navigation/NavLink';
import NavMenu from '@components/Navigation/NavMenu';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-gray-950 text-white">
      <div className="container flex justify-between space-x-4 items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="My Space Logo" width={80} height={20} />
        </Link>
        <div>
          <NavMenu />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
