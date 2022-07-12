import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { useCart } from 'react-use-cart';
import Layout from '../../components/Layout';
import { getProduct } from '../../services/products.service';
import { ErrorResponse, Product } from '../../types';

const CartPage = () => {
const { query } = useRouter()
const [product, setProduct] = useState<Product>();

const [quantity, setQuantity] = useState<number>(1);

const { addItem } = useCart();

const addToCart = (): void => {
  if(product){
    addItem({ 
      id: product.gtin, 
      price: product?.recommendedRetailPrice,
      ...product,
    },
    quantity);
  }
}    

const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setQuantity(Number(event.target.value));        
}

  const { id } = query;

    useEffect(() => {
      (async () => {
        try {
          if(!!id) {
            const result: Product = await getProduct(id);
            setProduct(result);
          }
        } catch (error: ErrorResponse | unknown) {
          console.log(error);
        }
      })()
    }, [id]);


  return (
  <Layout>
    <h1>Product Page</h1>

    <div className="container mx-auto px-2 sm:px-4 mt-2">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <div className="flex items-center justify-center rounded bg-white p-4 shadow">
          <div>
            <div className="overflow-hidden mb-2">
              <img src={product?.imageUrl} alt={product?.name} />
            </div>
          </div>
        </div>
        <div className="rounded bg-white p-4 shadow">
          <div className="mb-8 flex flex-col">
            <h1 className="mb-2 text-xl">{ product?.name }</h1>
          </div>
          <div className="mb-6 grid grid-cols-2 gap-6">
            <div><span className="mb-2 block text-xs uppercase opacity-75">Brand</span><span>{ product?.brandName }</span></div>
            <div><span className="mb-2 block text-xs uppercase opacity-75">Category</span><span>{ product?.categoryName }</span>
            </div>
            <div><span className="mb-2 block text-xs uppercase opacity-75">Price</span><span
                className="font-mono text-lg font-bold">€{product?.recommendedRetailPrice}</span></div>
          </div>
          <form action="#" className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
            <div className="rounded border bg-gray-200">
              <div className="flex items-center pl-4"><label className="mr-4 cursor-pointer"
                  htmlFor="quantity">Quantity</label>
                  <input name="quantity" onChange={handleQuantityChange}
                  className="w-full border-l py-3 pl-4 shadow-inner" id="quantity" type="number" min="1" max="114"
                value={quantity} /></div>
            </div><button aria-busy="false" type="button"
              onClick={addToCart}
              className="flex cursor-pointer items-center justify-center gap-1 rounded-lg px-6 py-[0.625rem] font-medium
        hover:shadow
        focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-info-400 
        active:shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] active:outline active:outline-1 active:outline-offset-1 
        disabled:pointer-events-none disabled:text-black-300 border border-purple-600 bg-purple-600 text-white hover:border-purple-400 hover:bg-purple-400 focus:border-purple-400 focus:bg-purple-400 active:border-purple-700 active:bg-purple-700 disabled:border-black-200 disabled:bg-black-200 text-lg"><svg
                className="fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                width="24px" fill="#FFFFFF" role="img">
                <path
                  d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z">
                </path>
              </svg>Add to cart</button>
          </form>
        </div>
      </div>
    </div>
  </Layout>
  );
  }
  export default CartPage;