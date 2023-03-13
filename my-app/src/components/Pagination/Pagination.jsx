import { Button } from "@chakra-ui/react";
import React from "react";

function Pagination({ totalPost, post, setCurPage }) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / post); i++) {
    pages.push(i);
  }
  return (
    <div style={{ display: "flex", width: "auto", margin: "auto" }}>
      {pages.map((ele) => {
        return (
          <Button
            onClick={() => setCurPage(ele)}
            color="white"
            mt="20px"
            bgColor="red "
            ml="5px"
          >
            {ele}
          </Button>
        );
      })}
    </div>
  );
}

export default Pagination;
