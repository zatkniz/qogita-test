import axios, { AxiosResponse } from 'axios';
import { ProductsResponse } from '../types';

export const getProducts = async (): Promise<ProductsResponse> => {    
    const { data }: AxiosResponse<ProductsResponse> = await axios.get('/api/products');
    return data;
}