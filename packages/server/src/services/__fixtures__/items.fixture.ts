// Fixtures

export const author = {
  name: 'John',
  lastname: 'Doe',
};

export const item = {
  id: 'MLA-PRO-200',
  title: 'Item 200',
  description: 'full description of item 200',
  free_shipping: true,
  sold_quantity: 100,
  picture: 'https://http2.mlstatic.com/D_200.jpg',
  condition: 'new',
  price: {
    amount: 200,
    currency: 'ARS',
    decimal: 2,
  },
};

export const items = {
  author,
  categories: ['Audio'],
  items: [item],
};
