import { Route, Routes } from "react-router-dom"
import Main from "./components/Main"
import Details from "./components/details"
import Sell from "./components/sell";



const App = () => {
  return (
   <>
   <Routes>
   <Route path="/" element={<Main/>}/>
   <Route path="/details" element={<Details/>}/>
   <Route path="/" element={<Main />} />
  <Route path="/details/:id" element={<Details />} />
  <Route path="/sell" element={<Sell />} />
   </Routes>
   </>
  )
}

export default App
