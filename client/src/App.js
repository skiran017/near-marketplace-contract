import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { getProducts } from "./utils/marketplace";
import { login } from "./utils/near";

function App() {
  const account = window.walletConnection.account();
  const [products, setProducts] = useState([]);
  const fetchProducts = useCallback(async () => {
    if (account.accountId) {
      setProducts(await getProducts());
    }
  });
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      {account.accountId ? (
        products.forEach((product) => console.log(product))
      ) : (
        <button onClick={login}>CONNECT WALLET</button>
      )}
    </>
  );
}

export default App;
