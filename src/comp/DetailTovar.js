
import { matchPath } from "react-router";
import firebase from "./firebase";
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";



export default function DetailTovar() {


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  function getProducts() {
    var test = [];
    var docRef = firebase.firestore().collection('products').doc(id);
    docRef.get().then((doc) => {
      test.push({
        id: doc.id,
        name: doc.data().name,
        description: doc.data().description,
        price: doc.data().price,
      })
      console.log(test);
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

    <div>
      {products.map(product =>
        <div>
          <h1>Название товара: {product.name}</h1>
          <h2>Стоимость товара: {product.price}</h2>
          <h2>Описание товара: {product.description}</h2>
        </div>
      )}

    </div>
  )
}
