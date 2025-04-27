
import { Link } from "react-router-dom";

type productsProp = {
  products: any;
  search: any;
  menu: any;
};

const Home = (props: productsProp) => {
  


  
  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
      {props?.products
        ?.filter((data: any) =>
          data?.title?.toLowerCase().includes(
            (props?.search || props?.menu || "").toLowerCase()
          )
        )
        .map((data: any) => (
          <Link to="/details" state={{ data }} key={data.id}>
            <div className="border rounded-lg shadow p-4 hover:shadow-md transition">
              <img
                src={data?.image}
                className="w-full h-40 object-contain mb-3"
                alt={data?.title}
              />
              <h1 className="font-bold text-lg truncate mb-1">
                Price: ₹{data?.price.toLocaleString("en-IN")}
              </h1>
              <h1 className="text-sm text-gray-800 truncate mb-1">
                {data?.title}
              </h1>
              <p className="text-xs text-gray-500 mb-2">
                Category: {data?.category}
              </p>
              <span className="inline-block text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                Used
              </span>
              <button className="mt-3 w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600">
                View
              </button>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Home;

// import { useEffect, useState } from "react";
// import { Link, Routes, Route } from "react-router-dom";
// import Menubar from "./Menubar";
// import Navbar from "./Navbar";
// import Home from "./Home";
// import Footer from "./Footer";
// import Sell from "./Sell";
// import { fakeproduct } from "../data/fakeproduct";

// export interface Product {
//   title: string;
//   price: number;
//   image: string;
// }

// const Main = () => {
//   const [prod, setProd] = useState<Product[]>([]);
//   const [search, setSearch] = useState<string>("");
//   const [menu, setMenu] = useState<string>("");

//   const exchangeRate = 80;

//   useEffect(() => {
//     // 1. Get posted items from localStorage
//     const storedItems = localStorage.getItem("items");
//     const userPostedProducts: Product[] = storedItems ? JSON.parse(storedItems).map((item: any) => ({
//       title: item.title,
//       price: Number(item.price) * exchangeRate,
//       image: item.imageUrl,
//     })) : [];

//     // 2. Convert fake products to INR
//     const convertedFakeProducts = fakeproduct.map((item: any) => ({
//       ...item,
//       price: item.price * exchangeRate,
//     }));

//     // 3. Merge posted items and fake products
//     setProd([...userPostedProducts, ...convertedFakeProducts]);
//   }, []);

//   return (
//     <div>
//       <Navbar setSearch={setSearch} />
//       <Menubar setMenu={setMenu} />

//       <div className="flex justify-end px-4 py-2">
//         <Link
//           to="/sell"
//           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//         >
//           Sell
//         </Link>
//       </div>

//       <Routes>
//         <Route path="/" element={<Home products={prod} search={search} menu={menu} />} />
//         <Route path="/sell" element={<Sell />} />
//       </Routes>

//       <Footer />
//     </div>
//   );
// };

// export default Main;
