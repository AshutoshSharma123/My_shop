
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncupdateUser } from '../store/actions/userActions';


const Cart = () => {
    const user = useSelector((state) => state.userReducer.user);
    const products = useSelector((state) => state.productReducer.products);
    const dispatch = useDispatch();

    if (!user?.cart?.length) {
        return <div className="text-gray-200 text-center mt-10">Your cart is empty</div>;
    }

    const validCartItems = user.cart.filter(c => products.some(p => p.id === c.productId));

    const removeFromCart = (productId) => {

        // deletes whole list of overall quantity of that product from cart
        // const updatedCart = user.cart.filter(c => c.productId !== productId);
        // const updatedUser = { ...user, cart: updatedCart };
        // dispatch(asyncupdateUser(user.id, updatedUser));

        const updatedCart = user.cart
            .map((item) => {
                if (item.productId === productId) {
                    if (item.quantity > 1) {
                        // Reduce quantity by 1
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        // Quantity is 1, remove later
                        return null;
                    }
                }
                return item;
            })
            .filter(item => item !== null); // Remove items with null (quantity 1)

        const updatedUser = { ...user, cart: updatedCart };
        dispatch(asyncupdateUser(user.id, updatedUser));


    };

    return (
        <div className="w-full min-h-screen bg-gray-800 flex flex-col items-center py-10 px-4 gap-6">
            {validCartItems.map((c) => {
                const product = products.find((p) => p.id === c.productId);
                if (!product) return null;

                return (
                    <div
                        key={c.productId}
                        className="flex items-center bg-gray-900 text-white rounded-2xl p-4 w-full max-w-md shadow-md"
                    >
                        {/* Product Image */}
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-20 h-20 object-cover rounded-lg mr-4"
                        />

                        {/* Product Details */}
                        <div className="flex-1">
                            <h2 className="text-lg font-semibold">{product.title}</h2>
                            <p className="text-gray-400">Quantity: {c.quantity}</p>
                            <p className="text-yellow-400 font-bold">Price: ${product.price}</p>
                        </div>

                        {/* Remove Button */}
                        <button
                            onClick={() => removeFromCart(product.id)}
                            className="ml-4 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg transition-all"
                        >
                            Remove
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Cart;
