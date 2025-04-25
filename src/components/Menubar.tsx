// type menuProp = {
//     setMenu:any
//   }
  
  
//   const Menubar = (props:menuProp) => {
//     return (
//       <div className="flex shadow-sm h-10 p-2">
//         <h1 onClick={()=> props?.setMenu("Electronics")} className="ml-48 cursor-pointer">Electronics</h1>
//         <h1 onClick={()=> props?.setMenu("Stationary")} className="ml-5 cursor-pointer">Stationary</h1>
//         <h1 onClick={()=> props?.setMenu("Sports")} className="ml-5 cursor-pointer">Sports</h1>
//         <h1 onClick={()=> props?.setMenu("Medikit")} className="ml-5 cursor-pointer">Medikit</h1>
//         <h1 onClick={()=> props?.setMenu("Cycle")} className="ml-5 cursor-pointer">Cycle</h1>
//         <h1 onClick={()=> props?.setMenu("Accessories")} className="ml-5 cursor-pointer">Accessories</h1>
//         <h1 onClick={()=> props?.setMenu("Bike")} className="ml-5 cursor-pointer">Bike</h1>
//       </div>
//     )
//   }
  
//   export default Menubar
type MenuProp = {
  setMenu: any;
};

const Menubar = (props: MenuProp) => {
  const categories = [
    "Books",
    "Electronics",
    "Lab Equipment",
    "Stationery",
    "Furniture",
    "Hostel Supplies",
    "Cycle",
    "Accessories",
    "Sports",
    "Medikit",
    "Bike"
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center bg-white shadow p-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => props.setMenu(cat)}
          className="bg-gray-100 hover:bg-blue-200 text-sm px-3 py-1 rounded transition"
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Menubar;