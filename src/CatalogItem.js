import React from "react";

export default function CatalogItem(props) {
  return (
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
                <a key={props.id} class="quikview-button" href="#" title="Быстрый просмотр"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-list">
        <h3>{props.name}</h3>
        <div class="price">&#8381; {props.price}</div>

      </div>

    </div>
  )
}
