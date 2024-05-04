import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import ProductList from "./components/ProductList/ProductList";
import Fantasy from "../src/pages/Fantasy/Fantasy";

function App() {
  const { tg, onToggleButton } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div >
      <Header />
      <button onClick={onToggleButton}>Toggle</button>
      <Routes>
        <Route path='/' element={<ProductList />}/>
        <Route path={'form'} element={<Form />}/>
        <Route path={'fantasy'} element={<Fantasy />}/>
      </Routes>
    </div>
  );
}

export default App;
