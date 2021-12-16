import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import CatalogItem from "./CatalogItem";

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection('products');

  function getProducts() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setProducts(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <h1>Идёт загрузка...</h1>
  }
  return (
    <div className="pos">


      {products.map((product) => (

        <CatalogItem name={product.name} price={product.price} id={product.id} />

      ))}
    </div>

  )
}
