import React from 'react';
import { Link } from 'react-router-dom';
import {formatPrice} from "../../utils/helpers";
import "./Product.scss";

const Product = ({product}) => {
  return (
    <Link to = {`/product/${product?.id}`} key = {product?.id}>
      <div className='product-item bg-whitesmoke'>
       
        <div className='product-item-img'>
          <img className='img-cover' src = {product?.images[0]} alt = {product.title} />
        </div>
        <div className='product-item-info fs-14'>
         
          <div className='title py-2'>
            {product?.title}
          </div>
          
        </div>
      </div>
    </Link>
  )
}

export default Product