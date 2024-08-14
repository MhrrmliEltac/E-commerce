import React, { useEffect, useState } from "react";
import Product from "../ProductItem/Product";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDataCategory,
  fetchProductData,
  filterByCategory,
} from "../Redux/Slice/productSlice";
import CategoryProduct from "../ProductItem/CategoryProduct";

const Main = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(fetchProductData());
    dispatch(fetchDataCategory());
  }, [dispatch]);

  const handleProductCategory = (category) => {
    dispatch(filterByCategory(category));
    setShow(true);
  };

  return (
    <div className="container">
      <section>
        <div className="category">
          <div
            onClick={() => handleProductCategory("women's clothing")}
            className="card"
          >
            <div className="description">
              <h3>Women</h3>
              <p>Spring 2018</p>
            </div>
            <div className="img">
              <img
                width={"100px"}
                src="src/img/banner-01.jpg.png"
                alt="Women"
              />
            </div>
          </div>
          <div
            onClick={() => handleProductCategory("men's clothing")}
            className="card"
          >
            <div className="description">
              <h3>Men</h3>
              <p>Spring 2018</p>
            </div>
            <div className="img">
              <img width={"100px"} src="src/img/banner-02.jpg.png" alt="Men" />
            </div>
          </div>
          <div
            onClick={() => handleProductCategory("electronics")}
            className="card"
          >
            <div className="description">
              <h3>Accessories</h3>
              <p>New Trend</p>
            </div>
            <div className="img">
              <img src="src/img/banner-03.jpg.png" alt="Accessories" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-product">
          <div className="product-overview">
            <h3>Product Overview</h3>
          </div>
          <div className="category-lis">
            <ul className="category-list">
              <li>
                <p
                  onClick={() => handleProductCategory("all")}
                  className="active item"
                  
                >
                  All Products
                </p>
              </li>
              <li>
                <p
                  onClick={() => handleProductCategory("women's clothing")}
                  className="item"
                  
                >
                  Women
                </p>
              </li>
              <li>
                <p
                  onClick={() => handleProductCategory("men's clothing")}
                  className="item"
                  
                >
                  Men
                </p>
              </li>
              <li>
                <p
                  onClick={() => handleProductCategory("jewelery")}
                  className="item"
                  
                >
                  Jewelery
                </p>
              </li>
              <li>
                <p
                  onClick={() => handleProductCategory("electronics")}
                  className="item"
                >
                  Electronics
                </p>
              </li>
            </ul>
            <div className="buttons">
              <button className="filter">
                <i className="fa-solid fa-filter"></i>Filter
              </button>
              <button className="search">
                <i className="fa-solid fa-magnifying-glass"></i>Search
              </button>
            </div>
          </div>
        </div>

        {!show ? <Product /> : <CategoryProduct />}
      </section>
    </div>
  );
};

export default Main;
