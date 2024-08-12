import React from "react";
import { useSelector } from "react-redux";
import Loader from "../muii/Loader";
import { MdAddShoppingCart } from "react-icons/md";

const CategoryProduct = () => {
  const status = useSelector((state) => state.product.status);
  const filteredProduct = useSelector((state) => state.product.filteredProduct);

  return (
    <div className="products">
      <div className="row">
        {status === "loading" ? (
          <Loader />
        ) : (
          filteredProduct.map((item) => (
            <div className="col" key={item.id}>
              <div className="card">
                <div className="card-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="info-img">
                  <div className="description">
                    <p className="product-title">{item.title}</p>
                    <p className="price">$ {item.price}</p>
                  </div>
                  <div className="icon">
                    <i className="fa-regular fa-heart"></i>
                    <MdAddShoppingCart />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryProduct;
