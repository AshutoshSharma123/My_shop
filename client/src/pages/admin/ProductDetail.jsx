
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { asyncupdateProduct } from '../../store/actions/productAction';
// import { asyncdeleteProduct } from '../../store/actions/productAction'


// const ProductDetail = () => {
//     const { id } = useParams();
//     const dispatch = useDispatch();
//     const navigate = useNavigate()


//     const products = useSelector((state) => state.productReducer.products);
//     const user = useSelector((state) => state.userReducer.user);
//     console.log(products, user);



//     const product = products.find(p => p.id === id);

//     const { register, handleSubmit, reset } = useForm();

//     // Fill the form when product is loaded
//     useEffect(() => {
//         if (product) {
//             reset({
//                 title: product.title,
//                 price: product.price,
//                 image: product.image,
//                 category: product.category,
//                 description: product.description
//             });
//         }
//     }, [product, reset]);

//     const updateProductHandler = (formData) => {
//         dispatch(asyncupdateProduct(id, formData));
//     };

//     if (!product) return <div>Loading...</div>;




//     const deleteHandler = (id) => {
//         dispatch(asyncdeleteProduct(id))
//         navigate("/products")
//     }

//     return (
//         <div className="h-screen bg-gray-700 p-4">
//             <div className="w-full flex flex-col sm:flex-row justify-center gap-6 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
//                 {/* Product Image */}
//                 <div className="flex-shrink-0 w-full sm:w-1/3 aspect-[4/3] overflow-hidden">
//                     <img
//                         src={product.image}
//                         alt={product.title}
//                         className="w-full h-full object-cover"
//                     />
//                 </div>

//                 {/* Product Info */}
//                 <div className="flex-1 p-5">
//                     <h1 className="text-xl font-semibold">{product.title}</h1>
//                     <p className="text-gray-500">{product.description}</p>
//                     <h2 className="text-gray-400 uppercase">{product.category}</h2>
//                     <p className="text-yellow-600 font-bold">Rs.{product.price}</p>
//                 </div>
//             </div>

//             {/* Update Form */}


//             {user && user.isAdmin &&
//                 <div className="bg-white rounded-2xl text-black shadow-md p-4 mt-6">


//                     <form onSubmit={handleSubmit(updateProductHandler)} className="flex flex-col gap-3">
//                         <input {...register('title', { required: true })} placeholder="Title" className="border-b p-2" />
//                         <input {...register('price', { required: true })} placeholder="Price" className="border-b p-2" />
//                         <input {...register('image', { required: true })} placeholder="Image URL" className="border-b p-2" />
//                         <input {...register('category', { required: true })} placeholder="Category" className="border-b p-2" />
//                         <textarea {...register('description', { required: true })} placeholder="Description" className="border-b p-2" />
//                         <button type="submit" className="from-blue-600 to-blue-900 bg-gradient-to-r text-white p-2 mt-2 rounded">Update Product</button>




//                     </form>
//                     <button onClick={() => { deleteHandler(product.id) }} className="from-red-600 to-red-900 bg-gradient-to-r text-white p-2 mt-2 rounded">Delete Product</button>

//                 </div>
//             }
//         </div>
//     );
// };

// export default ProductDetail;


import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { asyncupdateProduct, asyncdeleteProduct } from '../../store/actions/productAction';

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [previewImg, setPreviewImg] = useState("");

    const products = useSelector((state) => state.productReducer.products);
    const user = useSelector((state) => state.userReducer.user);

    const product = products.find(p => p.id === id);

    const { register, handleSubmit, reset, watch } = useForm();
    const watchedImage = watch("image");

    useEffect(() => {
        if (product) {
            reset({
                title: product.title,
                price: product.price,
                image: product.image,
                category: product.category,
                description: product.description,
            });
            setPreviewImg(product.image);
        }
    }, [product, reset]);

    useEffect(() => {
        if (watchedImage) setPreviewImg(watchedImage);
    }, [watchedImage]);

    const updateProductHandler = (formData) => {
        dispatch(asyncupdateProduct(id, formData));
    };

    const deleteHandler = () => {
        dispatch(asyncdeleteProduct(product.id));
        navigate("/products");
    };

    if (!product) return <div className="text-white text-center mt-10">Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-800 p-6 flex flex-col items-center space-y-8">
            {/* Product Card */}
            <div className="w-full max-w-5xl bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                {/* Image */}
                <div className="w-full md:w-1/2 h-80 md:h-auto overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Info */}
                {/* <div className="flex-1 p-8 flex flex-col justify-between text-white">
                    <div>
                        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                        <p className="text-gray-300 mb-2">{product.description}</p>
                        <p className="uppercase text-sm tracking-wide text-gray-400 mb-4">{product.category}</p>
                        <p className="text-yellow-400 font-extrabold text-2xl">Rs. {product.price}</p>
                    </div>
                </div> */}

                {/* Info */}
                <div className="flex-1 p-8 flex flex-col justify-between text-white">
                    <div>
                        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                        <p className="text-gray-300 mb-4">{product.description}</p>

                        {/* Category as tag */}
                        <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full uppercase mb-4">
                            {product.category}
                        </span>

                        <p className="text-yellow-400 font-extrabold text-2xl mt-2">Rs. {product.price}</p>
                    </div>
                </div>

            </div>

            {/* Admin Update Form */}
            {user?.isAdmin && (
                <div className="w-full max-w-5xl bg-gray-900 rounded-3xl shadow-2xl p-6 space-y-6">
                    <h2 className="text-2xl font-bold text-white text-center">Update Product</h2>

                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Image Preview */}
                        <div className="w-full md:w-1/3 h-48 rounded-xl overflow-hidden border border-gray-700">
                            <img
                                src={previewImg}
                                alt="Preview"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit(updateProductHandler)} className="flex-1 flex flex-col gap-4">
                            <input
                                {...register('title', { required: true })}
                                placeholder="Title"
                                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                {...register('price', { required: true })}
                                placeholder="Price"
                                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                {...register('image', { required: true })}
                                placeholder="Image URL"
                                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                {...register('category', { required: true })}
                                placeholder="Category"
                                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <textarea
                                {...register('description', { required: true })}
                                placeholder="Description"
                                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                            />
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-blue-600 to-blue-900 p-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-950 transition-all duration-300"
                            >
                                Update Product
                            </button>
                            <button
                                type="button"
                                onClick={deleteHandler}
                                className="bg-gradient-to-r from-red-600 to-red-900 p-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-950 transition-all duration-300"
                            >
                                Delete Product
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;
