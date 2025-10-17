// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { nanoid } from 'nanoid'
// import { useForm } from 'react-hook-form'
// import { useDispatch } from 'react-redux'
// import { asynccreateProduct } from '../../store/actions/productAction.jsx'

// const CreateProduct = () => {
//     const { register, handleSubmit } = useForm();

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const createProductHandler = (product) => {
//         product.id = nanoid();
//         dispatch(asynccreateProduct(product));

//     }


//     return (
//         <form
//             onSubmit={handleSubmit(createProductHandler)}
//             className='flex flex-col w-1/2 justify-center items-center  rounded-md p-4' action="">
//             <input
//                 {...register('title', { required: true })}
//                 type="text" placeholder='Title'
//                 className='outline-none border-b p-2 text-xl' />

//             <input
//                 {...register('price', { required: true })}
//                 type="text" placeholder='Price'

//                 className='outline-none border-b p-2 text-xl' />


//             <input
//                 {...register('image', { required: true })}
//                 type="url" placeholder='paste image url address'
//                 className='outline-none border-b p-2 text-xl' />


//             <input
//                 {...register('category', { required: true })}
//                 type="text" placeholder='Category'
//                 className='outline-none border-b p-2 text-xl' />





//             <textarea
//                 {...register('description', { required: true })}
//                 placeholder='Description'
//                 className='outline-none border-b p-2 text-xl'
//             />
//             <button type="submit"
//                 className='bg-blue-600 w-4/7 p-1 mt-4 text-xl font-semibold hover:bg-blue-700 transition-all duration-300'
//             >Create Product</button>





//         </form>
//     );
// }

// export default CreateProduct

import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { asynccreateProduct } from '../../store/actions/productAction.jsx';

const CreateProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createProductHandler = (product) => {
        product.id = nanoid();
        dispatch(asynccreateProduct(product));
        reset(); // clear form after submission
        navigate('/products'); // optional: redirect to products page
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-800 p-4">
            <div className="w-full max-w-lg bg-gray-900 p-6 rounded-2xl shadow-xl">
                <h1 className="text-2xl font-bold mb-6 text-white text-center">Create New Product</h1>

                <form
                    onSubmit={handleSubmit(createProductHandler)}
                    className="flex flex-col gap-4"
                >
                    {/* Title */}
                    <div>
                        <label className="text-gray-300 text-sm mb-1 block">Title</label>
                        <input
                            {...register('title', { required: true })}
                            type="text"
                            placeholder="Product Title"
                            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="text-gray-300 text-sm mb-1 block">Price</label>
                        <input
                            {...register('price', { required: true })}
                            type="text"
                            placeholder="Product Price"
                            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="text-gray-300 text-sm mb-1 block">Image URL</label>
                        <input
                            {...register('image', { required: true })}
                            type="url"
                            placeholder="Paste image URL"
                            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="text-gray-300 text-sm mb-1 block">Category</label>
                        <input
                            {...register('category', { required: true })}
                            type="text"
                            placeholder="Product Category"
                            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="text-gray-300 text-sm mb-1 block">Description</label>
                        <textarea
                            {...register('description', { required: true })}
                            placeholder="Product Description"
                            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-600 to-blue-900 text-white p-3 mt-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-950 transition-all duration-300"
                    >
                        Create Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateProduct;
