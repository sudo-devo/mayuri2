import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Types() {
  const [datas, setDatas] = useState([]);
  const [curPage, setCurPage] = useState(`https://pokeapi.co/api/v2/type`);
  const nav = useNavigate();

  useEffect(() => {
    axios.get(curPage).then((res) => {
      setDatas(res.data.results);
    });
  }, [curPage]);

  console.log("dssa", datas);

  const GoToDetail = async (ele, ind) => {
    let res = await axios.get(ele);
    localStorage.setItem("Types", JSON.stringify(res.data));
    nav(`/types/${ind}`);
    console.log(res.data);
  };

  return (
    <>
      <Navbar />
      <div className="pokemon">
        {datas &&
          datas.map((ele, ind) => (
            <div
              key={ind}
              className="pok-div"
              onClick={() => GoToDetail(ele.url, ind + 1)}
            >
              <p>{ele.name}</p>
              <p># {ind + 1}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default Types;
