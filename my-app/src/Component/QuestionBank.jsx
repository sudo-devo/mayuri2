import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./quiz.css";
import { getdata } from "../Redux/AppReducer/action";

function QuestionBank() {
  //   const [data, setData] = useState("");
  const [curQus, setCurQus] = useState(0);
  const [count, setCount] = useState(0);
  const [select, setSelect] = useState("");
  const querry = JSON.parse(localStorage.getItem("querry"));
  const nav = useNavigate();
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const data = useSelector((state) => state.reducer.tasks);

  console.log(data);

  console.log(querry[0].number);

  //   const fetchData = () => {
  //     fetch(
  //       `https://opentdb.com/api.php?amount=${querry[0].number}&category=${querry[0].category}&difficulty=${querry[0].difficulty}&type=multiple`
  //     )
  //       .then((res) => res.json())
  //       .then((json) => setData(json.results))
  //       .catch((err) => console.log(err));
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  useEffect(() => {
    dispatch(getdata());
  }, []);

  const handleClick = (v) => {
    setCurQus(curQus + v);
    score();
  };

  const score = () => {
    if (select === data[curQus].correct_answer) {
      setCount((count) => count + 1);
    }
  };
  const arr = [];
  const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  //   const
  const handleSubmit = () => {
    const payload = {
      name: querry[0].name,
      total_que: data.length,
      count: count,
    };
    arr.push(payload);
    leaderboard.push(payload);

    localStorage.setItem("res", JSON.stringify(arr));
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    nav("/results");
  };

  console.log("Data", data.length > 0 ? data[0].question : "Lol");
  return (
    <div className="quiz">
      <div className="q-div">
        <div className="qu-div">
          <p>
            {curQus + 1}. {data.length > 0 && data[curQus].question}
          </p>
        </div>
        <div className="op-div">
          {data.length &&
            data[curQus].incorrect_answers.map((ele) => (
              <button className="ans" onClick={() => setSelect(ele)}>
                {ele}
              </button>
            ))}
          <button
            className="ans"
            onClick={() => setSelect(data[curQus].correct_answer)}
          >
            {data.length && data[curQus].correct_answer}
          </button>
        </div>

        <div className="next-prev">
          <button
            onClick={() => handleClick(-1)}
            disabled={curQus < 1 ? true : false}
          >
            Prev
          </button>
          <button
            onClick={() =>
              curQus + 1 === data.length ? handleSubmit() : handleClick(1)
            }
          >
            {curQus + 1 === data.length ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionBank;
