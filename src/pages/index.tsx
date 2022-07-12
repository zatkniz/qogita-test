import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import ProductComponent from '../components/product';
import { getProducts } from '../services/products.service';
import { ProductsResponse, ErrorResponse, Product } from '../types';
import Pagination from '../components/base/paginator';

const HomePage = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  const pageChange = (page: number) => {
    setPage(page);
  }

  useEffect(() => {
    (async () => {
      try {
        const result: ProductsResponse = await getProducts(page);
        setProducts(result.results);
        setTotal(result.count);
      } catch (error: ErrorResponse | unknown) {
        console.log(error);
      }
    })()
  }, [page]);
  
  return (
    <Layout>
        <h1>Products List</h1>
        <div className="col-span-full mt-2 mb-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:col-start-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {products && products.map((item: Product): JSX.Element => (
            <ProductComponent key={item.gtin} product={item} />
          ))}
      </div>
      <Pagination total={total} page={page} pageChange={pageChange} />
    </Layout>
  );
};

export default HomePage;