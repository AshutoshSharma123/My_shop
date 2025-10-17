// import { useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';
// import { asyncloginUser } from '../store/actions/userActions';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// const Login = () => {


//     const { register, handleSubmit } = useForm();
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const loginHandler = (data) => {
//         const user = { ...data };


//         dispatch(asyncloginUser(user))
//         navigate('/products')
//     }


//     return(
//         <div className="">
//             <form
//                 onSubmit={handleSubmit(loginHandler)}
//                 className='flex flex-col w-1/2 justify-center items-center  rounded-md p-4'
//             >
//                 <input
//                     {...register('email')}
//                     type="email"
//                     placeholder='Email'
//                     className='outline-none border-b p-2 text-xl'
//                 />
//                 <input
//                     {...register('password', { required: true })}
//                     type="password"
//                     placeholder='Password'
//                     className='outline-none border-b p-2 text-xl'
//                 />

//                 <button
//                     type="submit"
//                     className='bg-blue-600 w-3/7 p-2 mt-4 text-xl font-semibold hover:bg-blue-700 transition-all duration-300'
//                 >
//                     Login
//                 </button>

//                 <p>
//                     Don't have an account?
//                     <Link to="/register" className='text-blue-600'> Sign Up</Link>
//                 </p>
//             </form>
//         </div>
//     )
// }

// export default Login

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { asyncloginUser } from '../store/actions/userActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginHandler = (data) => {
        const user = { ...data };
        dispatch(asyncloginUser(user));
        navigate('/products');
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-800 px-4">
            <form
                onSubmit={handleSubmit(loginHandler)}
                className="flex flex-col bg-gray-900 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 p-8 rounded-2xl shadow-lg space-y-6 text-gray-100"
            >
                <h2 className="text-3xl font-bold text-center text-blue-400 mb-2">
                    Login
                </h2>

                {/* Email Field */}
                <div className="flex flex-col">
                    <input
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                message: 'Invalid email format',
                            },
                        })}
                        type="email"
                        placeholder="Email"
                        className="bg-gray-800 border border-gray-700 rounded-md p-3 text-base text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    {errors.email && (
                        <span className="text-red-400 text-sm mt-1">{errors.email.message}</span>
                    )}
                </div>

                {/* Password Field (required only) */}
                <div className="flex flex-col">
                    <input
                        {...register('password', {
                            required: 'Password is required',
                        })}
                        type="password"
                        placeholder="Password"
                        className="bg-gray-800 border border-gray-700 rounded-md p-3 text-base text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    {errors.password && (
                        <span className="text-red-400 text-sm mt-1">{errors.password.message}</span>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 text-lg font-semibold rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
                >
                    Login
                </button>

                {/* Redirect Link */}
                <p className="text-center text-sm text-gray-400">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-blue-400 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
