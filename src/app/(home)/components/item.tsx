import { InboxStackIcon } from "@heroicons/react/24/outline";
import React from "react";
import { ItemType } from "../types/item";

const Item: React.FC<{ item: ItemType }> = ({ item }) => {
  const { name, price, quantity, unit } = item;

  return (
    <div className="bg-white rounded p-4">
      <div className="font-semibold text-lg">{name}</div>
      <div className="text-sm text-slate-600 mb-6">
        {price.toLocaleString()} Ar / {unit}
      </div>
      <div className="flex items-center text-sm">
        <InboxStackIcon className="mr-2 text-slate-600 w-5" />
        {quantity} {unit}
      </div>
    </div>
  );
};

export default Item;
