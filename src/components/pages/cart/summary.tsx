import { useCart } from "react-use-cart";

const Summary = () => {
    const { cartTotal } = useCart();

    return (
        <div className="w-full rounded bg-white shadow lg:sticky lg:top-0 lg:w-1/3">
            <div className="border-b p-4">
                <h2 className="text-xl">Cart summary</h2>
            </div>
            <div className="p-4">
                <dl className="divide-y">
                    <div className="flex justify-between gap-4 py-2">
                        <dt>Subtotal</dt>
                        <dd className="font-mono">€{cartTotal}</dd>
                    </div>
                    <div className="flex justify-between gap-4 py-2 text-lg">
                        <dt>Estimated total</dt>
                        <dd className="font-mono">€{cartTotal}</dd>
                    </div>
                </dl><button
                    className="mt-2 block w-full rounded bg-purple-500 p-3 text-center text-lg text-white shadow-sm disabled:opacity-60"><span>Proceed
                        to Checkout</span></button>
            </div>
        </div>
    );
}

export default Summary;