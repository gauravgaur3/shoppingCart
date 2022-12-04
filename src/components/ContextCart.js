import React,{useContext} from 'react'
import { CartContext } from './Cart';
import Items from "./Items"

const ContextCart = () => {
const {item,clearCart,totalItem,totalAmount} = useContext(CartContext);
  return (
    <>
         {/*  Navbar */}
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid justify-content-end">
          <button type="button" className="btn btn-light position-relative">
            Cart
            <span className="position-absolute top-0 start-99 translate-middle badge rounded-pill text-bg-secondary">
              {totalItem}
            </span>
          </button>
        </div>
      </nav>

      {/*  Cart */}

      {/* Checkout */}
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-5 col-lg-3 order-md-last ">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <button className="btn btn-danger" onClick={clearCart}>Clear Cart</button>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h5 className="my-2">Total</h5>
                </div>
                <span className="text-muted my-2">₹ {totalAmount}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h5 className="my-2">Delivery Charges</h5>
                </div>
                <span className="text-muted my-2">
                  <i className="bi bi-info-circle"></i>
                </span>
              </li>
              <div className="input-group">
                <button type="submit" className="btn btn-success w-100 mt-3">
                  CHECKOUT
                </button>
              </div>
            </ul>
          </div>

          {/* My Bag */}
          <div className="col-md-7 col-lg-6">
            <h3 className="mb-3">MY BAG</h3>
            {totalItem?<div className="row g-3">
              {
                item.map((curItem)=>{
                  return <Items key={curItem.id} {...curItem}/>
                })
              }
            </div>:<h3 className="">Your cart is empty!</h3>}
          </div>
        </div>
      </div>
    </>
  )
}

export default ContextCart