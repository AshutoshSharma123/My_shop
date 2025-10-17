
// import { useSelector } from 'react-redux'
// import { NavLink } from 'react-router-dom'
// import { asynclogoutUser } from '../store/actions/userActions'
// import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'


// const Navbar = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const user = useSelector(state => state.userReducer.user)
//     console.log(user);

//     const logoutHandler = () => {
//         dispatch(asynclogoutUser())
//         navigate('/login')
//     }




//     return (
//         <div className='flex gap-4 mb-4 text-lg justify-center'>
//             <NavLink to={'/'}>Home</NavLink>




//             {user ?
//                 <>
//                     <NavLink to={'/admin/create-product'}>Create Product</NavLink>
//                     <NavLink to={'/admin/user-profile'}>Profile</NavLink>

//                     <NavLink to={'/cart'}>Cart</NavLink>

//                     <button onClick={logoutHandler}>Logout</button>
//                 </>
//                 :
//                 <>
//                     <NavLink to ={'/login'}>Login</NavLink>
//                 </>}


//         </div>
//     )
// }

// export default Navbar

// import { useSelector, useDispatch } from "react-redux";
// import { NavLink, useNavigate } from "react-router-dom";
// import { asynclogoutUser } from "../store/actions/userActions";
// import { useState } from "react";
// import {
//     Bars3Icon,
//     XMarkIcon,
//     ShoppingCartIcon,
//     UserIcon,
//     HomeIcon,
//     PlusIcon,
//     ArrowRightStartOnRectangleIcon,
//     ArrowLeftStartOnRectangleIcon,
// } from "@heroicons/react/24/outline";

// const Navbar = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const user = useSelector((state) => state.userReducer.user);
//     const [isOpen, setIsOpen] = useState(false);

//     const logoutHandler = () => {
//         dispatch(asynclogoutUser());
//         navigate("/login");
//         setIsOpen(false);
//     };

//     return (
//         <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-md sticky top-0 z-50">
//             <div className="max-w-7xl mx-auto px-6 sm:px-10">
//                 <div className="flex justify-between items-center h-16">
//                     {/* Logo / Brand */}
//                     <NavLink
//                         to="/"
//                         className="flex items-center gap-2 font-bold text-xl tracking-wide"
//                         onClick={() => setIsOpen(false)}
//                     >
//                         <HomeIcon className="h-6 w-6 text-cyan-400" />
//                         MyShop
//                     </NavLink>

//                     {/* Desktop Menu */}
//                     <div className="hidden md:flex items-center gap-6 text-sm font-medium">
//                         <NavLink
//                             to="/"
//                             className={({ isActive }) =>
//                                 `transition-colors ${isActive ? "text-cyan-400" : "hover:text-cyan-300"
//                                 }`
//                             }
//                         >
//                             Home
//                         </NavLink>

//                         {user ? (
//                             <>
//                                 <NavLink
//                                     to="/admin/create-product"
//                                     className={({ isActive }) =>
//                                         `transition-colors ${isActive ? "text-cyan-400" : "hover:text-cyan-300"
//                                         }`
//                                     }
//                                 >
//                                     <PlusIcon className="h-5 w-5 inline-block mr-1" />
//                                     Create Product
//                                 </NavLink>

//                                 <NavLink
//                                     to="/admin/user-profile"
//                                     className={({ isActive }) =>
//                                         `transition-colors ${isActive ? "text-cyan-400" : "hover:text-cyan-300"
//                                         }`
//                                     }
//                                 >
//                                     <UserIcon className="h-5 w-5 inline-block mr-1" />
//                                     Profile
//                                 </NavLink>

//                                 <NavLink
//                                     to="/cart"
//                                     className={({ isActive }) =>
//                                         `transition-colors ${isActive ? "text-cyan-400" : "hover:text-cyan-300"
//                                         }`
//                                     }
//                                 >
//                                     <ShoppingCartIcon className="h-5 w-5 inline-block mr-1" />
//                                     Cart
//                                 </NavLink>

//                                 <button
//                                     onClick={logoutHandler}
//                                     className="flex items-center gap-1 bg-cyan-500 hover:bg-cyan-600 px-3 py-1.5 rounded-md transition-all"
//                                 >
//                                     <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
//                                     Logout
//                                 </button>
//                             </>
//                         ) : (
//                             <NavLink
//                                 to="/login"
//                                 className="flex items-center gap-1 bg-cyan-500 hover:bg-cyan-600 px-3 py-1.5 rounded-md transition-all"
//                             >
//                                 <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
//                                 Login
//                             </NavLink>
//                         )}
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <button
//                         className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition-all"
//                         onClick={() => setIsOpen(!isOpen)}
//                     >
//                         {isOpen ? (
//                             <XMarkIcon className="h-6 w-6 text-cyan-400" />
//                         ) : (
//                             <Bars3Icon className="h-6 w-6 text-cyan-400" />
//                         )}
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu Dropdown */}
//             <div
//                 className={`md:hidden bg-gray-800 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//                     }`}
//             >
//                 <div className="flex flex-col space-y-3 px-6 py-4 text-sm font-medium">
//                     <NavLink
//                         to="/"
//                         onClick={() => setIsOpen(false)}
//                         className="hover:text-cyan-300"
//                     >
//                         Home
//                     </NavLink>

//                     {user ? (
//                         <>
//                             <NavLink
//                                 to="/admin/create-product"
//                                 onClick={() => setIsOpen(false)}
//                                 className="hover:text-cyan-300"
//                             >
//                                 Create Product
//                             </NavLink>

//                             <NavLink
//                                 to="/admin/user-profile"
//                                 onClick={() => setIsOpen(false)}
//                                 className="hover:text-cyan-300"
//                             >
//                                 Profile
//                             </NavLink>

//                             <NavLink
//                                 to="/cart"
//                                 onClick={() => setIsOpen(false)}
//                                 className="hover:text-cyan-300"
//                             >
//                                 Cart
//                             </NavLink>



//                             <div className="border-t border-gray-700 pt-4">
//                                 {user.isAdmin && (
//                                     <span className="text-sm text-gray-400">Admin</span>
//                                 )}
//                             </div>

//                             <button
//                                 onClick={logoutHandler}
//                                 className="flex items-center gap-1 text-left text-red-400 hover:text-red-500"
//                             >
//                                 <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
//                                 Logout
//                             </button>
//                         </>
//                     ) : (
//                         <NavLink
//                             to="/login"
//                             onClick={() => setIsOpen(false)}
//                             className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300"
//                         >
//                             <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
//                             Login
//                         </NavLink>
//                     )}
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { asynclogoutUser } from "../store/actions/userActions";
import { useState } from "react";
import {
    Bars3Icon,
    XMarkIcon,
    ShoppingCartIcon,
    UserIcon,
    HomeIcon,
    PlusIcon,
    ArrowRightStartOnRectangleIcon,
    ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.userReducer.user);
    const [isOpen, setIsOpen] = useState(false);

    const logoutHandler = () => {
        dispatch(asynclogoutUser());
        navigate("/login");
        setIsOpen(false);
    };

    return (
        <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 sm:px-10">
                <div className="flex justify-between items-center h-16">
                    {/* Logo / Brand */}
                    <NavLink
                        to="/"
                        className="flex items-center gap-2 font-bold text-xl tracking-wide"
                        onClick={() => setIsOpen(false)}
                    >
                        <HomeIcon className="h-6 w-6 text-cyan-400" />
                        MyShop
                    </NavLink>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-4 text-sm font-medium">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `transition-colors ${isActive ? "text-cyan-400" : "hover:text-cyan-300"}`
                            }
                        >
                            Home
                        </NavLink>

                        {user ? (
                            <>
                                <NavLink
                                    to="/admin/create-product"
                                    className={({ isActive }) =>
                                        `transition-colors flex items-center gap-1 ${isActive ? "text-cyan-400" : "hover:text-cyan-300"}`
                                    }
                                >
                                    <PlusIcon className="h-5 w-5" />
                                    Create Product
                                </NavLink>

                                <NavLink
                                    to="/admin/user-profile"
                                    className={({ isActive }) =>
                                        `transition-colors flex items-center gap-1 ${isActive ? "text-cyan-400" : "hover:text-cyan-300"}`
                                    }
                                >
                                    <UserIcon className="h-5 w-5" />
                                    Profile
                                </NavLink>

                                <NavLink
                                    to="/cart"
                                    className={({ isActive }) =>
                                        `transition-colors flex items-center gap-1 ${isActive ? "text-cyan-400" : "hover:text-cyan-300"}`
                                    }
                                >
                                    <ShoppingCartIcon className="h-5 w-5" />
                                    Cart
                                </NavLink>

                                {/* Admin Badge */}
                                {user.isAdmin && (
                                    <span className="ml-2 px-2 py-0.5 bg-gray-700 rounded-md text-sm text-gray-300">
                                        Admin
                                    </span>
                                )}

                                <button
                                    onClick={logoutHandler}
                                    className="flex items-center gap-1 bg-cyan-500 hover:bg-cyan-600 px-3 py-1.5 rounded-md transition-all"
                                >
                                    <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
                                    Logout
                                </button>
                            </>
                        ) : (
                            <NavLink
                                to="/login"
                                className="flex items-center gap-1 bg-cyan-500 hover:bg-cyan-600 px-3 py-1.5 rounded-md transition-all"
                            >
                                <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
                                Login
                            </NavLink>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition-all"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <XMarkIcon className="h-6 w-6 text-cyan-400" />
                        ) : (
                            <Bars3Icon className="h-6 w-6 text-cyan-400" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`md:hidden bg-gray-800 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="flex flex-col space-y-3 px-6 py-4 text-sm font-medium">
                    <NavLink
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-cyan-300"
                    >
                        Home
                    </NavLink>

                    {user ? (
                        <>
                            <NavLink
                                to="/admin/create-product"
                                onClick={() => setIsOpen(false)}
                                className="hover:text-cyan-300 flex items-center gap-1"
                            >
                                <PlusIcon className="h-5 w-5" />
                                Create Product
                            </NavLink>

                            <NavLink
                                to="/admin/user-profile"
                                onClick={() => setIsOpen(false)}
                                className="hover:text-cyan-300 flex items-center gap-1"
                            >
                                <UserIcon className="h-5 w-5" />
                                Profile
                            </NavLink>

                            <NavLink
                                to="/cart"
                                onClick={() => setIsOpen(false)}
                                className="hover:text-cyan-300 flex items-center gap-1"
                            >
                                <ShoppingCartIcon className="h-5 w-5" />
                                Cart
                            </NavLink>

                            {/* Admin Badge */}
                            {user.isAdmin && (
                                <span className="mt-2 px-2 py-0.5 bg-gray-700 rounded-md text-sm text-gray-300">
                                    Admin
                                </span>
                            )}

                            <button
                                onClick={logoutHandler}
                                className="flex items-center gap-1 text-red-400 hover:text-red-500 mt-2"
                            >
                                <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
                                Logout
                            </button>
                        </>
                    ) : (
                        <NavLink
                            to="/login"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300"
                        >
                            <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
                            Login
                        </NavLink>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

