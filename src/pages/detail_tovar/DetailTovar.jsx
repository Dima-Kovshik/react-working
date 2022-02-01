import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import TovarService from "../detail_tovar/service/service.jsx";

export default function DetailTovar() {

  let [products, setProducts] = useState([]);
  const id = useParams().id;
  console.log(products)
  async function fetchProducts() {
    const userResponse = await TovarService.getDetail(id);
    setProducts(userResponse);
  }

  useEffect(() => {
    fetchProducts()
  }, [0])




  return (

    <div className="pos">

      {products.map(product =>

        <h1>{product.name}</h1>

      )}

    </div>
  )
}
