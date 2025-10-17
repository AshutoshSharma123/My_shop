
// import MainRoute from "./routes/MainRoute";
// import Navbar from "./component/Navbar";
// import Footer from "./component/Footer"; // ✅ Import Footer
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { asyncgetUser } from "./store/actions/userActions";
// import { asyncloadProduct } from "./store/actions/productAction";
// import { useDispatch } from "react-redux";

// function App() {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.userReducer.user);
//   const products = useSelector((state) => state.productReducer.products);

//   useEffect(() => {
//     !user && dispatch(asyncgetUser)


//   }, [user])


//   useEffect(() => {
//     products.length === 0 && dispatch(asyncloadProduct());
//   }, [products]);

//   return (
//     <div className="w-full min-h-screen flex flex-col justify-between bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white">
//       <div>
//         <Navbar />
//         <main className="flex-grow p-4">
//           <MainRoute />
//         </main>
//       </div>
//       <Footer /> {/* ✅ Footer added */}
//     </div>
//   );
// }

// export default App;



import MainRoute from "./routes/MainRoute";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { asyncgetUser } from "./store/actions/userActions";
import { asyncloadProduct } from "./store/actions/productAction";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const products = useSelector((state) => state.productReducer.products);

  useEffect(() => {
    if (!user) {
      dispatch(asyncgetUser());
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(asyncloadProduct());
    }
  }, [products.length, dispatch]);

  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white">
      <Navbar />
      <main className="flex-grow p-4">
        <MainRoute />
      </main>
      <Footer />
    </div>
  );
}

export default App;
