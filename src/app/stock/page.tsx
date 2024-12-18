import { stock } from "@/mock/stock";
import { Button, Input } from "@headlessui/react";
import { PlusIcon, TagIcon } from "@heroicons/react/24/outline";

const Page = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">Stock</h1>
          <Button className="flex text-sm items-center bg-red-50 text-red-600 border-red-100 border px-2 py-1 rounded-full"><TagIcon className="w-5 h-5 mr-1"/> Ajouter catégorie</Button>
          <Button className="flex text-sm items-center bg-green-100 text-green-800 border-green-200 border px-2 py-1 rounded-full"><PlusIcon className="w-5 h-5 mr-1"/> Ajouter article</Button>
        </div>
        <Input type="search" className="bg-white rounded-full text-base font-normal px-6 py-2 focus:outline-red-500" placeholder="Rechercher" />
      </div>
      <main className="bg-white rounded">
        <table className="w-full rounded">
          <thead className="bg-red-100">
            <tr className="text-left">
              <th className="p-6">#</th>
              <th className="p-6">Article</th>
              <th className="p-6">Prix</th>
              <th className="p-6">Stock</th>
              <th className="p-6">Catégorie</th>
            </tr>
          </thead>
          <tbody>
            {stock.map((item) => (
              <tr key={item.id} className="border-b hover:bg-green-50 cursor-pointer">
                <td className="p-6">{item.id}</td>
                <td className="p-6 min-w-60">{item.name}</td>
                <td className="p-6 whitespace-nowrap">{item.price.toLocaleString()} Ar / {item.unit}</td>
                <td className="p-6 whitespace-nowrap">{item.quantity} {item.unit}</td>
                <td className="p-6">{item.category.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Page;
