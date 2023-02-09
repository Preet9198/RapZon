import React, {useEffect, useState} from 'react';
import "./ProductSinglePage.scss";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { fetchAsyncProductSingle, getProductSingle, getSingleProductStatus } from '../../store/productSlice';
import { STATUS } from '../../utils/status';
import Loader from "../../components/Loader/Loader";
import {formatPrice} from "../../utils/helpers";
import { addToCart, getCartMessageStatus, setCartMessageOff, setCartMessageOn } from '../../store/cartSlice';
import CartMessage from "../../components/CartMessage/CartMessage";

const ProductSinglePage = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getProductSingle);
  const productSingleStatus = useSelector(getSingleProductStatus);
  const [quantity, setQuantity] = useState(1);
  const cartMessageStatus = useSelector(getCartMessageStatus);

  // getting single product
  useEffect(() => {
    dispatch(fetchAsyncProductSingle(id));

    if(cartMessageStatus){
      setTimeout(() => {
        dispatch(setCartMessageOff());
      }, 2000);
    }
  }, [cartMessageStatus]);

  let discountedPrice = (product?.price) - (product?.price * (product?.discountPercentage / 100));
  if(productSingleStatus === STATUS.LOADING) {
    return <Loader />
  }

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if(tempQty >  12) tempQty = 12;
       return tempQty;
     
      
    
    })
  }
 

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if(tempQty < 1) tempQty = 1;
      return tempQty;
    })
  }

  const addToCartHandler = (product) => {
    let discountedPrice = (product?.price) - (product?.price * (product?.discountPercentage / 100));
    let totalPrice = quantity * discountedPrice;

    dispatch(addToCart({...product, quantity: quantity, totalPrice, discountedPrice}));
    dispatch(setCartMessageOn(true));
  }


  return (
    <main className='py-5 bg-whitesmoke'>
      <div className='product-single'>
        <div className='container'>
          <div className='product-single-content bg-white grid'>
            <div className='product-single-l'>
              <div className='product-img'>
                <div className='product-img-zoom'>
                  <img src = {product?(product.images ? product.images[0] : "") : ""} alt = "" className='img-cover' />
                </div>

                <div className='product-img-thumbs flex align-center my-2'>
                  <div className='thumb-item'>
                    <img src = {
                      product ? (product.images ? product.images[1] : "") : ""
                    } alt = "" className='img-cover' />
                  </div>
                  <div className='thumb-item'>
                    <img src = {
                      product ? (product.images ? product.images[2] : "") : ""
                    } alt = "" className='img-cover' />
                  </div>
                  <div className='thumb-item'>
                    <img src = {
                      product ? (product.images ? product.images[3] : "") : ""
                    } alt = "" className='img-cover' />
                  </div>
                  <div className='thumb-item'>
                    <img src = {
                      product ? (product.images ? product.images[4] : "") : ""
                    } alt = "" className='img-cover' />
                  </div>
                </div>
              </div>
            </div>

            <div className='product-single-r'>
              <div className='product-details font-manrope'>
               
               
               <div>
                <h5>ID-{product?.id}</h5><br/>
                <h5>Title-{product?.title}</h5><br/>
                <h5>Description-{product?.description}</h5><br/>
                <h5>Rating-{product?.rating}</h5><br/>
                <h5>category-{product?.category}</h5><br/>
                <h5>price-{product?.price}</h5><br/>
                <h5>discountedPercentage-{product?.discountPercentage}</h5><br/>
                <h5>Stock-{product?.stock}</h5><br/>
                <h5>Brand-{product?.brand}</h5><br/>
               </div>
               
                 

                

                <div className='qty flex align-center my-4'>
                  <div>Quantity:</div>
                  <div className='qty-change flex align-center mx-3'>
                    <button type = "button" className='qty-decrease flex align-center justify-center' onClick={() => decreaseQty()}>
                      <i className='fas fa-minus'></i>
                    </button>
                    <div className = "qty-value flex align-center justify-center">{quantity}</div>
                    <button type = "button" className='qty-increase flex align-center justify-center' onClick={() => increaseQty()}>
                      <i className='fas fa-plus'></i>
                    
                    </button>
                  </div>
              
                  {
                    (product?.stock === 0) ? <div className ='qty-error text-uppercase bg-danger text-white fs-12 ls-1 mx-2 fw-5'>out of stock</div> : ""
                  }
                </div>

                <div className='btns'>
                  <button type = "button" className='add-to-cart-btn btn'>
                    <i className='fas fa-shopping-cart'></i>
                    <span className='btn-text mx-2' onClick={() => { addToCartHandler(product)}}>add to cart</span>
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {cartMessageStatus && <CartMessage />}
    </main>
  )
}

export default ProductSinglePage