import axios, { AxiosResponse } from 'axios';
import { Product, ProductsResponse } from '../types';

export const getProducts = async (): Promise<ProductsResponse> => {    
    const { data }: AxiosResponse<ProductsResponse> = await axios.get('/api/products');
    return data;
}

export const getProduct = async (id: string | 0 | string[]): Promise<Product> => {    
    const { data }: AxiosResponse<Product> = await axios.get(`/api/products/${id}`);
    return data;
}