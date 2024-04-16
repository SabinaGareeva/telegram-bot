import React from "react";
const Form = () => {
  return (
    <div className="form">
      <h3>Введите ваши данные</h3>
      <input type="text" className="input" placeholder="Страна" />
      <input type="text" className="input" placeholder="Улица" />
      <select className="select">
        <option value="physical">Физ.лицо</option>
        <option value="legal">Юр.лицо</option>
      </select>
    </div>
  );
};
export default Form;
