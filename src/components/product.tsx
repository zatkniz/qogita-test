import { useState, useEffect } from 'react';
import { useCart } from "react-use-cart";
import { Product } from "../types";
import Link from 'next/link';

type Props = {
    product: Product;
    key: string;
}

const ProductComponent = ({ product }: Props): JSX.Element => {

    const [quantity, setQuantity] = useState<number>(1);

    const { addItem } = useCart();

    const addToCart = (): void => {
        addItem({ 
            id: product.gtin, 
            price: product.recommendedRetailPrice,
            ...product,
          },
          quantity);
    }    

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setQuantity(Number(event.target.value));        
    }

    return (
        <div className="relative flex gap-4 rounded bg-white p-4 shadow sm:flex-col">
            <div className="flex w-1/3 items-start justify-center sm:w-full">
                <span>
                    <img 
                        alt={product.name}
                        src={product.imageUrl}
                    />
                </span>
            </div>
            <div className="flex flex-1 flex-col gap-4">
                <div className="h-full">
                    <Link href={`/product/${product.gtin}`}>
                    <a className="group static z-10 before:absolute before:inset-0 before:z-0 before:overflow-hidden before:whitespace-nowrap">
                        <h2 className="group-hover:text-purple-500">
                            {product.name}
                        </h2>
                    </a>
                    </Link>
                    <div className="flex -ml-0.5 pt-1">
                        <div className="mr-2 flex">
                            <div>
                                <svg className="h-5 w-5 fill-current text-caution-400"
                                    xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                                    fill="#FFFFFF" role="img">
                                    <path
                                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                    </path>
                                </svg>
                            </div>
                            <div>
                                <svg className="h-5 w-5 fill-current text-caution-400"
                                    xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                                    fill="#FFFFFF" role="img">
                                    <path
                                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                    </path>
                                </svg>
                            </div>
                            <div>
                                <svg className="h-5 w-5 fill-current text-caution-400"
                                    xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                                    fill="#FFFFFF" role="img">
                                    <path
                                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                    </path>
                                </svg>
                            </div>
                            <div>
                                <svg className="h-5 w-5 fill-current text-caution-400"
                                    xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                                    fill="#FFFFFF" role="img">
                                    <path
                                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                    </path>
                                </svg>
                            </div>
                            <div>
                                <svg className="h-5 w-5 fill-current text-caution-400"
                                    xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                                    fill="#FFFFFF" role="img">
                                    <path
                                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-baseline space-x-3 pt-2">
                        <span className="font-mono text-xl font-bold">€{product.recommendedRetailPrice}</span>
                    </div>
                </div>
                <div className="relative z-10">
                    <div className="flex gap-2">
                        <div className="flex-1 rounded border bg-gray-200 text-sm">
                            <label className="sr-only" htmlFor={`quantity-${product.gtin}`}>Quantity</label><input
                                name="quantity" className="w-full rounded-t py-2 pl-2 leading-none shadow-inner"
                                id={`quantity-${product.gtin}`} type="number" min="1" max="542" value={quantity}
                                onChange={handleQuantityChange} />
                        </div>
                        <button 
                            type="button"
                            className="flex cursor-pointer items-center justify-center gap-1 rounded-lg px-6 py-[0.625rem] font-medium hover:shadow
                                focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-info-400 
                                active:shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] active:outline active:outline-1 active:outline-offset-1 
                                disabled:pointer-events-none disabled:text-black-300 border border-purple-600 bg-transparent text-purple-600 hover:bg-purple-100 focus:bg-purple-100 active:border-purple-800 active:bg-white active:text-purple-800 disabled:border-black-300 px-3"
                                onClick={() => addToCart()}    
                            >
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" height="24px"
                                viewBox="0 0 24 24" width="24px" fill="#FFFFFF" role="img">
                                <title>Add to cart</title>
                                <path
                                    d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductComponent;