import {
  Button,
  Card,
  CardBody,
  Heading,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";

function UserDash() {
  const [data, setData] = useState("");
  const [input, setInput] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [post, setPost] = useState(4);

  const fetchData = () => {
    fetch("https://mock-api-xfgb.onrender.com/companies")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const lastIndex = currentPage * post;
  const firstPost = lastIndex - post;
  const currentPost = data.slice(firstPost, lastIndex);

  const getData = (ele) => {
    const payload = {
      ...ele,
      Quantity: input,
    };
    if (input > 0) {
      axios("https://mock-api-xfgb.onrender.com/stockuser", {
        method: "POST",
        data: payload,
      });
    }

    console.log("Quantity", payload);
  };

  const filterData = (e) => {
    let cat = e.target.value;
    console.log(cat);

    let filterData = data.filter((ele) => {
      return ele.company_type === cat;
    });

    setData(filterData);
  };

  const sortData = (e) => {
    const value = e.target.value;
    fetch(
      `https://mock-api-xfgb.onrender.com/companies?_sort=price_action&_order=${value}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));

    console.log(value);
  };

  return (
    <>
      <Select placeholder="Filter By Company" onChange={filterData} width="20%">
        <option>Bank</option>
        <option>IT</option>
        <option>Automobile</option>
        <option>Pharma</option>
        <option>Oil</option>
      </Select>

      <Select placeholder="Sort By Price" onChange={sortData} width="20%">
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>

      <Link to="/portfolio">
        <Button>Portfolio</Button>
      </Link>
      {data &&
        currentPost.map((ele) => (
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            mt={20}
          >
            <img
              objectFit="cover"
              width="30%"
              src={ele.company_logo}
              alt={ele.company_name}
            />

            <Stack>
              <CardBody>
                <Heading size="md">Company Name : {ele.company_name}</Heading>

                <Text py="2">Company Type : {ele.company_type}</Text>
                <Text py="2">Stock Exchange : {ele.stock_exchange}</Text>
                <Text py="2">Cost Per Share : {ele.cost_per_share}</Text>
                <Text py="2">Price Action: {ele.price_action}</Text>
                <Input
                  placeholder="Enter Quantity"
                  onChange={(e) => setInput(e.target.value)}
                />
                <Button mt={5} onClick={() => getData(ele)}>
                  Buy
                </Button>
              </CardBody>
            </Stack>
          </Card>
        ))}

      <Pagination
        totalPost={data.length}
        post={post}
        setCurPage={setCurrentPage}
      />
    </>
  );
}

export default UserDash;
