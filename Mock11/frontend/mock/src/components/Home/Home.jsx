import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./home.css";

function Home() {
  const [datas, setDatas] = useState("");
  const local = JSON.parse(localStorage.getItem("token"));
  console.log(local[0].email);
  const [filters, setFilterData] = useState("");
  const navigate = useNavigate();

  const fetData = () => {
    fetch("https://fancy-parka-yak.cyclic.app/profile/getprofile")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
        const filterData = datas.filter((ele) => ele.email === local[0].email);
        setFilterData(filterData);
      });
  };

  useEffect(() => {
    fetData();
  }, []);

  console.log("filter", filters);
  console.log(datas);

  const handleClick = (id) => {
    navigate(`/edit/:${id}`);
  };

  return (
    <>
      <Navbar />
      <div className="homepage">
        <div className="edit-profile">
          <div>
            <h3>Profile</h3>
            <p>Some info may be visible to other peoples.</p>
          </div>

          <div>
            <button onClick={() => handleClick(filters.id)}>Edit</button>
          </div>
        </div>

        <div className="profile-all">
          <div className="photo">
            <p>Photo</p>
            {filters.profilePicture === undefined ? (
              <p>Please Add A pic</p>
            ) : (
              <img src={filters.profilePicture} alt="lo" />
            )}
          </div>

          <div className="name">
            <p>Name</p>
            {filters.name === undefined ? (
              <p>Please Add A Name</p>
            ) : (
              <p>{filters.name}</p>
            )}
          </div>

          <div className="bio">
            <p>bio</p>
            {filters.bio === undefined ? (
              <p>Please Add A Bio</p>
            ) : (
              <p>{filters.bio}</p>
            )}
          </div>

          <div className="name">
            <p>Phone</p>
            {filters.phone === undefined ? (
              <p>Please Add A phone</p>
            ) : (
              <p>{filters.phone}</p>
            )}
          </div>

          <div className="name">
            <p>Email</p>
            <p>{local[0].email}</p>
          </div>

          <div className="name">
            <p>Password</p>
            <p>{local[0].password}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
