import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import CatalogItem from "./CatalogItem";


export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  function getProducts() {
    var test = [];
    firebase.firestore().collection('products').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        test.push({
          id: doc.id,
          name: doc.data().name,
          description: doc.data().description,
          price: doc.data().price,
        })
      })
      setProducts(test);
      setLoading(false);
    });
    return test;
  }

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <h1>Идёт загрузка...</h1>
  }


  return (
    <div className="pos">

      {products.map(product =>

        <CatalogItem key={product.id} item={product} />

      )}

    </div>

  )
}
