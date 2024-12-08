import {
  BuildingStorefrontIcon,
  PresentationChartLineIcon,
  TruckIcon,
} from "@heroicons/react/24/solid";
import NavLink from "./navlink";

const Navbar = () => {
  return (
    <div className="w-24 px-4 border-r-gray-200 border-r">
      <div className="my-6 text-lg font-semibold text-red-600">KALI</div>
      <nav>
        <ul role="list">
          <NavLink href="/">
            <BuildingStorefrontIcon className="w-6 mr-2" /> Caisse
          </NavLink>
          <NavLink href="/stock">
            <TruckIcon className="w-6 mr-2" /> Stock
          </NavLink>
          <NavLink href="/ventes">
            <PresentationChartLineIcon className="w-6 mr-2" /> Ventes
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
