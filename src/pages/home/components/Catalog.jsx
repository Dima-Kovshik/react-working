import React, { useState, useEffect } from "react";
import firebase from "../../../firebase";
import CatalogItem from "../../../shared/CatalogItem";
import CatalogService from "../service/service.jsx"



export default function Catalog() {
  let [products, setProducts] = useState([]);
  console.log(products)
  async function fetchProducts() {
    const userResponse = await CatalogService.getCatalog();
    setProducts(userResponse);
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="pos">

      {products.map(product =>

        <CatalogItem key={product.id} item={product} />

      )}

    </div>

  )
}
