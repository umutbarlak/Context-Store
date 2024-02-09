import React, { useContext } from "react";
import { BasketContext } from "../context/BasketContext";

const Card = ({ product }) => {
  const { addToBasket } = useContext(BasketContext);
  return (
    <div style={{ width: "250px" }} className="card p-2 ">
      <div className="d-flex  justify-content-center">
        <img
          className="object-fit-contain shadow rounded p-4"
          style={{ height: "300px", width: "200px" }}
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="card-body d-flex flex-column gap-1">
        <h6 className="text-truncate">{product.title}</h6>
        <span>{product.price} $</span>
        <span>{product.category}</span>
        <button
          onClick={() => addToBasket(product)}
          className="btn bg-dark mt-1 text-white w-100"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
