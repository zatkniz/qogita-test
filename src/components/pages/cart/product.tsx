import { useCart, Item } from "react-use-cart";
import { Product } from "../../../types";

type Props = {
    product: Item;
    key: string;
}

const cartProductItem = ({ product }: Props) => {

    const { removeItem, updateItemQuantity } = useCart();

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>, id: string): void => {
        updateItemQuantity(id, Number(e.target.value));
    }

    return(
        <div className="flex items-start gap-4 py-4">
            <div className="text-none flex-none">
                <span>
                    <img className='h-16' alt={product.name} src={product.imageUrl} />
                </span>
            </div>
            <div className="w-full">
                <div className="mb-2 flex flex-col items-start justify-between sm:flex-row sm:gap-4">
                    <h3 className="mb-2 leading-tight sm:mb-0"><a className="hover:text-purple-500"
                            href={`/product/${product.gtin}`}>{product.name} </a> </h3> <div
                            className="flex items-center gap-2 sm:relative sm:flex-col sm:items-end">
                            <div className="font-mono">€{product.itemTotal}</div>
                            <div className="font-mono text-sm opacity-75 sm:absolute sm:bottom-[-1.375rem]">
                                (€{product.price})</div>
                </div>
            </div>
                <div
                    className="-mx-2 flex w-full flex-col-reverse items-start gap-2 text-sm sm:flex-row sm:items-center sm:gap-0 sm:divide-x">
                    <button type="button" className="px-2 hover:text-error-600" onClick={() => removeItem(product.id)}>Remove</button>
                    <div className="flex items-center gap-2 px-2">
                        <label className="cursor-pointer" htmlFor="lines-0-quantity">Quantity</label>
                        <input name="lines[0].quantity" type="number"
                            id="lines-0-quantity"
                            className="block rounded border bg-gray-300 p-1 font-mono shadow-inner hover:bg-white focus:bg-white"
                            onChange={(e) => handleQuantityChange(e, product.id)}
                            max="112" min="1" value={product.quantity} />
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default cartProductItem;