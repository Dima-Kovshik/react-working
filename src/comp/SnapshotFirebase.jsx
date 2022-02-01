import React, { useState, useEffect, Fragment } from "react";
import firebase from "./firebase";
import {
  Link
} from "react-router-dom";

function SnapshotFirebase() {

  /*
  const [products, setSchools] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setTitle] = useState("");
  const [description, setDesc] = useState("");

  const ref = firebase.firestore().collection("products");


  function getSchools() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setSchools(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getSchools();

  }, []);


  function addSchool(newSchool) {
    ref

      .add(newSchool)
      .catch((err) => {
        console.error(err);
      });
  }


  function deleteSchool(school) {
    ref
      .doc(school.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }


  function editSchool(updateSchool) {
    setLoading();
    ref
      .doc(updateSchool.id)
      .update(updateSchool)
      .catch((err) => {
        console.error(err);
      });
  } */

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [price, setPrice] = useState("");

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

  function addProduct() {
    firebase.firestore().collection('products').add({
      name: name,
      price: price,
      description: description
    });
    getProducts();
  }

  function deleteProduct(products) {
    firebase.firestore().collection('products').doc(products.id).delete().then(() => {
      getProducts();
    });
  }

  return (
    <Fragment>
      <h1>Работа с товарами</h1>
      <div className="inputBox">
        <h3>Добаить товар</h3>
        <p>Название товара</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p>Стоимость товара</p>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <p>Описание товара</p>
        <textarea value={description} onChange={(e) => setDesc(e.target.value)} />
        <button onClick={() => addProduct({ name, description, price })}>
          Добавить
        </button>
      </div>
      <hr />

      {products.map((products) => (
        <div>
          <h2>{products.name}</h2>
          <p>{products.price}</p>

          <div>
            <button onClick={() => deleteProduct(products)}>Удалить</button>

            <Link to={`/edit/${products.id}`}>Редактировать</Link>

          </div>
        </div>
      ))}
    </Fragment>
  );
}

export default SnapshotFirebase;
