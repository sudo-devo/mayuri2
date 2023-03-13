import React from "react";

function Pagination({ nextPagimation, prevPagimation }) {
  return (
    <div>
      <button onClick={prevPagimation}>Prev</button>
      <button onClick={nextPagimation}>Next</button>
    </div>
  );
}

export default Pagination;
