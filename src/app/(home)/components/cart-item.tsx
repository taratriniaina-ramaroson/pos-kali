import React from "react";
import { CartItemType } from "../types/cart";

const CartItem: React.FC<{ cartItem: CartItemType }> = ({
  cartItem: {
    item: { name, unit },
    quantity,
    amount,
  },
}) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between align-top">
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-slate-600">
            {quantity} {unit}
          </div>
        </div>
        <div>{amount.toLocaleString()} Ar</div>
      </div>
    </div>
  );
};

export default CartItem;
