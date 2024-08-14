import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { Box, Modal, Typography } from "@mui/material";
import { MdDelete } from "react-icons/md";
import addToCart, { deleteProduct } from "../Redux/Slice/addToCart";
import { deleteFavoriteProduct } from "../Redux/Slice/favouriteSlice";
import img from "../../img/logo-01.png.png";

const Navbar = () => {
  const addToCartProduct = useSelector(
    (state) => state.addToCartProduct.addToCartProduct
  );
  let count = useSelector((state) => state.addToCartProduct.value);

  let totalAmount = addToCartProduct.reduce(
    (acc, item) => acc + item.totalPrice,
    0
  );

  const favoriteProduct = useSelector(
    (state) => state.favoriteProduct.favouriteProduct
  );

  const [basketOpen, setBasketOpen] = useState(false);
  const [favoriteOpen, setFavoriteOpen] = useState(false);

  const handleBasketClose = useCallback(() => {
    setBasketOpen(false);
  }, [basketOpen]);
  const handleBasketOpen = useCallback(() => {
    setBasketOpen(true);
  }, [basketOpen]);

  const handleFavoriteClose = useCallback(() => {
    setFavoriteOpen(false);
  }, [favoriteOpen]);
  const handleFavoriteOpen = useCallback(() => {
    setFavoriteOpen(true);
  }, [favoriteOpen]);

  const dispatch = useDispatch();

  const handleAddProductDelete = (id) => {
    dispatch(deleteProduct(id));
  };
  const handleFavoriteProductDelete = (id) => {
    dispatch(deleteFavoriteProduct(id));
  };

  return (
    <div className="content">
      <nav className="navbar limiter-menu-desktop">
        <div className="nav-left">
          <a href="#" className="logo">
            <img src={img} alt="Logo" />
          </a>
          <div className="menu-list">
            <ul className="nav-list">
              <Link to="/" className="nav-item active">
                Home
              </Link>
              <li className="nav-item">Shop</li>
              <li className="nav-item">About</li>
              <li className="nav-item">Contact</li>
            </ul>
          </div>
        </div>
        <div className="nav-right">
          <ul className="icon-list">
            <li className="icon-item">
              <i className="fa-solid fa-magnifying-glass"></i>
            </li>
            <li className="icon-item count-item">
              <i
                onClick={handleBasketOpen}
                className="fa-solid basket fa-basket-shopping"
              ></i>
              <div className="count">
                <span>{count}</span>
              </div>
              <Modal
                className="modal"
                open={basketOpen}
                onClose={handleBasketClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="modal-box">
                  <Box className="modal-heading">
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      YOUR CART
                    </Typography>

                    <IoMdClose
                      style={{ cursor: "pointer", fontSize: "22px" }}
                      onClick={handleBasketClose}
                    />
                  </Box>
                  <Box className="product-modal scroll-1">
                    {addToCartProduct.map((item) => (
                      <Box
                        className="product-box"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                        key={item.id}
                      >
                        <Box
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box>
                            <img
                              style={{ width: "50px", height: "50px" }}
                              src={item.image}
                              alt={item.title}
                            />
                          </Box>
                          <Box>
                            <p style={{ textAlign: "center" }}>{item.title}</p>
                            <p style={{ textAlign: "end" }}>
                              {item.quantity}x {item.price}$
                            </p>
                          </Box>
                          <Box className="icon-box">
                            <MdDelete
                              onClick={() => handleAddProductDelete(item.id)}
                              className="delete-icon"
                              style={{ fontSize: "20px" }}
                            />
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <p>Total Amount: {totalAmount}$</p>
                  </Box>
                </Box>
              </Modal>
            </li>
            <li className="icon-item">
              <i
                onClick={handleFavoriteOpen}
                className="fa-regular fa-heart"
              ></i>
              <Modal
                className="modal"
                open={favoriteOpen}
                onClose={handleFavoriteClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="modal-box">
                  <Box className="modal-heading">
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      YOUR FAVORITES
                    </Typography>

                    <IoMdClose
                      style={{ cursor: "pointer", fontSize: "22px" }}
                      onClick={handleFavoriteClose}
                    />
                  </Box>
                  <Box className="product-modal scroll-1">
                    {favoriteProduct.map((item) => (
                      <Box
                        className="product-box"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                        key={item.id}
                      >
                        <Box
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box>
                            <img
                              style={{ width: "50px", height: "50px" }}
                              src={item.image}
                              alt={item.title}
                            />
                          </Box>
                          <Box style={{ display: "flex" }}>
                            <Box>
                              <p style={{ textAlign: "center" }}>
                                {item.title}
                              </p>
                              <p style={{ textAlign: "end" }}>{item.price}$</p>
                            </Box>
                            <Box className="icon-box">
                              <MdDelete
                                onClick={() =>
                                  handleFavoriteProductDelete(item.id)
                                }
                                className="delete-icon"
                                style={{ fontSize: "20px" }}
                              />
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Modal>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
