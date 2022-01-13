import React, { useState, useEffect, useRef } from "react";
import firebase from "./firebase";
import { Redirect, useParams } from 'react-router-dom';


export default function EditFirebase() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const name = useRef();
  const description = useRef();
  const price = useRef();
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

  function editProduct() {
    firebase.firestore().collection('products').doc(id).set({
      name: name.current.value,
      price: price.current.value,
      description: description.current.value
    })

  }

  return (
    <div>

      {products.map(product =>
        <div>
          <p>Название товара</p>
          <input
            type="text"
            defaultValue={product.name}
            ref={name}
          />
          <p>Стоимость товара</p>
          <input
            type="text"
            defaultValue={product.price}
            ref={price}
          />
          <p>Описание товара</p>
          <textarea
            defaultValue={product.description}
            ref={description} />
          <button onClick={() => editProduct()} >Редактировать
          </button>

        </div>
      )}
    </div>
  )
}
