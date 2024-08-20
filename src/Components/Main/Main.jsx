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
  const [underline, setUnderline] = useState("All");

  useEffect(() => {
    dispatch(fetchProductData());
    dispatch(fetchDataCategory());
  }, [dispatch]);

  const handleProductCategory = (category) => {
    dispatch(filterByCategory(category));
    setShow(true);
    setUnderline("All");
  };

  return (
    <div className="main-container">
      <section>
        <div className="category">
          <div
            onClick={() => handleProductCategory("women's clothing")}
            className="card-product"
          >
            <div className="description">
              <h3>Women</h3>
              <p>Spring 2018</p>
            </div>
            <div className="img">
              <img
                width={"100px"}
                src="public\banner-01.jpg.png"
                alt="Women"
              />
            </div>
          </div>
          <div
            onClick={() => handleProductCategory("men's clothing")}
            className="card-product"
          >
            <div className="description">
              <h3>Men</h3>
              <p>Spring 2018</p>
            </div>
            <div className="img">
              <img
                width={"100px"}
                src="public/banner-02.jpg.png"
                alt="Men"
              />
            </div>
          </div>
          <div
            onClick={() => handleProductCategory("electronics")}
            className="card-product"
          >
            <div className="description">
              <h3>Accessories</h3>
              <p>New Trend</p>
            </div>
            <div className="img">
              <img src="public/banner-03.jpg.png" alt="Accessories" />
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
                  className={`item ${underline === "All" ? "active" : ""}`}
                >
                  All Products
                </p>
              </li>
              <li>
                <p
                  onClick={() => {
                    handleProductCategory("women's clothing");
                    setUnderline("Women");
                  }}
                  className={`item ${underline === "Women" ? "active" : ""}`}
                >
                  Women
                </p>
              </li>
              <li>
                <p
                  onClick={() => {
                    handleProductCategory("men's clothing");
                    setUnderline("Men");
                  }}
                  className={`item ${underline === "Men" ? "active" : ""}`}
                >
                  Men
                </p>
              </li>
              <li>
                <p
                  onClick={() => {
                    handleProductCategory("jewelery");
                    setUnderline("Jewelery");
                  }}
                  className={`item ${underline === "Jewelery" ? "active" : ""}`}
                >
                  Jewelery
                </p>
              </li>
              <li>
                <p
                  onClick={() => {
                    handleProductCategory("electronics");
                    setUnderline("Electronics");
                  }}
                  className={`item ${
                    underline === "Electronics" ? "active" : ""
                  }`}
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
