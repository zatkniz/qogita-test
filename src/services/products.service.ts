import axios, { AxiosResponse } from 'axios';
import { ProductResponse, ProductsResponse } from '../types';

export const getProducts = async (page: number): Promise<ProductsResponse> => {    
    const { data }: AxiosResponse<ProductsResponse> = await axios.get('/api/products', {
        params: {
            page
        }
    });
    return data;
}

export const getProduct = async (id: string | string[]): Promise<ProductResponse> => {    
    const { data }: AxiosResponse<ProductResponse> = await axios.get(`/api/products/${id}`);
    return data;
}