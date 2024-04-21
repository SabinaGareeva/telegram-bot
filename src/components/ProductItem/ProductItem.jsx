import React from "react";
import css from "./ProductItem.module.css";
import Button from "../Button/Button";
const ProductItem = ({product,
  // className,
  onAdd}) => {
    const onAddHandler=()=>{
        onAdd(product)
    }
  return (
    <div className={css.product}>
      <div className={css.img}></div>
      <div className={css.title}>{product.title}</div>
      <div className={css.description}>{product.description}</div>
      <div className={css.price}>
        <span>
          Стоимость:<b>{product.price}</b>
        </span>
      </div>
      <Button className={css.addBtn} onClick={onAddHandler}>Добавить в корзину</Button>
    </div>
  );
};
export default ProductItem;
