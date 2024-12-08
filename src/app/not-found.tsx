import Link from "next/link";

const NotFound = () => {
  return (
    <div className="px-6 py-12 mx-auto bg-white flex flex-col items-center w-96 rounded">
      <h4 className="text-5xl mb-4">404</h4>
      <p className="mb-8">
        D&eacute;sol&eacute;, cette page n&apos;existe pas.
      </p>
      <Link
        href="/"
        className="text-sm bg-red-50 text-red-600 px-4 py-2 rounded hover:bg-red-100"
      >
        Retourner à l&apos;accueil
      </Link>
    </div>
  );
};

export default NotFound;
