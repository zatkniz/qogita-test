import { useCart, Item } from 'react-use-cart';
import CartProductItem from "./product";

const CartItems = () => {
    const { items, emptyCart } = useCart();

    return (
        <div className="w-full rounded bg-white shadow lg:w-2/3">
            <div className="flex flex-col items-start justify-between border-b py-4 sm:flex-row sm:items-center px-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 sm:divide-x">
                    <h1 className="text-xl">Cart</h1><span className="sm:pl-4"><span className="font-mono mr-1">{items.length}</span>
                        lines </span>
                </div>
                <div className="mt-2 flex items-start gap-4 sm:mt-0">
                    <button type="button"
                        className="rounded bg-white p-2 text-sm leading-none text-error-600 shadow hover:bg-error-100" onClick={() => emptyCart()}>Empty</button>
                </div>
            </div>
            <div className="px-4">
                <form action="#" className="divide-y">
                    {items.map((product: Item): JSX.Element=> (
                        <CartProductItem key={product.id} product={product} />
                    ))}
                </form>
            </div>
        </div>
    );
}

export default CartItems;