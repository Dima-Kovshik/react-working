import React, { useState, useEffect } from "react";
import firebase from "./firebase";

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

        <div class="product-wrap">

          <div class="product-image">
            <a href=""><img src="https://html5book.ru/wp-content/uploads/2015/10/black-dress.jpg" /></a>
            <div class="shadow"></div>
            <div class="actions">
              <div class="actions-btn">
                <div class="add-to-cart">
                  <a class="add-to-cart-button" href="#" title="Добавить в корзину"></a>
                </div>
                <div class="add-to-links">

                  <div class="quikview">
                    <a key={product.id} class="quikview-button" href="#" title="Быстрый просмотр"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="product-list">
            <h3>{product.name}</h3>
            <div class="price">&#8381; {product.price}</div>

          </div>

        </div>

      ))}
    </div>

  )
}
