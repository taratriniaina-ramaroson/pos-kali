"use client";

import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const Error: React.FC<{ reset: () => void }> = ({ reset }) => {
  return (
    <div className="px-6 py-12 mx-auto bg-white flex flex-col items-center w-96 rounded">
      <ExclamationTriangleIcon className="w-12 mb-4" />
      <p className="mb-8">Il semble qu&apos;une erreur soit survenue.</p>
      <div>
        <Link href="/" className="text-sm px-4 py-2 mr-2 hover:text-red-600">
          Retourner à l&apos;accueil
        </Link>
        <button
          onClick={() => reset()}
          className="bg-red-50 text-red-600 rounded hover:bg-red-100 text-sm px-4 py-2"
        >
          R&eacute;essayer
        </button>
      </div>
    </div>
  );
};

export default Error;
