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
    <li className="mb-6">
      <Link
        href={href}
        className={`p-2 flex flex-col items-center hover:bg-red-50 hover:text-red-600 text-sm font-semibold ${
          pathname === href ? "bg-red-50 text-red-600" : ""
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
