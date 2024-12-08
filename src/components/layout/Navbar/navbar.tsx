import {
  PresentationChartLineIcon,
  ShoppingCartIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import NavLink from "./navlink";

const Navbar = () => {
  return (
    <div className="w-56 px-6 border-r-gray-200 border-r">
      <div className="my-6 text-lg font-semibold text-red-600">KALI</div>
      <nav>
        <ul role="list">
          <NavLink href="/">
            <ShoppingCartIcon className="w-6 mr-2" /> Point de vente
          </NavLink>
          <NavLink href="/inventaire">
            <TruckIcon className="w-6 mr-2" /> Inventaire
          </NavLink>
          <NavLink href="/statistiques">
            <PresentationChartLineIcon className="w-6 mr-2" /> Statistiques
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
