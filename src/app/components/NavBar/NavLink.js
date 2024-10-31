"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ children, href, block }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`${
        isActive ? "active" : ""
      } transition-colors duration-150 text-gray-300 hover:text-white hover:font-semibold px-3 py-2 rounded-md text-sm font-medium  ${
        block ? "block" : ""
      }`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
