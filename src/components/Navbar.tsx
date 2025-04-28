// import Bkart from "../assets/Bkart.png"
// import lens from "../assets/lens.png"
// import arrow from "../assets/arrow.png"
// import search from "../assets/search.png"
// import Login from "./Login"
// import { useState } from "react"

// type searchProp = {
//   setSearch:any
// }

// const Navbar = (props:searchProp) => {

//   const [loginPop,setLoginPop] = useState(false)

//   return (
//     <>
//     <div className="flex p-4 bg-slate-100 shadow-md">
//       <img src={Bkart} className="w-11 h-9"/>
//       <div className="flex border-2 border-spacing-1 w-64 p-2 border-black ml-5 bg-white">
//         <img src={lens} className="w-6 h-5 mt-1"/>
//         <input  placeholder="Location" className="ml-3 outline-none "/>
//         <img src={arrow} className="w-8 h-7"/>
//       </div>
//       <div className="flex h-12 ml-4 border-2 border-black bg-white">
//         <input onChange={(e)=> props?.setSearch(e.target.value)} placeholder="Find Cars, Mobile phones and more" className="ml-3 w-96 outline-none"/>
//         <img src={search}/>
//       </div>
//       <div className="flex h-12 p-3 ml-10 cursor-pointer">
//         <h1 className="font-semibold">ENGLISH</h1>
//         <img src={arrow} className="w-8 h-7"/>
//       </div>
//       <div onClick={()=> setLoginPop(!loginPop)} className="flex h-12 p-3 ml-6 cursor-pointer underline hover:no-underline">
//         <h1 className="font-bold text-lg">Login</h1>
//       </div>
//       <div className="w-28 flex h-12 p-2 ml-6 cursor-pointer rounded-full border border-yellow-500">
//         <h1 className="font-bold text-lg ml-3">+ SELL</h1>
//       </div>
//     </div>
//     {loginPop && <Login setLoginPop={setLoginPop}/>}
//     </>
    
//   )
// }

// export default Navbar
import { useState } from "react"
import { Link } from "react-router-dom"
import BWUKart from "../assets/BWUKart.png"
import lens from "../assets/lens.png"
import arrow from "../assets/arrow.png"
import search from "../assets/search.png"
import Login from "./Login"

type searchProp = {
  setSearch: any
}

const HomeWithNavbar = (props: searchProp) => {
  const [loginPop, setLoginPop] = useState(false)

  return (
    <>
      {/* Navbar */}
      <div className="flex p-4 bg-slate-100 shadow-md">
        <img src={BWUKart} className="w-11 h-9" />
        <div className="flex border-2 w-64 p-2 border-black ml-5 bg-white">
          <img src={lens} className="w-6 h-5 mt-1" />
          <input placeholder="Location" className="ml-3 outline-none" />
          <img src={arrow} className="w-8 h-7" />
        </div>
        <div className="flex h-12 ml-4 border-2 border-black bg-white">
          <input
            onChange={(e) => props?.setSearch(e.target.value)}
            placeholder="Find Cars, Mobile phones and more"
            className="ml-3 w-96 outline-none"
          />
          <img src={search} />
        </div>
        <div className="flex h-12 p-3 ml-10 cursor-pointer">
          <h1 className="font-semibold">ENGLISH</h1>
          <img src={arrow} className="w-8 h-7" />
        </div>
        <div
          onClick={() => setLoginPop(!loginPop)}
          className="flex h-12 p-3 ml-6 cursor-pointer underline hover:no-underline"
        >
          <h1 className="font-bold text-lg">Login</h1>
        </div>
        {/* <div className="w-28 flex h-12 p-2 ml-6 cursor-pointer rounded-full border border-yellow-500">
          <h1 className="font-bold text-lg ml-3">+ SELL</h1>
        </div> */}
      </div>

      {/* Login Popup */}
      {loginPop && <Login setLoginPop={setLoginPop} />}

      {/* Hero Section */}
      <div className="bg-blue-100 text-center py-10">
        <h1 className="text-3xl font-bold text-blue-700">Welcome to BWU-Kart</h1>
        <p className="text-gray-700 mt-2">Buy & Sell Study Gear Inside Your Campus</p>
        <Link
          to="/sell"
          className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Start Selling
        </Link>
      </div>
    </>
  )
}

export default HomeWithNavbar