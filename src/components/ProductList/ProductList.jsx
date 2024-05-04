import React, { useState,useCallback,useEffect } from "react";
import css from "./ProductList.module.css";
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";
const products = [
  {
    id: "1",
    title: "Джинсы",
    price: 5000,
    description: "Синего цвета,прямые",
  },
  {
    id: "2",
    title: "Куртка",
    price: 5000,
    description: "Розового цвета",
  },
  {
    id: "3",
    title: "Джинсы 2",
    price: 5000,
    description: "Синего цвета,прямые",
  },
  {
    id: "4",
    title: "Кофта",
    price: 1000,
    description: "Зеленого цвета,прямые",
  },
  {
    id: "5",
    title: "Шорты",
    price: 2000,
    description: "Коричневого цвета,прямые",
  },
];
const getTotalPrice = (items) => {
  return items.reduce((acc, item) => acc + item.price, 0);
};
const ProductList = () => {

  const [addedItems, setAddedItems] = useState([]);
  const { tg,queryId } = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
    products:addedItems,
    totalPrice: getTotalPrice(addedItems),
    queryId
    };
    fetch("http://localhost:3000",{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },body: JSON.stringify(data)
    })
    tg.sendData(JSON.stringify(data));
  }, []);
  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData]);

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find((item) => item.id === product.id);
    let newItems = [];
    if (alreadyAdded) {
      newItems = addedItems.filter((item) => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }
    setAddedItems(newItems);
    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({ text: `Купить ${getTotalPrice}` });
    }
  };
  return (
    <div className={css.list}>
      {products.map((item) => (
        <ProductItem key={item.id}
         product={item} onAdd={onAdd} 
        //  className={css.item}
          />
      ))}
      <a href="fantasy"> Ссылка на Fantasy</a>
    </div>
  );
};
export default ProductList;
