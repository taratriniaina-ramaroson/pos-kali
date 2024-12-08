const cart = {
  items: [
    {
      id: 1,
      item: {
        id: 1,
        name: "Fromage de tête",
        price: 3000,
        quantity: 5,
        unit: "kg",
      },
      quantity: 0.375,
      amount: 11250,
    },
    {
      id: 2,
      item: {
        id: 5,
        name: "Saucisse fraîche",
        price: 4500,
        quantity: 5,
        unit: "kg",
      },
      quantity: 0.2,
      amount: 9000,
    },
    {
      id: 3,
      item: {
        id: 7,
        name: "Boulette chinoise",
        price: 1800,
        quantity: 5,
        unit: "kg",
      },
      quantity: 0.25,
      amount: 4500,
    },
    {
      id: 4,
      item: {
        id: 5,
        name: "Bonbon anglais",
        price: 2000,
        quantity: 10,
        unit: "pc",
      },
      quantity: 2,
      amount: 4000,
    },
  ],
  amount: 28750,
};

export { cart };
