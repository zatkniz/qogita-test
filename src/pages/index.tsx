import Layout from '../components/Layout';
import Product from '../components/product';

const HomePage = (): JSX.Element => (
  <Layout>
      <h1>Products List</h1>
      <div className="col-span-full mt-2 mb-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:col-start-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <Product />
    </div>
  </Layout>
);

export default HomePage;