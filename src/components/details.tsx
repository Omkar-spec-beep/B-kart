// import { useLocation } from "react-router-dom"

// const Details = () => {

//     const location = useLocation()

//     console.log(location)

//   return (
//     <div className="flex p-4">
//      <img src={location?.state?.data?.image}/>
//      <div>
//         <h1 className="font-bold text-3xl">₹ {location?.state?.data?.price}</h1>
//         <h1 className="mt-5"><span className="font-semibold">Category</span> : {location?.state?.data?.category}</h1>
//         <h1 className="mt-5"><span className="font-semibold">Title</span> : {location?.state?.data?.title}</h1>
//         <h1 className="mt-5"><span className="font-semibold">Description</span> : {location?.state?.data?.description}</h1>
//      </div>
//     </div>
//   )
// }

// export default Details
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const product = location?.state?.data;

  if (!product) {
    return <div>Product not found!</div>; // Error handling for missing product
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-md h-auto object-contain shadow-lg rounded-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-start">
          <h1 className="text-3xl font-bold text-green-600 mb-3">
            ₹{product.price.toLocaleString()}
          </h1>

          <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>

          <p className="text-lg mb-4 text-gray-700">{product.description}</p>

          <div className="text-sm text-gray-600 mb-2">
            <span className="font-semibold">Category:</span> {product.category}
          </div>

          <div className="text-sm text-gray-600 mb-2">
            <span className="font-semibold">Condition:</span> Used
          </div>

          {/* Back Button */}
          <div className="mt-4">
            <a
              href="/"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;