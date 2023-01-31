export const MELI_BASE_URL = 'https://api.mercadolibre.com';

export const MELI_SITE_ID = process.env.SITE_ID ?? 'MLA';

export const MELI_CURRENCY_URL = `${MELI_BASE_URL}/currencies/:id`;
export const MELI_ITEM_DESCRIPTION_URL = `${MELI_BASE_URL}/items/:id/description`;
export const MELI_ITEM_URL = `${MELI_BASE_URL}/items/:id`;
export const MELI_SEARCH_URL = `${MELI_BASE_URL}/sites/${MELI_SITE_ID}/search`;
