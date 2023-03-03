import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bag from "../../components/Bag";
import SideBar from "../../components/SideBar";
import { BagItemsContext } from "../../context/Store";
import { data } from "../../data/data";

const Home = () => {
  const [bag, setBag] = useState(false);

  const { bagItems, setBagItems, SaveItems, SetItem } =
    useContext(BagItemsContext);

  useEffect(() => {
    if (localStorage.getItem("BagItems")) {
      SaveItems();
    }
  }, []);

  return (
    <>
      <div className="grid grid-home">
        <SideBar />
        <div className="content my-8 relative">
          <div className="flex justify-center items-center">
            <div className="flex search-item items-center mb-12">
              <div className="flex flex-col gap-2">
                <label htmlFor="">Search Item</label>
                <input
                  type="text"
                  placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
                />
              </div>
              <div className="relative">
                <svg
                  onClick={() => setBag(!bag)}
                  className="bag-icon"
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.3117 16.3685C29.1727 16.2285 29.0073 16.1175 28.825 16.0418C28.6428 15.9662 28.4473 15.9275 28.25 15.9279H25.25V15.1779C25.25 13.7855 24.6969 12.4502 23.7123 11.4656C22.7277 10.481 21.3924 9.92792 20 9.92792C18.6076 9.92792 17.2723 10.481 16.2877 11.4656C15.3031 12.4502 14.75 13.7855 14.75 15.1779V15.9279H11.75C11.3522 15.9279 10.9706 16.086 10.6893 16.3673C10.408 16.6486 10.25 17.0301 10.25 17.4279V27.5529C10.25 29.381 11.7969 30.9279 13.625 30.9279H26.375C27.2593 30.9282 28.1086 30.5825 28.7413 29.9646C29.0596 29.6609 29.3132 29.2958 29.4865 28.8914C29.6599 28.4869 29.7495 28.0515 29.75 27.6115V17.4279C29.7506 17.2311 29.7122 17.0362 29.637 16.8543C29.5617 16.6725 29.4512 16.5074 29.3117 16.3685ZM16.25 15.1779C16.25 14.1834 16.6451 13.2295 17.3483 12.5263C18.0516 11.823 19.0054 11.4279 20 11.4279C20.9946 11.4279 21.9484 11.823 22.6517 12.5263C23.3549 13.2295 23.75 14.1834 23.75 15.1779V15.9279H16.25V15.1779ZM25.25 19.6779C25.25 21.0703 24.6969 22.4057 23.7123 23.3902C22.7277 24.3748 21.3924 24.9279 20 24.9279C18.6076 24.9279 17.2723 24.3748 16.2877 23.3902C15.3031 22.4057 14.75 21.0703 14.75 19.6779V18.9279C14.75 18.729 14.829 18.5382 14.9697 18.3976C15.1103 18.2569 15.3011 18.1779 15.5 18.1779C15.6989 18.1779 15.8897 18.2569 16.0303 18.3976C16.171 18.5382 16.25 18.729 16.25 18.9279V19.6779C16.25 20.6725 16.6451 21.6263 17.3483 22.3296C18.0516 23.0328 19.0054 23.4279 20 23.4279C20.9946 23.4279 21.9484 23.0328 22.6517 22.3296C23.3549 21.6263 23.75 20.6725 23.75 19.6779V18.9279C23.75 18.729 23.829 18.5382 23.9697 18.3976C24.1103 18.2569 24.3011 18.1779 24.5 18.1779C24.6989 18.1779 24.8897 18.2569 25.0303 18.3976C25.171 18.5382 25.25 18.729 25.25 18.9279V19.6779Z"
                    fill="#1A1F16"
                  />
                </svg>
                {bag && (
                  <>
                    <div className="absolute bg-white popup-menu scale-up-center">
                      <div className="bag-content gap-4">
                        {bagItems.map((product, i) => (
                          <div>
                            <img src={product.image} alt="img" />
                          </div>
                        ))}
                      </div>
                      <Link className="mt-9" to={"/bag"}>
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
                          View Bag
                        </button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="home-content gap-8 mx-12">
            {data.map((product, i) => (
              <div className={product.type === "laptop" ? "span-laptop" : ""}>
                <Link to={`/itemview/${product.id}`}>
                  <div
                    className={
                      "bg-white content flex items-center justify-center "
                    }
                  >
                    <img className="h-52 p-4" src={product.image} alt="" />
                  </div>
                </Link>
                <div className="content-detail flex flex-col mt-4 gap-2">
                  <Link to={`/itemview/${product.id}`}>
                    <span>{product.name}</span>
                  </Link>
                  <span>{product.detail}</span>
                  <div className="flex justify-between m-2 items-center">
                    <span>$ {product.price}</span>
                    <button onClick={() => SetItem(product.id)}>
                      <svg
                        width="35"
                        height="34"
                        viewBox="0 0 35 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.500015"
                          width="34"
                          height="34"
                          rx="9"
                          fill="#1A1F16"
                        />
                        <path
                          d="M24.4842 13.9555C24.3798 13.8505 24.2557 13.7672 24.1189 13.7105C23.9822 13.6538 23.8356 13.6247 23.6875 13.625H21.4375V13.0625C21.4375 12.0182 21.0227 11.0167 20.2842 10.2783C19.5458 9.53984 18.5443 9.125 17.5 9.125C16.4557 9.125 15.4542 9.53984 14.7158 10.2783C13.9774 11.0167 13.5625 12.0182 13.5625 13.0625V13.625H11.3125C11.0141 13.625 10.728 13.7435 10.517 13.9545C10.306 14.1655 10.1875 14.4516 10.1875 14.75V22.3438C10.1875 23.7148 11.3477 24.875 12.7188 24.875H22.2813C22.9445 24.8752 23.5815 24.6159 24.056 24.1525C24.2947 23.9247 24.4849 23.6509 24.6149 23.3476C24.745 23.0442 24.8122 22.7177 24.8125 22.3877V14.75C24.813 14.6024 24.7842 14.4563 24.7278 14.3199C24.6715 14.1835 24.5886 14.0597 24.4842 13.9555ZM19.75 19.8125H18.0625V21.5C18.0625 21.6492 18.0033 21.7923 17.8978 21.8977C17.7923 22.0032 17.6492 22.0625 17.5 22.0625C17.3508 22.0625 17.2078 22.0032 17.1023 21.8977C16.9968 21.7923 16.9375 21.6492 16.9375 21.5V19.8125H15.25C15.1008 19.8125 14.9578 19.7532 14.8523 19.6477C14.7468 19.5423 14.6875 19.3992 14.6875 19.25C14.6875 19.1008 14.7468 18.9577 14.8523 18.8523C14.9578 18.7468 15.1008 18.6875 15.25 18.6875H16.9375V17C16.9375 16.8508 16.9968 16.7077 17.1023 16.6023C17.2078 16.4968 17.3508 16.4375 17.5 16.4375C17.6492 16.4375 17.7923 16.4968 17.8978 16.6023C18.0033 16.7077 18.0625 16.8508 18.0625 17V18.6875H19.75C19.8992 18.6875 20.0423 18.7468 20.1478 18.8523C20.2533 18.9577 20.3125 19.1008 20.3125 19.25C20.3125 19.3992 20.2533 19.5423 20.1478 19.6477C20.0423 19.7532 19.8992 19.8125 19.75 19.8125ZM20.3125 13.625H14.6875V13.0625C14.6875 12.3166 14.9838 11.6012 15.5113 11.0738C16.0387 10.5463 16.7541 10.25 17.5 10.25C18.2459 10.25 18.9613 10.5463 19.4888 11.0738C20.0162 11.6012 20.3125 12.3166 20.3125 13.0625V13.625Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Bag />
      </div>
    </>
  );
};

export default Home;
