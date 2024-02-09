import { createContext, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { toast } from "react-toastify";

export const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket", []);

  const addToBasket = (newProduct) => {
    const found = basket.find((i) => i.id === newProduct.id);

    if (found) {
      const uptated = { ...found, amount: found.amount + 1 };

      const newBasket = basket.map((item) =>
        item.id === uptated.id ? uptated : item
      );

      setBasket(newBasket);
      toast.info("Ürün miktarı arttırıldı");
    } else {
      setBasket([...basket, { ...newProduct, amount: 1 }]);
      toast.success("Ürün sepete eklendi");
    }
  };

  const removeFromBasket = (delete_id) => {
    const founded = basket.find((item) => item.id === delete_id);
    if (founded.amount > 1) {
      const uptated = { ...founded, amount: founded.amount - 1 };
      const newBasket = basket.map((i) => (i.id === uptated.id ? uptated : i));
      setBasket(newBasket);
      toast.info("Ürün miktarı azaltıldı");
    } else {
      const filtered = basket.filter((i) => i.id !== delete_id);
      setBasket(filtered);
      toast.error("Ürün sepeten kaldırıldı");
    }
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
}
