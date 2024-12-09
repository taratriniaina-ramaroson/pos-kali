import { cart } from "@/mock/cart";
import { Button } from "@headlessui/react";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import CartItem from "./cart-item";

const Cart = () => {
  return (
    <div className="h-full bg-white rounded-3xl p-6 flex flex-col justify-between">
      <div>
        {cart.items.map((item) => (
          <CartItem key={`cart-${item.id}`} cartItem={item} />
        ))}
      </div>
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <div className="font-semibold">TOTAL</div>
          <div className="text-xl font-semibold">
            {cart.amount.toLocaleString()} Ar
          </div>
        </div>
        <div className="flex justify-between flex-wrap-reverse mt-4 gap-x-6 gap-y-2">
          <Button className="py-3 px-6 bg-red-50 text-red-600 text-xl mt-2 flex-grow hover:bg-red-200 rounded">
            ANNULER
          </Button>
          <Button className="py-3 px-6 bg-green-50 text-green-800 text-xl mt-2 flex-grow flex gap-2 items-center justify-center hover:bg-green-200 rounded">
            <BanknotesIcon className="w-6" />
            PAYER
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
