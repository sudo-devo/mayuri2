import React, { useEffect, useState } from "react";
import "./Pokemon.css";
import Navbar from "./Navbar";
import axios from "axios";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";

function Pokemon() {
  const [datas, setDatas] = useState([]);
  const [curPage, setCurPage] = useState(`https://pokeapi.co/api/v2/pokemon`);
  const [nextPage, setNextPage] = useState();
  const [prevtPage, setPrevPage] = useState();
  const nav = useNavigate();

  useEffect(() => {
    axios.get(curPage).then((res) => {
      setNextPage(res.data.next);
      setPrevPage(res.data.previous);
      setDatas(res.data.results);
    });
  }, [curPage]);
  console.log(datas);

  const GoToDetail = async (ele) => {
    let res = await axios.get(ele.url);
    localStorage.setItem("Pokemon", JSON.stringify(res.data));
    nav(`/pokemon/${ele.name}`);
  };

  const nextPagimation = () => {
    setCurPage(nextPage);
  };

  const prevPagimation = () => {
    setCurPage(prevtPage);
  };

  return (
    <>
      <Navbar />
      <div className="pokemon">
        {datas &&
          datas.map((ele, ind) => (
            <div key={ind} className="pok-div" onClick={() => GoToDetail(ele)}>
              <p>{ele.name}</p>
              <p># {ind + 1}</p>
            </div>
          ))}
      </div>
      <Pagination
        nextPagimation={nextPagimation}
        prevPagimation={prevPagimation}
      />
    </>
  );
}

export default Pokemon;
