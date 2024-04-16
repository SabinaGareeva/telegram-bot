import React from "react";
import css from "./Header.module.css";
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";
const Header = () => {
 
  const {  user, onClose } = useTelegram();
  return (
    <div className={css.header}>
      <Button onClick={onClose }>Закрыть</Button>
      <span className={css.username}>{user?.username}</span>
    </div>
  );
};
export default Header;
