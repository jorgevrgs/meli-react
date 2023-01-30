// Fixtures

export const author = {
  name: 'John',
  lastname: 'Doe',
};

export const item = {
  id: '200',
  title: 'Item 200',
  description: 'full description of item 200',
  free_shipping: true,
  sold_quantity: 0,
  picture: 'https://http2.mlstatic.com/D_200.jpg',
  condition: 'new',
  price: {
    amount: 200,
    currency: 'COP',
    decimal: 2,
  },
};

export const currency = {
  id: 'COP',
  symbol: '$',
  description: 'Peso colombiano',
  decimal_places: 2,
};
