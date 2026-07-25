import ListProdotto from "./ListProdotto";

const Prodotto = () => {
  const prodotti = [
    {
      id: 1,
      picture: "/samsung1.jpg",
      title: "Samsung S25",
      category: "Telefonia",
      brand: "Samsung",
      price: 599.00,
      release: 2024,
    },

    {
      id: 2,
      picture: "/samsung2.jpeg",
      title: "Samsung S26",
      category: "Telefonia",
      brand: "Samsung",
      price: 699.00,
      release: 2026,
    },
    {
      id: 3,
      picture: "/samsung3.jpeg",
      title: "Samsung S24",
      category: "Telefonia",
      brand: "Samsung",
      price: 499.00,
      release: 2024,
    },
  ];

  return (
    <div>
      <ListProdotto product={prodotti} />
    </div>
  );
};

export default Prodotto;
