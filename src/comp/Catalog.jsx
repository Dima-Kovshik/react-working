import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import CatalogItem from "./CatalogItem.jsx";


export default function Catalog() {
  const [products, setProducts] = useState([]);


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

    });
    return test;
  }

  useEffect(() => {
    getProducts();
  }, []);



  return (
    <div className="pos">

      {products.map(product =>

        <CatalogItem key={product.id} item={product} />

      )}

    </div>

  )
}
