import Layout from '../../components/Layout';
import Summary from '../../components/pages/cart/summary';
import CartItems from '../../components/pages/cart/cartItems';
import { useCart } from 'react-use-cart';

const CartPage = () => {
  const { items } = useCart();

  return (
    <Layout>
      <h1>Your Cart</h1>

      {!!!items.length &&
        <div>No items in your card</div>
      }

      {items.length && 
        <div className="container mx-auto px-2 mt-2 sm:px-4">
          <div className="flex flex-col items-start gap-2 lg:flex-row-reverse">
            <Summary />
            <CartItems />
          </div>
        </div>
      }
    </Layout>
  );
}
export default CartPage;