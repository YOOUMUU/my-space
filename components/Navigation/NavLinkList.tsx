import { SignInButton } from '@components/buttons';
import NavLink from './NavLink';

const NavLinkList = () => {
  return (
    <div className="flex items-center">
      <NavLink href="/about">About</NavLink>
      <NavLink href="/blog">Notes</NavLink>
      <NavLink href="/users">Users</NavLink>
      <SignInButton />
    </div>
  );
};

export default NavLinkList;
