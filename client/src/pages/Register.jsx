// import { nanoid } from '@reduxjs/toolkit';

// import { useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';
// import { asyncregisterUser } from '../store/actions/userActions';
// import { useDispatch } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


// const Register = () => {

//     const { register, handleSubmit } = useForm();

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const registerHandler = (user) => {
//         user.id = nanoid();
//         user.isAdmin = false
//         user.cart = []
//         console.log(user);
//         dispatch(asyncregisterUser(user))
//         navigate('/login')

//     }


//     return (
//         <form
//             onSubmit={handleSubmit(registerHandler)}
//             className='flex flex-col w-1/2 justify-center items-center  rounded-md p-4' action="">
//             <input
//                 {...register('username', { required: true })}
//                 type="text" placeholder='Username'
//                 className='outline-none border-b p-2 text-xl' />

//             <input
//                 {...register('email', { required: true })}
//                 type="text" placeholder='Email'
//                 className='outline-none border-b p-2 text-xl' />
//             <input
//                 {...register('password', { required: true })}
//                 type="password" placeholder='Password'
//                 className='outline-none border-b p-2 text-xl'
//             />
//             <button type="submit"
//                 className='bg-blue-600 w-3/7 p-2 mt-4 text-xl font-semibold hover:bg-blue-700 transition-all duration-300'
//             >Register</button>



//             <p>Already have an account?
//                 <Link to="/login" className='text-blue-600' >Log In</Link>
//             </p>

//         </form>
//     )
// }

// export default Register


import { nanoid } from '@reduxjs/toolkit';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncregisterUser } from '../store/actions/userActions';

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const registerHandler = (user) => {
        user.id = nanoid();
        user.isAdmin = false;
        user.cart = [];
        dispatch(asyncregisterUser(user));
        navigate('/login');
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-800 px-4">
            <form
                onSubmit={handleSubmit(registerHandler)}
                className="flex flex-col bg-gray-900 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 p-8 rounded-2xl shadow-lg space-y-6 text-gray-100"
            >
                <h2 className="text-3xl font-bold text-center text-blue-400 mb-2">
                    Create Account
                </h2>

                {/* Username */}
                <div className="flex flex-col">
                    <input
                        {...register('username', {
                            required: 'Username is required',
                            pattern: {
                                value: /^[a-zA-Z0-9_]{3,16}$/,
                                message:
                                    'Username must be 3–16 chars, letters/numbers/underscore only',
                            },
                        })}
                        type="text"
                        placeholder="Username"
                        className="bg-gray-800 border border-gray-700 rounded-md p-3 text-base text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    {errors.username && (
                        <span className="text-red-400 text-sm mt-1">
                            {errors.username.message}
                        </span>
                    )}
                </div>

                {/* Email */}
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
                        <span className="text-red-400 text-sm mt-1">
                            {errors.email.message}
                        </span>
                    )}
                </div>

                {/* Password */}
                <div className="flex flex-col">
                    <input
                        {...register('password', {
                            required: 'Password is required',
                            pattern: {
                                value:
                                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message:
                                    'Password must be 8+ chars, include upper, lower, number & special char',
                            },
                        })}
                        type="password"
                        placeholder="Password"
                        className="bg-gray-800 border border-gray-700 rounded-md p-3 text-base text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    {errors.password && (
                        <span className="text-red-400 text-sm mt-1">
                            {errors.password.message}
                        </span>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 text-lg font-semibold rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
                >
                    Register
                </button>

                {/* Redirect Link */}
                <p className="text-center text-sm text-gray-400">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-400 hover:underline">
                        Log In
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
