type menuProp = {
    setMenu:any
  }
  
  
  const Menubar = (props:menuProp) => {
    return (
      <div className="flex shadow-sm h-10 p-2">
        <h1 onClick={()=> props?.setMenu("Electronics")} className="ml-48 cursor-pointer">Electronics</h1>
        <h1 onClick={()=> props?.setMenu("Stationary")} className="ml-5 cursor-pointer">Stationary</h1>
        <h1 onClick={()=> props?.setMenu("Sports")} className="ml-5 cursor-pointer">Sports</h1>
        <h1 onClick={()=> props?.setMenu("Medikit")} className="ml-5 cursor-pointer">Medikit</h1>
        <h1 onClick={()=> props?.setMenu("Cycle")} className="ml-5 cursor-pointer">Cycle</h1>
        <h1 onClick={()=> props?.setMenu("Accessories")} className="ml-5 cursor-pointer">Accessories</h1>
        <h1 onClick={()=> props?.setMenu("Bike")} className="ml-5 cursor-pointer">Bike</h1>
      </div>
    )
  }
  
  export default Menubar