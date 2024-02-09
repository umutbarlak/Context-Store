import React from "react";

const BasketItem = ({ item, addToBasket, removeFromBasket }) => {
  return (
    <div className=" d-flex align-items-center gap-4 ">
      <div className="rounded bg-white text-black">
        <img
          className="object-fit-contain"
          width={100}
          height={100}
          src={item.image}
          alt=""
        />
      </div>

      <div className="basket-card-wrapper d-md-flex items align-content-center align-align-items-center  w-100 gap-1 justify-content-md-between">
        <h3 className="">{item.title.slice(0, 40) + "..."}</h3>

        <div className="basket-info d-flex align-items-center justify-content-between   gap-4">
          <span className="fs-4 text-nowrap text-success">{item.price} $</span>
          <div className="d-flex align-items-center gap-4">
            <span className="text-nowrap fs-5 text-light">
              Miktar: {item.amount}
            </span>
            <div className="d-flex gap-2">
              <button
                onClick={() => removeFromBasket(item.id)}
                className="btn btn-danger"
              >
                -
              </button>
              <button
                onClick={() => addToBasket(item)}
                className="btn btn-success"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
