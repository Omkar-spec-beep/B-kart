// import { Link } from "react-router-dom"

// type productsProp = {
//     products:any,
//     search:any,
//     menu:any
// }

// const Home = (props:productsProp) => {
//   return (
//     <div className="grid grid-cols-4 p-5">
//       {props?.products?.filter((data:any)=> data?.title?.includes(props?.search ? props?.search : props?.menu)).map((data:any)=>{
//         return <Link to="/details" state={{data:data}}><div className="border border-spacing-1 p-2 ml-3 mt-3">
//          <img src={data?.image} className="w-60 h-48"/>
//          <h1 className="font-bold text-xl">$ {data?.price}</h1>
//          <h1>{data?.title}</h1>
//          <h1>{data?.category}</h1>
//         </div></Link>
//       })}
//     </div>
//   )
// }

// export default Home
// import { Link } from "react-router-dom";

// type productsProp = {
//   products: any;
//   search: any;
//   menu: any;
// };

// const Home = (props: productsProp) => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
//       {props?.products
//         ?.filter((data: any) =>
//           data?.title?.toLowerCase().includes(
//             (props?.search || props?.menu || "").toLowerCase()
//           )
//         )
//         .map((data: any) => (
//           <Link to="/details" state={{ data }} key={data.id}>
//             <div className="border rounded-lg shadow p-4 hover:shadow-md transition">
//               <img
//                 src={data?.image}
//                 className="w-full h-40 object-contain mb-3"
//                 alt={data?.title}
//               />
//               <h1 className="font-bold text-lg truncate mb-1">${data?.price}</h1>
//               <h1 className="text-sm text-gray-800 truncate mb-1">{data?.title}</h1>
//               <p className="text-xs text-gray-500 mb-2">Category: {data?.category}</p>
//               <span className="inline-block text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
//                 Used
//               </span>
//               <button className="mt-3 w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600">
//                 View
//               </button>
//             </div>
//           </Link>
//         ))}
//     </div>
//   );
// };

// export default Home;
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

// const Home = () => {
//   const [items, setItems] = useState<any[]>([]);

//   useEffect(() => {
//     const storedItems = localStorage.getItem("items");
//     if (storedItems) {
//       setItems(JSON.parse(storedItems));
//     }
//   }, []);

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Marketplace</h2>
//       {items.length === 0 ? (
//         <p>No items listed yet.</p>
//       ) : (
//         <div className="grid gap-4 grid-cols-2">
//           {items.map((item, index) => (
//             <div key={index} className="border rounded p-2 shadow">
//               <img
//                 src={item.imageUrl}
//                 alt={item.title}
//                 className="h-40 w-full object-cover rounded mb-2"
//               />
//               <h4 className="font-bold">{item.title}</h4>
//               <p>₹{item.price}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;