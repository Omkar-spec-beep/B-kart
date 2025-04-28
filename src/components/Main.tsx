

import { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Menubar from "./Menubar";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Sell from "./Sell";
import { fakeproduct } from "../data/fakeproduct";

export interface Product {
  title: string;
  price: number;
  image: string;
}

const Main = () => {
  const [prod, setProd] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");
  const [menu, setMenu] = useState<string>("");

  const exchangeRate = 80;

  useEffect(() => {
    // 1. Get posted items from localStorage
    const storedItems = localStorage.getItem("items");
    const userPostedProducts: Product[] = storedItems ? JSON.parse(storedItems).map((item: any) => ({
      title: item.title,
      price: Number(item.price) * exchangeRate,
      image: item.imageUrl,
    })) : [];

    // 2. Convert fake products to INR
    const convertedFakeProducts = fakeproduct.map((item: any) => ({
      ...item,
      price: item.price * exchangeRate,
    }));

    // 3. Merge posted items and fake products
    setProd([...userPostedProducts, ...convertedFakeProducts]);
  }, []);

  return (
    <div>
      <Navbar setSearch={setSearch} />
      <Menubar setMenu={setMenu} />

      {/* <div className="flex justify-end px-4 py-2">
        <Link
          to="/sell"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Sell
        </Link>
      </div> */}

      <Routes>
        <Route path="/" element={<Home products={prod} search={search} menu={menu} />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default Main;