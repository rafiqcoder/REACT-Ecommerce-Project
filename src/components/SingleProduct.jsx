import { useContext, useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { DataContext } from "../ContextProvider/ContextProvider";
import Header from "./Header";

const SingleProduct = () => {
  const { handleAddToCart } = useContext(DataContext);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  console.log(id);
  const [singleData, setSingleProductData] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleProductData(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-100 h-screen">
        <InfinitySpin />
      </div>
    );
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <Header />
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <div className="flex justify-center mb-10">
            <img
              className="object-cover w-full h-96 rounded-xl lg:w-4/5"
              src={singleData.thumbnail}
            />
          </div>
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
            {singleData.title}
          </h1>
          <p className="mt-6 text-gray-500 dark:text-gray-300">
            {singleData.description}
          </p>
          <button
            className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-orange-600 rounded-lg hover:bg-orange-500 lg:mx-0 lg:w-auto focus:outline-none"
            onClick={() => handleAddToCart(singleData)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
