import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import ProductList from "./components/ProductList/ProductList";
import Fantasy from "../src/pages/Fantasy/Fantasy";
import HistoricalFiction from "./pages/HistoricalFiction.jsx/HistoricalFiction";
import Horror from "./pages/Horror/Horror";
import Literature from "./pages/Literature/Literature";
import Poetry from "./pages/Poetry/Poetry";
import Romance from "./pages/Romance/Romance";
import ScienceFiction from "./pages/ScienceFiction/ScienceFiction";
import Thriller from "./pages/Thriller/Thriller";
import SinglePage from "./pages/SinglePage/SinglePage";

function App() {
  const { tg, onToggleButton } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div
    // className="container"
    >
      <Header />
      <button onClick={onToggleButton}>Toggle</button>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path={"form"} element={<Form />} />
        <Route path={"fantasy"} element={<Fantasy />} />
        <Route path={"fantasy/:id"} element={<SinglePage />} />
        <Route path={"historical_fiction"} element={<HistoricalFiction />} />
        <Route path={"horror"} element={<Horror />} />
        <Route path={"literature"} element={<Literature />} />
        <Route path={"poetry"} element={<Poetry />} />
        <Route path={"romance"} element={<Romance />} />
        <Route path={"science_fiction"} element={<ScienceFiction />} />
        <Route path={"thriller"} element={<Thriller />} />
      </Routes>
    </div>
  );
}

export default App;
