"use client";

import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Field,
  Input,
  Label,
} from "@headlessui/react";
import {
  BanknotesIcon,
  InboxStackIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { ItemType } from "../types/item";

const Item: React.FC<{ item: ItemType }> = ({ item }) => {
  const { name, price, quantity, unit } = item;
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="bg-white rounded p-4 hover:bg-green-50 hover:cursor-pointer hover:text-green-800 hover:border hover:border-green-200"
        onClick={open}
      >
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-sm text-slate-600 mb-6">
          {price.toLocaleString()} Ar / {unit}
        </div>
        <div className="flex items-center text-sm">
          <InboxStackIcon className="mr-2 text-slate-600 w-5" />
          {quantity} {unit}
        </div>
      </div>

      <Dialog open={isOpen} onClose={close} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 backdrop-blur-sm" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel
            transition
            className="max-w-lg border bg-white p-4 rounded space-y-10"
          >
            <div>
              <h3 className="font-semibold text-xl">{name}</h3>
              <div className="text-sm text-slate-600 flex justify-between mb-4">
                <div className="flex gap-2">
                  <BanknotesIcon className=" w-5" /> {price.toLocaleString()} Ar
                  / {unit}
                </div>
                <div className="flex gap-2">
                  <InboxStackIcon className="w-5" /> {quantity} {unit}
                </div>
              </div>
            </div>

            <div>
              <Field className="flex flex-col">
                <Label>Quantit&eacute;</Label>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    autoFocus
                    step="0.1"
                    className="bg-slate-50 p-2 border-b border-b-slate-400 text-xl outline-slate-200 text-right"
                  />{" "}
                  {unit}
                </div>
              </Field>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={close}
                className="bg-red-50 text-red-600 px-6 py-2 rounded"
              >
                Annuler
              </Button>
              <Button
                onClick={close}
                className="bg-green-50 text-green-800 px-6 py-2 rounded flex gap-2 items-center"
              >
                <ShoppingCartIcon className="w-5" /> Ajouter au panier
              </Button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default Item;
