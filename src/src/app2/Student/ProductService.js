export const ProductService = {
  getProductsMini() {
    return Promise.resolve([
      { code: "P001", name: "Product 1", category: "Category 1", quantity: 10 },
      { code: "P002", name: "Product 2", category: "Category 2", quantity: 20 },
      { code: "P003", name: "Product 3", category: "Category 3", quantity: 30 },
      {
        code: "P003",
        name: "Product 4",
        category: "Category 10",
        quantity: 30,
      },
      {
        code: "P003",
        name: "Product 5",
        category: "Category 21",
        quantity: 30,
      },
      {
        code: "P003",
        name: "Product 6",
        category: "Category 13",
        quantity: 30,
      },
      {
        code: "P003",
        name: "Product 7",
        category: "Category 34",
        quantity: 30,
      },
      {
        code: "P003",
        name: "Product 8",
        category: "Category 33",
        quantity: 30,
      },
      {
        code: "P003",
        name: "Product 9",
        category: "Category 36",
        quantity: 30,
      },
      {
        code: "P003",
        name: "Product 10",
        category: "Category 31",
        quantity: 30,
      },
    ]);
  },
};
