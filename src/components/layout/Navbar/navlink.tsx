"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  const pathname = usePathname();
  return (
    <li className="mb-2">
      <Link
        href={href}
        className={`p-2 rounded flex hover:bg-red-50 hover:text-red-600 ${
          pathname === href ? "bg-red-50 text-red-600" : ""
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
