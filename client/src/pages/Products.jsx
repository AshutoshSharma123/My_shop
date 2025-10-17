import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { asyncupdateUser } from "../store/actions/userActions";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";


const Products = () => {
    const user = useSelector((state) => state.userReducer.user);
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/products?_limit=2&_start=${products.length}`);

            if (res.data.length === 0) {
                setHasMore(false);
                return;
            }
            else {
                setHasMore(true);
            }
            setProducts(products.concat(res.data));// Append new products to existing list
            console.log("Fetched products:", res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        const result = products.filter(
            (product) =>
                product.title.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query)
        );

        setFilteredProducts(result);
    };

    // const addtocartHandler = (id) => {
    //     if (!user) return toast.error("Please login first!");

    //     const copyUser = { ...user, cart: [...(user.cart || [])] };
    //     const idx = copyUser.cart.findIndex((c) => c.productId === id);

    //     if (idx === -1) {
    //         copyUser.cart.push({ productId: id, quantity: 1 });
    //     } else {
    //         copyUser.cart[idx].quantity += 1;
    //     }

    //     dispatch(asyncupdateUser(copyUser.id, copyUser));
    //     toast.success("Item added to cart!");
    // };
    const addtocartHandler = (id) => {
        if (!user) return toast.error("Please login first!");

        const copyUser = { ...user, cart: [...(user.cart || [])] };
        const idx = copyUser.cart.findIndex((c) => c.productId === id);

        if (idx === -1) {
            // Add new product
            copyUser.cart.push({ productId: id, quantity: 1 });
        } else {
            // Replace the existing object with a new object
            copyUser.cart[idx] = {
                ...copyUser.cart[idx],
                quantity: copyUser.cart[idx].quantity + 1
            };
        }

        dispatch(asyncupdateUser(copyUser.id, copyUser));
        toast.success("Item added to cart!");
    };
    if (!products.length) return "Loading...";



    return (
        <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center py-10 px-6">
            {/* Toast container */}
            <ToastContainer position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                style={{ zIndex: 9999 }} />

            {/* Search bar */}
            <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full max-w-md p-3 mb-8 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            {/* Products Grid */}
            <div className="w-full flex flex-wrap justify-center gap-6 overflow-visible">
                <InfiniteScroll
                    dataLength={products.length}
                    next={fetchProducts}
                    loader={<h4 className="text-white">Loading more products...</h4>}
                    hasMore={hasMore}
                    endMessage={<p className="text-white text-center"><b>Yay! You have seen it all</b></p>}
                    // Optional: add a scrollable div if needed
                    style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem" }}
                // next={fetchMoreProducts} // add your fetch more function if using

                >
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-64 flex-shrink-0"
                        >
                            {/* Image */}
                            <div className="relative w-full h-48">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                                <span className="absolute top-2 left-2 bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    ${product.price}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-between flex-grow p-4 space-y-3">
                                <div>
                                    <h2 className="text-lg font-semibold text-white line-clamp-2">
                                        {product.title}
                                    </h2>
                                    <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full mt-1">
                                        {product.category}
                                    </span>
                                    <p className="text-sm text-gray-400 line-clamp-2 mt-2">
                                        {product.description.slice(0, 80)}...
                                    </p>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center justify-between mt-2">
                                    <Link
                                        to={`/product/${product.id}`}
                                        className="text-sm text-cyan-400 hover:underline"
                                    >
                                        More details
                                    </Link>
                                </div>

                                <button
                                    onClick={() => addtocartHandler(product.id)}
                                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-sm font-medium py-2 rounded-lg hover:from-cyan-500 hover:to-blue-700 transition-all"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
        </div>
    );
};

export default Products;

