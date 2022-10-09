import { get } from './httpClient';

export const getProducts = (params) => get('/hung/products', params);
