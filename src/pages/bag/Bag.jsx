import React, { useContext, useEffect } from "react";
import SideBar from "../../components/SideBar";
import { Link } from "react-router-dom";
import { BagItemsContext } from "../../context/Store";
import { RadioGroup, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { green } from "@mui/material/colors";

const Bag = () => {
  const {
    bagItems,
    setBagItems,
    SaveItems,
    SetItem,
    TotalPrice,
    totalPrice,
    value,
    setValue,
    RatingValue,
    IncreaseQuantity,
    DecreaseQuantity,
    DeleteProduct,
  } = useContext(BagItemsContext);
  const [hover, setHover] = React.useState(-1);
  useEffect(() => {
    if (localStorage.getItem("BagItems")) {
      SaveItems();
      TotalPrice();
      // RatingValue();
      // Countproducts();
    }
  }, []);
  useEffect(() => {
    // SaveItems();
    TotalPrice();
  }, [DecreaseQuantity, IncreaseQuantity]);
  // useEffect(() => {
  //   DeleteProduct();
  // }, [DecreaseQuantity])

  return (
    <>
      <div className="grid grid-home">
        <SideBar />
        <div className="bagpage-content mt-14 ml-20 mr-12">
          <span>Check your Bag Items</span>
          <div className="flex flex-col gap-6 mt-9 mb-10">
            {/* {bagItems.filter(())} */}
            {bagItems.map((product) => (
              <>
                {/* {product.id  ? (
                  ""
                ) : ( */}
                {product.quantity == 0 ? (
                  ""
                ) : (
                  <div className="bg-white bg-box-bag">
                    <div className="py-4 px-6 gap-4">
                      <img src={product.image} alt="" />
                      <div className="flex flex-col gap-2 box-bag-content">
                        <span>{product.name}</span>
                        <span>{product.detail}</span>
                        <p className="mt-2">{product.bagDescription}</p>
                        <div className="flex gap-2 my-3">
                          <Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            // getLabelText={getLabelText}
                            onChange={(event, newValue) => {
                              setValue(bagItems.rate);
                            }}
                            onChangeActive={(event, newHover) => {
                              setHover(newHover);
                            }}
                            emptyIcon={
                              <StarIcon
                                style={{ color: green }}
                                fontSize="inherit"
                              />
                            }
                          />
                          <span className="itemview-rating-font">
                            {product.rate} / 5
                          </span>
                        </div>
                        <div className="flex justify-between mt-5">
                          <span>
                            $ {product.price} x {product.quantity}
                          </span>
                          <div className="quantity-bag flex gap-6 mr-10">
                            <button
                              onClick={
                                (() => (DecreaseQuantity(product.id),
                                DeleteProduct(product.id)))
                              }
                            >
                              -
                            </button>
                            {product.quantity}
                            <button
                              onClick={
                                (() => IncreaseQuantity(product.id))
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* )} */}
              </>
            ))}
          </div>
        </div>
        <div className="bag-checkout">
          <div className="flex">
            <hr className="vertical-line" />
            <div className="flex flex-col mt-20 items-center px-bag">
              <h3 className="font-bag">Bag</h3>
              <div className="grid grid-cols-3 bag-content gap-4">
                {bagItems.map((product, i) => (
                  <div>
                    <img src={product.image} alt="img" />
                  </div>
                ))}
              </div>
              <span className="mt-8 totalprice-font">
                Bag Total: $ {totalPrice}
              </span>
              <Link className="mt-8" to={"/checkout"}>
                <button className="btn-bag flex gap-2 items-center">
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.3117 6.94062C19.1727 6.8006 19.0073 6.68956 18.825 6.61392C18.6428 6.53829 18.4473 6.49957 18.25 6.5H15.25V5.75C15.25 4.35761 14.6969 3.02226 13.7123 2.03769C12.7277 1.05312 11.3924 0.5 10 0.5C8.60761 0.5 7.27226 1.05312 6.28769 2.03769C5.30312 3.02226 4.75 4.35761 4.75 5.75V6.5H1.75C1.35218 6.5 0.970644 6.65804 0.68934 6.93934C0.408035 7.22064 0.25 7.60218 0.25 8V18.125C0.25 19.9531 1.79688 21.5 3.625 21.5H16.375C17.2593 21.5003 18.1086 21.1545 18.7413 20.5367C19.0596 20.233 19.3132 19.8679 19.4865 19.4634C19.6599 19.059 19.7495 18.6236 19.75 18.1836V8C19.7506 7.80321 19.7122 7.60826 19.637 7.42642C19.5617 7.24458 19.4512 7.07946 19.3117 6.94062ZM6.25 5.75C6.25 4.75544 6.64509 3.80161 7.34835 3.09835C8.05161 2.39509 9.00544 2 10 2C10.9946 2 11.9484 2.39509 12.6517 3.09835C13.3549 3.80161 13.75 4.75544 13.75 5.75V6.5H6.25V5.75ZM15.25 10.25C15.25 11.6424 14.6969 12.9777 13.7123 13.9623C12.7277 14.9469 11.3924 15.5 10 15.5C8.60761 15.5 7.27226 14.9469 6.28769 13.9623C5.30312 12.9777 4.75 11.6424 4.75 10.25V9.5C4.75 9.30109 4.82902 9.11032 4.96967 8.96967C5.11032 8.82902 5.30109 8.75 5.5 8.75C5.69891 8.75 5.88968 8.82902 6.03033 8.96967C6.17098 9.11032 6.25 9.30109 6.25 9.5V10.25C6.25 11.2446 6.64509 12.1984 7.34835 12.9017C8.05161 13.6049 9.00544 14 10 14C10.9946 14 11.9484 13.6049 12.6517 12.9017C13.3549 12.1984 13.75 11.2446 13.75 10.25V9.5C13.75 9.30109 13.829 9.11032 13.9697 8.96967C14.1103 8.82902 14.3011 8.75 14.5 8.75C14.6989 8.75 14.8897 8.82902 15.0303 8.96967C15.171 9.11032 15.25 9.30109 15.25 9.5V10.25Z"
                      fill="white"
                    />
                  </svg>
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bag;
