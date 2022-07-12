import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import ProductComponent from '../components/product';
import { getProducts } from '../services/products.service';
import { ProductsResponse, ErrorResponse, Product } from '../types';

const HomePage = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const result: ProductsResponse = await getProducts();
        setProducts(result.results);
      } catch (error: ErrorResponse | unknown) {
        console.log(error);
      }
    })()
  }, []);
  
  return (
    <Layout>
        <h1>Products List</h1>
        <div className="col-span-full mt-2 mb-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:col-start-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {products && products.map((item: Product): JSX.Element => (
            <ProductComponent key={item.gtin} product={item} />
          ))}
      </div>
    </Layout>
  );
};

export default HomePage;