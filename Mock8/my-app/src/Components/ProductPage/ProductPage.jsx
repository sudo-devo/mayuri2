import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../Pages/Pagination";
import { getTask } from "../../Reducers/action";
import "./ProductPage.css";
import { useNavigate } from "react-router-dom";

function ProductPage() {
  const dispatch = useDispatch();
  const product = useSelector((store) => store.products.data);
  const [myProd, setProd] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTask());
    setProd(product);
  }, [product, dispatch]);

  const handleFilter = (e) => {
    const value = e.target.value;
    let filterData = product.filter((ele) => {
      return ele.category === value;
    });

    setProd(filterData);
  };

  const handleSort = (e) => {
    const value = e.target.value;
    dispatch(getTask(value));
  };

  const navToSinglePage = (id) => {
    navigate(`/product/${id}`);
  };

  console.log("myProd", myProd);
  return (
    <>
      <select name="" id="" onChange={handleFilter}>
        <option value="">Filter By Category</option>
        <option value="kids">Kids</option>
        <option value="women">Women</option>
        <option value="homedecor">Homedecor</option>
      </select>

      <select name="" id="" onChange={handleSort}>
        <option value="">Sort By Price</option>
        <option value="asc">High To Low</option>
        <option value="women">Low To High</option>
      </select>
      <div className="products-div">
        {myProd &&
          myProd.map((ele) => (
            <div
              className="mini-product"
              onClick={() => navToSinglePage(ele.id)}
            >
              <img src={ele.image} alt="" />
              <h2>{ele.title}</h2>
              <h4>{ele.brand}</h4>
              <h4>{ele.category}</h4>
              <h4>${ele.price}</h4>
            </div>
          ))}
      </div>

      {/* <Pagination
        totalPost={product.length}
        post={post}
        setCurPage={setCurrentPage}
      /> */}
    </>
  );
}

export default ProductPage;
