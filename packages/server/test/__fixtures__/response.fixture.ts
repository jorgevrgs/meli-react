export const author = {
  name: 'John',
  lastname: 'Doe',
};

export const item = {
  id: 'MLA-PRO-200',
  title: 'Item 200',
  currency_id: 'ARS',
  category_id: 'MLA-CAT-200',
  shipping: {
    free_shipping: true,
  },
  sold_quantity: 100,
  thumbnail: 'https://http2.mlstatic.com/D_200.jpg',
  condition: 'new',
  price: 200,
};

export const currency = {
  id: 'ARS',
  decimal_places: 2,
};

export const description = {
  plain_text: 'full description of item 200',
};

export const category = {
  path_from_root: [
    {
      id: '200',
      name: 'Audio',
    },
  ],
};

export const items = {
  results: [item],
  available_filters: [
    {
      id: 'category',
      values: [
        {
          id: 'MLA-CAT-200',
          name: 'Audio',
          results: 157,
        },
      ],
    },
  ],
};
