import Cart from "./components/cart";
import ItemsList from "./components/items-list";

export default function Home() {
  return (
    <section className="h-full">
      <div className="grid grid-cols-3 gap-6 h-full">
        <div className="col-span-2">
          <ItemsList />
        </div>
        <Cart />
      </div>
    </section>
  );
}
