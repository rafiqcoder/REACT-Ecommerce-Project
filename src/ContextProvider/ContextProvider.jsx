import React, { createContext, useEffect, useState } from "react";
export const DataContext = createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((data) => data.json())
      .then((fata) => {
        setData(fata);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      const modifiedData = {
        ...exist,
        quantity: exist.quantity + 1,
        totalPrice: exist.totalPrice + product.price,
      };
      const othersProduct = cart.filter((item) => item.id !== product.id);
      setCart([...othersProduct, modifiedData]);
    } else {
      const modifiedProduct = {
        ...product,
        quantity: 1,
        totalPrice: product.price,
      };
      setCart([...cart, modifiedProduct]);
    }
  };
  console.log("cart", cart);

  const info = {
    data,
    setData,
    cart,
    setCart,
    loading,
    setLoading,
    handleAddToCart,
  };

  return <DataContext.Provider value={info}>{children}</DataContext.Provider>;
};

export default ContextProvider;
