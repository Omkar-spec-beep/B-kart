// import { useEffect, useState } from "react"
// import Menubar from "./Menubar"
// import Navbar from "./Navbar"
// import Home from "./Home"
// import Footer from "./Footer"
// import { Link } from "react-router-dom";


// <Link to="/sell" className="bg-green-500 text-white px-4 py-2 rounded">Sell</Link>


// const Main = () => {

//   const [prod,setProd] = useState([])
//   const [search,setSearch] = useState("")
//   const [menu,setMenu] = useState("")

//   const getProducts = () =>{
//     fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>setProd(json))
//   }

//   useEffect(()=>{
//     getProducts()
//   },[])

//   return (
//     <div>
//       <Navbar setSearch={setSearch}/>
//       <Menubar setMenu={setMenu}/>
//       <Home products={prod} search={search} menu={menu}/>
//       <Footer/>
//     </div>
//   )
// }


// export default Main
// import { useEffect, useState } from "react"
// import Menubar from "./Menubar"
// import Navbar from "./Navbar"
// import Home from "./Home"
// import Footer from "./Footer"
// import { Link } from "react-router-dom"

// const Main = () => {
//   const [prod, setProd] = useState([])
//   const [search, setSearch] = useState("")
//   const [menu, setMenu] = useState("")

//   const getProducts = () => {
//     fetch("https://fakestoreapi.com/products")
//       .then(res => res.json())
//       .then(json => setProd(json))
//   }

//   useEffect(() => {
//     getProducts()
//   }, [])

//   return (
//     <div>
//       <Navbar setSearch={setSearch} />
//       <Menubar setMenu={setMenu} />

//       {/* Add your "Sell" button here */}
//       <div className="flex justify-end px-4 py-2">
//         <Link
//           to="/sell"
//           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//         >
//           Sell
//         </Link>
//       </div>

//       <Home products={prod} search={search} menu={menu} />
//       <Footer />
//     </div>
//   )
// }

// export default Main
// import { useEffect, useState } from "react";
// import Menubar from "./Menubar";
// import Navbar from "./Navbar";
// import Home from "./Home";
// import Footer from "./Footer";
// import { Link } from "react-router-dom";
// import { fakeproduct } from "../data/fakeproduct"; // ✅ Import your local fake data

// const Main = () => {
//   const [prod, setProd] = useState([]);
//   const [search, setSearch] = useState("");
//   const [menu, setMenu] = useState("");

//   useEffect(() => {
//     setProd(fakeproduct); // ✅ Set products from local data instead of API
//   }, []);

//   return (
//     <div>
//       <Navbar setSearch={setSearch} />
//       <Menubar setMenu={setMenu} />

//       {/* Sell Button */}
//       <div className="flex justify-end px-4 py-2">
//         <Link
//           to="/sell"
//           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//         >
//           Sell
//         </Link>
//       </div>

//       <Home products={prod} search={search} menu={menu} />
//       <Footer />
//     </div>
//   );
// };

// export default Main;
import { useEffect, useState } from "react";
import Menubar from "./Menubar";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { fakeproduct } from "../data/fakeproduct"; // Make sure this path is correct

const Main = () => {
  const [prod, setProd] = useState([]);
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState("");

  const exchangeRate = 80; // Static rate: 1 USD = 80 INR

  useEffect(() => {
    // Convert prices to INR
    const convertedProducts = fakeproduct.map((item) => ({
      ...item,
      price: item.price * exchangeRate,
    }));
    setProd(convertedProducts);
  }, []);

  return (
    <div>
      <Navbar setSearch={setSearch} />
      <Menubar setMenu={setMenu} />

      <div className="flex justify-end px-4 py-2">
        <Link
          to="/sell"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Sell
        </Link>
      </div>

      <Home products={prod} search={search} menu={menu} />
      <Footer />
    </div>
  );
};

export default Main;