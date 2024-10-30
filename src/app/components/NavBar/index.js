import Link from "next/link";

import AuthButtons from "./AuthButtons";
import NavLink from "./NavLink";
import { getUser } from "@/lib/token";

async function Navbar() {
  const user = await getUser();
  return (
    <nav className="bg-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="font-semibold text-xl text-white">
                Bank Alfalas
              </span>
            </Link>
          </div>
          <div className="block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/">Home</NavLink>
              {user && <NavLink href="/transactions">Transactions</NavLink>}
              {user && <NavLink href="/users">Users</NavLink>}
              {user && <NavLink href="/users/me">My Profile</NavLink>}
              <AuthButtons />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
