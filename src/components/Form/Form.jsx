import React, { useEffect, useState } from "react";
import css from "./Form.module.css";
import { useTelegram } from "../../hooks/useTelegram";
const Form = () => {
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [subject, setSubject] = useState("");
  const { tg } = useTelegram();
  useEffect(() => {
    tg.MainButton.setParams({
      text: "Отправить данные",
    });
  }, []);
  useEffect(() => {
    if (!country || !street) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, street]);
  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };
  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };
  return (
    <div className={css.form}>
      <h3>Введите ваши данные</h3>
      <input
        type="text"
        className={css.input}
        placeholder="Страна"
        value={country}
        onChange={onChangeCountry}
      />
      <input
        type="text"
        className={css.input}
        placeholder="Улица"
        value={street}
        onChange={onChangeStreet}
      />
      <select className={css.select} onChange={onChangeSubject}>
        <option value="physical">Физ.лицо</option>
        <option value="legal">Юр.лицо</option>
      </select>
    </div>
  );
};
export default Form;
