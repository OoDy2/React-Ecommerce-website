import React from "react";
import { Link } from "react-router-dom";
import "./addpayment.css";

const Addpayment = () => {
  return (
    <>
      <div className="bg-white w-2/4 m-auto addaddress-content mt-24 mb-8">
        <h2 className="heading-payment pl-10 pt-10">Select a Card</h2>
        <div className="flex flex-col gap-6 py-7 px-8">
          <p className="flex items-center font-selectcard gap-4">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 25.625C9.5 26.3212 9.77656 26.9889 10.2688 27.4812C10.7611 27.9734 11.4288 28.25 12.125 28.25H27.875C28.5712 28.25 29.2389 27.9734 29.7312 27.4812C30.2234 26.9889 30.5 26.3212 30.5 25.625V18.4062H9.5V25.625ZM12.5938 22.0625C12.5938 21.6895 12.7419 21.3319 13.0056 21.0681C13.2694 20.8044 13.627 20.6562 14 20.6562H16.25C16.623 20.6562 16.9806 20.8044 17.2444 21.0681C17.5081 21.3319 17.6562 21.6895 17.6562 22.0625V23C17.6562 23.373 17.5081 23.7306 17.2444 23.9944C16.9806 24.2581 16.623 24.4062 16.25 24.4062H14C13.627 24.4062 13.2694 24.2581 13.0056 23.9944C12.7419 23.7306 12.5938 23.373 12.5938 23V22.0625ZM27.875 11.75H12.125C11.4288 11.75 10.7611 12.0266 10.2688 12.5188C9.77656 13.0111 9.5 13.6788 9.5 14.375V15.5938H30.5V14.375C30.5 13.6788 30.2234 13.0111 29.7312 12.5188C29.2389 12.0266 28.5712 11.75 27.875 11.75Z"
                fill="#1A1F16"
                fill-opacity="0.5"
              />
            </svg>
            MasterCard ending in 4242
          </p>
          <p className="flex items-center font-selectcard gap-4">
            <svg
              className="inline-block"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 25.625C9.5 26.3212 9.77656 26.9889 10.2688 27.4812C10.7611 27.9734 11.4288 28.25 12.125 28.25H27.875C28.5712 28.25 29.2389 27.9734 29.7312 27.4812C30.2234 26.9889 30.5 26.3212 30.5 25.625V18.4062H9.5V25.625ZM12.5938 22.0625C12.5938 21.6895 12.7419 21.3319 13.0056 21.0681C13.2694 20.8044 13.627 20.6562 14 20.6562H16.25C16.623 20.6562 16.9806 20.8044 17.2444 21.0681C17.5081 21.3319 17.6562 21.6895 17.6562 22.0625V23C17.6562 23.373 17.5081 23.7306 17.2444 23.9944C16.9806 24.2581 16.623 24.4062 16.25 24.4062H14C13.627 24.4062 13.2694 24.2581 13.0056 23.9944C12.7419 23.7306 12.5938 23.373 12.5938 23V22.0625ZM27.875 11.75H12.125C11.4288 11.75 10.7611 12.0266 10.2688 12.5188C9.77656 13.0111 9.5 13.6788 9.5 14.375V15.5938H30.5V14.375C30.5 13.6788 30.2234 13.0111 29.7312 12.5188C29.2389 12.0266 28.5712 11.75 27.875 11.75Z"
                fill="#1A1F16"
                fill-opacity="0.5"
              />
            </svg>
            VISA Debit ending in 2894
          </p>
        </div>
      </div>
      <div className="bg-white w-2/4 m-auto addaddress-content mb-24">
        <h2 className="heading-payment pl-10 pt-10">Add a new Card</h2>
        <div className="flex flex-col gap-8 py-10 px-12">
          <div className="flex flex-col gap-2">
            <label htmlFor="">Cardholder Name</label>
            <input type="text" placeholder="John Maker" className="py-4 px-6" />
          </div>
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="">Card Number</label>
            <svg
              className="svg-cardnumber"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M1.5 17.625C1.5 18.3212 1.77656 18.9889 2.26884 19.4812C2.76113 19.9734 3.42881 20.25 4.125 20.25H19.875C20.5712 20.25 21.2389 19.9734 21.7312 19.4812C22.2234 18.9889 22.5 18.3212 22.5 17.625V10.4062H1.5V17.625ZM4.59375 14.0625C4.59375 13.6895 4.74191 13.3319 5.00563 13.0681C5.26935 12.8044 5.62704 12.6562 6 12.6562H8.25C8.62296 12.6562 8.98065 12.8044 9.24437 13.0681C9.50809 13.3319 9.65625 13.6895 9.65625 14.0625V15C9.65625 15.373 9.50809 15.7306 9.24437 15.9944C8.98065 16.2581 8.62296 16.4062 8.25 16.4062H6C5.62704 16.4062 5.26935 16.2581 5.00563 15.9944C4.74191 15.7306 4.59375 15.373 4.59375 15V14.0625ZM19.875 3.75H4.125C3.42881 3.75 2.76113 4.02656 2.26884 4.51884C1.77656 5.01113 1.5 5.67881 1.5 6.375V7.59375H22.5V6.375C22.5 5.67881 22.2234 5.01113 21.7312 4.51884C21.2389 4.02656 20.5712 3.75 19.875 3.75Z"
                fill="#1A1F16"
                fill-opacity="0.5"
              />
            </svg>
            <input
              type="text"
              placeholder="5126-5987-2214-7621"
              className="py-4 pr-6 pl-14"
            />
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-2 w-1/3 relative">
              <label htmlFor="">Expiry Date</label>
              <svg
                className="svg-expiredate"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5 2.99999H18.75V2.27109C18.75 1.86749 18.4397 1.52109 18.0361 1.50093C17.9347 1.49604 17.8333 1.5118 17.7382 1.54724C17.6431 1.58267 17.5561 1.63706 17.4826 1.7071C17.4091 1.77713 17.3506 1.86136 17.3106 1.95468C17.2706 2.048 17.25 2.14847 17.25 2.24999V2.99999H6.75V2.27109C6.75 1.86749 6.43969 1.52109 6.03609 1.50093C5.93469 1.49604 5.83334 1.5118 5.7382 1.54724C5.64307 1.58267 5.55611 1.63706 5.48261 1.7071C5.40911 1.77713 5.3506 1.86136 5.31062 1.95468C5.27063 2.048 5.25001 2.14847 5.25 2.24999V2.99999H4.5C3.70435 2.99999 2.94129 3.31606 2.37868 3.87867C1.81607 4.44128 1.5 5.20434 1.5 5.99999V6.56249C1.5 6.61222 1.51975 6.65991 1.55492 6.69507C1.59008 6.73024 1.63777 6.74999 1.6875 6.74999H22.3125C22.3622 6.74999 22.4099 6.73024 22.4451 6.69507C22.4802 6.65991 22.5 6.61222 22.5 6.56249V5.99999C22.5 5.20434 22.1839 4.44128 21.6213 3.87867C21.0587 3.31606 20.2956 2.99999 19.5 2.99999ZM22.3125 8.24999H1.6875C1.63777 8.24999 1.59008 8.26975 1.55492 8.30491C1.51975 8.34007 1.5 8.38776 1.5 8.43749V19.5C1.5 20.2956 1.81607 21.0587 2.37868 21.6213C2.94129 22.1839 3.70435 22.5 4.5 22.5H19.5C20.2956 22.5 21.0587 22.1839 21.6213 21.6213C22.1839 21.0587 22.5 20.2956 22.5 19.5V8.43749C22.5 8.38776 22.4802 8.34007 22.4451 8.30491C22.4099 8.26975 22.3622 8.24999 22.3125 8.24999ZM11.2303 18.8016C10.6598 19.252 9.88266 19.5 9.04125 19.5C7.73484 19.5 6.76875 18.6487 6.33844 17.9203C6.23712 17.749 6.208 17.5444 6.25749 17.3517C6.30698 17.1589 6.43103 16.9937 6.60234 16.8923C6.77366 16.791 6.9782 16.7619 7.17099 16.8114C7.36377 16.8609 7.52899 16.9849 7.63031 17.1562C7.68094 17.2425 8.15297 18 9.04125 18C9.82219 18 10.7344 17.6583 10.7344 16.6959C10.7344 16.403 10.6772 15.9951 10.4062 15.7172C10.0059 15.3075 9.33984 15.1233 8.99484 15.1233C8.79593 15.1233 8.60517 15.0443 8.46451 14.9036C8.32386 14.7629 8.24484 14.5722 8.24484 14.3733C8.24484 14.1744 8.32386 13.9836 8.46451 13.8429C8.60517 13.7023 8.79593 13.6233 8.99484 13.6233C9.22219 13.6233 9.81094 13.5014 10.1798 13.1241C10.2796 13.0259 10.3584 12.9084 10.4114 12.7789C10.4643 12.6493 10.4903 12.5103 10.4878 12.3703C10.4878 11.2814 9.14578 11.25 8.99297 11.25C8.18016 11.25 7.87734 11.7473 7.86469 11.7684C7.81596 11.8558 7.75025 11.9325 7.67142 11.9941C7.5926 12.0557 7.50225 12.1009 7.40569 12.127C7.30914 12.1532 7.20833 12.1597 7.1092 12.1463C7.01007 12.1329 6.91462 12.0998 6.82847 12.049C6.74233 11.9981 6.66722 11.9306 6.60758 11.8503C6.54794 11.77 6.50496 11.6785 6.48118 11.5814C6.4574 11.4842 6.4533 11.3833 6.46912 11.2845C6.48493 11.1857 6.52035 11.0911 6.57328 11.0062C6.93141 10.3969 7.75547 9.74999 8.99297 9.74999C9.76359 9.74999 10.4817 9.97359 11.0147 10.3791C11.6423 10.8572 11.9878 11.5641 11.9878 12.3703C11.9899 12.7046 11.9258 13.0359 11.7992 13.3453C11.6725 13.6546 11.4859 13.9358 11.25 14.1726C11.1961 14.228 11.1394 14.2795 11.0817 14.3297C11.2225 14.4314 11.3546 14.5448 11.4764 14.6686C11.9714 15.1748 12.233 15.8756 12.233 16.6959C12.2344 17.5425 11.8777 18.2901 11.2303 18.8016ZM17.25 18.5625C17.25 18.7614 17.171 18.9522 17.0303 19.0928C16.8897 19.2335 16.6989 19.3125 16.5 19.3125C16.3011 19.3125 16.1103 19.2335 15.9697 19.0928C15.829 18.9522 15.75 18.7614 15.75 18.5625V12.0136L14.6948 12.7912C14.6156 12.8497 14.5255 12.892 14.4299 12.9157C14.3343 12.9394 14.2349 12.944 14.1375 12.9293C14.0401 12.9146 13.9465 12.8808 13.8622 12.83C13.7778 12.7791 13.7043 12.7121 13.6458 12.6328C13.5873 12.5535 13.545 12.4635 13.5213 12.3679C13.4976 12.2722 13.493 12.1729 13.5077 12.0755C13.5224 11.978 13.5562 11.8845 13.6071 11.8001C13.6579 11.7157 13.7249 11.6422 13.8042 11.5837L15.8395 10.0837C15.9684 9.98876 16.1243 9.93752 16.2844 9.93749H16.5C16.6989 9.93749 16.8897 10.0165 17.0303 10.1572C17.171 10.2978 17.25 10.4886 17.25 10.6875V18.5625Z"
                  fill="#1A1F16"
                  fill-opacity="0.5"
                />
              </svg>
              <input
                type="text"
                placeholder="MM / YYYY"
                className="py-4 pr-6 pl-14"
              />
            </div>
            <div className="flex flex-col gap-2 w-1/4">
              <label htmlFor="">CVC</label>
              <input type="text" placeholder="123" className="py-4 px-6" />
            </div>
          </div>
          <div className="flex items-center input-checkbox input-checkbox-addpayment gap-2">
            <input
              className="checkbox"
              type="checkbox"
              id="checkbox"
              hidden
              // checked='checked'
            />
            <label htmlFor="checkbox" className="checkbox-label flex flex-col">
              <div className="label-border"></div>
            </label>
            Save this as your default payment method
          </div>
          <button className="btn-bag btn-order-summary w-full justify-center flex gap-2 items-center">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 17.625C2 18.3212 2.27656 18.9889 2.76884 19.4812C3.26113 19.9734 3.92881 20.25 4.625 20.25H20.375C21.0712 20.25 21.7389 19.9734 22.2312 19.4812C22.7234 18.9889 23 18.3212 23 17.625V10.4062H2V17.625ZM5.09375 14.0625C5.09375 13.6895 5.24191 13.3319 5.50563 13.0681C5.76935 12.8044 6.12704 12.6562 6.5 12.6562H8.75C9.12296 12.6562 9.48065 12.8044 9.74437 13.0681C10.0081 13.3319 10.1562 13.6895 10.1562 14.0625V15C10.1562 15.373 10.0081 15.7306 9.74437 15.9944C9.48065 16.2581 9.12296 16.4062 8.75 16.4062H6.5C6.12704 16.4062 5.76935 16.2581 5.50563 15.9944C5.24191 15.7306 5.09375 15.373 5.09375 15V14.0625ZM20.375 3.75H4.625C3.92881 3.75 3.26113 4.02656 2.76884 4.51884C2.27656 5.01113 2 5.67881 2 6.375V7.59375H23V6.375C23 5.67881 22.7234 5.01113 22.2312 4.51884C21.7389 4.02656 21.0712 3.75 20.375 3.75V3.75Z"
                fill="white"
              />
            </svg>
            Add Payment Method
          </button>
          <div className="flex items-center justify-between">
            <Link to={"/checkout"}>
              <p className="addaddress-back"> back</p>
            </Link>
            <div className="secure-connection-text flex items-center gap-2">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.25 9.5H16.5V5.75C16.5 4.55653 16.0259 3.41193 15.182 2.56802C14.3381 1.72411 13.1935 1.25 12 1.25C10.8065 1.25 9.66193 1.72411 8.81802 2.56802C7.97411 3.41193 7.5 4.55653 7.5 5.75V9.5H6.75C5.95462 9.50087 5.19206 9.81722 4.62964 10.3796C4.06722 10.9421 3.75087 11.7046 3.75 12.5V20.75C3.75087 21.5454 4.06722 22.3079 4.62964 22.8704C5.19206 23.4328 5.95462 23.7491 6.75 23.75H17.25C18.0454 23.7491 18.8079 23.4328 19.3704 22.8704C19.9328 22.3079 20.2491 21.5454 20.25 20.75V12.5C20.2491 11.7046 19.9328 10.9421 19.3704 10.3796C18.8079 9.81722 18.0454 9.50087 17.25 9.5ZM15 9.5H9V5.75C9 4.95435 9.31607 4.19129 9.87868 3.62868C10.4413 3.06607 11.2044 2.75 12 2.75C12.7956 2.75 13.5587 3.06607 14.1213 3.62868C14.6839 4.19129 15 4.95435 15 5.75V9.5Z"
                  fill="#02D693"
                />
              </svg>
              Secure Connection
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addpayment;
