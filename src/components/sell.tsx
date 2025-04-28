
// import { useState, useEffect } from "react";


// const Sell = () => {
//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState<File | null>(null);
//   const [items, setItems] = useState<any[]>([]);

//   // Load existing items from localStorage on mount
//   useEffect(() => {
//     const storedItems = localStorage.getItem("items");
//     if (storedItems) {
//       setItems(JSON.parse(storedItems));
//     }
//   }, []);

//   // Save items to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem("items", JSON.stringify(items));
//   }, [items]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!title || !price || !image) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     const imageUrl = URL.createObjectURL(image);

//     const newItem = {
//       title,
//       price,
//       imageUrl,
//     };

//     setItems(prev => [...prev, newItem]);

//     // Reset form
//     setTitle("");
//     setPrice("");
//     setImage(null);
//     alert("Item posted successfully!");
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Sell Your Item</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="text"
//           placeholder="Item Title"
//           value={title}
//           onChange={e => setTitle(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={price}
//           onChange={e => setPrice(e.target.value)}
//           required
//         />
//         <input
//           type="file"
//           onChange={e => setImage(e.target.files?.[0] || null)}
//           accept="image/*"
//           required
//         />
//         <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//           Post Item
//         </button>
//       </form>

//       {/* Display posted items */}
//       <div className="mt-6">
//         <h3 className="text-lg font-semibold mb-2">Your Posted Items</h3>
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
//       </div>
//     </div>
//   );
// };

// export default Sell;

import { useState, useEffect } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../firebase/setup"; // Adjust the path if needed

const db = getFirestore(app); // Initialize Firestore

const Sell = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [items, setItems] = useState<any[]>([]);

  // Load existing items from localStorage on mount
  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  // Save items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !price || !image) {
      alert("Please fill in all fields.");
      return;
    }

    const imageUrl = URL.createObjectURL(image);

    const newItem = {
      title,
      price,
      imageUrl,
    };

    setItems(prev => [...prev, newItem]); // Update UI immediately

    // Save to Firestore
    try {
      await addDoc(collection(db, "products"), newItem);
      alert("Item posted successfully to Firestore!");
    } catch (error) {
      console.error("Error adding item to Firestore:", error);
      alert("Failed to post item. See console for error.");
    }

    // Reset form
    setTitle("");
    setPrice("");
    setImage(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Sell Your Item</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Item Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
          required
        />
        <input
          type="file"
          onChange={e => setImage(e.target.files?.[0] || null)}
          accept="image/*"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Post Item
        </button>
      </form>

      {/* Display posted items */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Your Posted Items</h3>
        <div className="grid gap-4 grid-cols-2">
          {items.map((item, index) => (
            <div key={index} className="border rounded p-2 shadow">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-40 w-full object-cover rounded mb-2"
              />
              <h4 className="font-bold">{item.title}</h4>
              <p>₹{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sell;