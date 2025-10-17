


// import { useSelector } from 'react-redux';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { asyncgetUser } from '../../store/actions/userActions';
// import { asyncupdateUser } from '../../store/actions/userActions';
// import { asyncdeleteUser } from '../../store/actions/userActions';

// const UserProfile = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const user = useSelector((state) => state.userReducer.user);

//     const { register, handleSubmit, reset } = useForm({
//         defaultValues: {
//             username: '',
//             email: '',
//             password: '',
//         },
//     });

//     // 🟢 Jab bhi Redux ka user update hoga → form reset hoga
//     useEffect(() => {
//         dispatch(asyncgetUser());
//     }, [dispatch]);


//     // ✅ Reset form whenever user is available/updated
//     useEffect(() => {
//         if (user) {
//             reset({
//                 username: user.username,
//                 email: user.email,
//                 password: user.password,
//             });
//         }
//     }, [user, reset]);



//     const updateUserHandler = (formData) => {
//         dispatch(asyncupdateUser(user.id, formData));
//     };


//     const deleteHandler = () => {
//         dispatch(asyncdeleteUser(user.id)); // agar chahiye
//         navigate('/login');
//     };

//     return user ? (
//         <div>
//             <form onSubmit={handleSubmit(updateUserHandler)} className="flex flex-col gap-3">
//                 <input {...register('username', { required: true })} placeholder="Username" className="border-b p-2" />
//                 <input {...register('email', { required: true })} placeholder="Email" className="border-b p-2" />
//                 <input {...register('password', { required: true })} placeholder="Password" className="border-b p-2" />

//                 <button type="submit" className="from-blue-600 to-blue-900 bg-gradient-to-r text-white p-2 mt-2 rounded">
//                     Update User
//                 </button>
//                 <button
//                     type="button"
//                     onClick={deleteHandler}
//                     className="from-blue-600 to-blue-900 bg-gradient-to-r text-white p-2 mt-2 rounded"
//                 >
//                     Delete User
//                 </button>
//             </form>
//         </div>
//     ) : (
//         <div>Loading...</div>
//     );
// };

// export default UserProfile;






import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { asyncgetUser, asyncupdateUser, asyncdeleteUser } from '../../store/actions/userActions';

const UserProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.userReducer.user);

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            username: '',
            email: '',
            password: '',
        },
    });

    // Fetch user on mount
    useEffect(() => {
        dispatch(asyncgetUser());
    }, [dispatch]);

    // Reset form whenever user changes
    useEffect(() => {
        if (user) {
            reset({
                username: user.username,
                email: user.email,
                password: user.password,
            });
        }
    }, [user, reset]);

    const updateUserHandler = (formData) => {
        dispatch(asyncupdateUser(user.id, formData));
    };

    const deleteHandler = () => {
        dispatch(asyncdeleteUser(user.id));
        navigate('/login');
    };

    if (!user) return <div className="text-white text-center mt-10">Loading...</div>;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-800 p-4">
            <div className="w-full max-w-md bg-gray-900 p-6 rounded-2xl shadow-xl text-white">
                <h1 className="text-2xl font-bold mb-6 text-center">Your Profile</h1>

                <form onSubmit={handleSubmit(updateUserHandler)} className="flex flex-col gap-4">
                    <div>
                        <label className="text-gray-300 text-sm mb-1 block">Username</label>
                        <input
                            {...register('username', { required: true })}
                            placeholder="Username"
                            className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="text-gray-300 text-sm mb-1 block">Email</label>
                        <input
                            {...register('email', { required: true })}
                            placeholder="Email"
                            className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="text-gray-300 text-sm mb-1 block">Password</label>
                        <input
                            {...register('password', { required: true })}
                            placeholder="Password"
                            type="password"
                            className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-600 to-blue-900 text-white p-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-950 transition-all duration-300"
                    >
                        Update User
                    </button>

                    <button
                        type="button"
                        onClick={deleteHandler}
                        className="bg-gradient-to-r from-red-600 to-red-900 text-white p-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-950 transition-all duration-300"
                    >
                        Delete User
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserProfile;
