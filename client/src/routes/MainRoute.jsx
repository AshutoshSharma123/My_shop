// import { Routes, Route } from 'react-router-dom';

// import { useSelector } from 'react-redux';
// import { lazy } from 'react';
// const MainRoute = () => {
//     const Cart = lazy(() => import('../pages/Cart'));
//     const Products = lazy(() => import('../pages/Products'));
//     const Login = lazy(() => import('../pages/Login'));
//     const Register = lazy(() => import('../pages/Register'));
//     const CreateProduct = lazy(() => import('../pages/admin/CreateProduct'));
//     const Home = lazy(() => import('../pages/Home'));
//     const ProductDetail = lazy(() => import('../pages/admin/ProductDetail'));
//     const UserProfile = lazy(() => import('../pages/Users/UserProfile'));


//     const user = useSelector((state) => state.userReducer.user);
//     console.log(user);

//     return (
//         <Routes>
//             <Route path='/' element={user ? <Products /> : <Home />} />
//             <Route path='/products' element={<Products />} />
//             <Route path='/login' element={<Login />} />
//             <Route path='/register' element={<Register />} />
//             <Route path='/cart' element={<Cart />} />
//             <Route path='/admin/create-product' element={<CreateProduct />} />
//             <Route path='/admin/user-profile' element={<UserProfile />} />
//             <Route path='/product/:id' element={<ProductDetail />} />
//         </Routes>
//     );
// };

// export default MainRoute;


import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';

// Lazy load all pages OUTSIDE the component
const Home = lazy(() => import('../pages/Home'));
const Products = lazy(() => import('../pages/Products'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const CreateProduct = lazy(() => import('../pages/admin/CreateProduct'));
const ProductDetail = lazy(() => import('../pages/admin/ProductDetail'));
const UserProfile = lazy(() => import('../pages/Users/UserProfile'));
const Cart = lazy(() => import('../pages/Cart'));

const MainRoute = () => {
    const user = useSelector((state) => state.userReducer.user);
    console.log(user); // This will log once per render, not infinitely

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='/' element={user ? <Products /> : <Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/admin/create-product' element={<CreateProduct />} />
                <Route path='/admin/user-profile' element={<UserProfile />} />
                <Route path='/product/:id' element={<ProductDetail />} />
            </Routes>
        </Suspense>
    );
};

export default MainRoute;


