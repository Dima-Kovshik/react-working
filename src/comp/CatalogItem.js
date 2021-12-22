import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DetailTovar from "./DetailTovar";




export default function CatalogItem(props) {
  console.log(props.id)
  return (

    <div className="product-wrap">

      <div className="product-image">
        <a href=""><img src="https://html5book.ru/wp-content/uploads/2015/10/black-dress.jpg" /></a>
        <div className="shadow"></div>
        <div className="actions">
          <div className="actions-btn">
            <div className="add-to-cart">
              <a className="add-to-cart-button" href="#" title="Добавить в корзину"></a>
            </div>
            <div className="add-to-links">

              <div className="quikview">



                <Link to={`/product/${props.item.id}`}>
                  +</Link>




              </div>


            </div>
          </div>
        </div>
      </div>
      <div className="product-list">
        <h3>{props.item.name}</h3>
        <div className="price">&#8381; {props.item.price}</div>

      </div>

    </div>

  )
}
