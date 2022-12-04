import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Items = ({ id, title, img, price, quantity, color}) => {
  const { removeItem,increment, decrement} = useContext(CartContext);
  return (
    <>
      <div className="col-12">
        <div>
          <hr/>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-row">
              <img
                className="rounded"
                src={img}
                width="100"
                height="100"
                alt={title}
              />

              <div className="m-3">
                <h4 className="font-weight-bold d-block">{title}</h4>
                <h6>₹ {price}</h6>
                <span className="badge me-2 text-bg-secondary">
                  Color {color}
                </span>

                <div className="d-inline-flex align-items-center">
                  <i className="bi bi-dash btn" onClick={()=>decrement(id)}></i>
                  <input type="text" className="form-control form-control-sm w-25 text-center" placeholder={quantity}/>
                  <i className="bi bi-plus btn" onClick={()=>increment(id)}></i>
                </div>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <i className="bi bi-x-lg" onClick={() => removeItem(id)}></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
