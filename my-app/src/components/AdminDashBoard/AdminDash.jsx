// - Company Logo
// - Company Name
// - Company Type ( should be a **select tag** with Bank, IT, Automobile, Pharma, and Oil as options)
// - Stock Exchange (should be a **select tag** with NSE and BSE as options)
// - Total Shares
// - Cost Per Share
// - Price Action
// - List Stock Button
// - When admin submits the form, post data to JSON server on route “**/companies**” (POST request)

import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import axios from "axios";

function AdminDash() {
  const [logo, setLogo] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [stock, setStock] = useState("");
  const [shares, setShares] = useState("");
  const [cost, setCost] = useState("");
  const [price, setPrice] = useState("");
  const [data, setData] = useState("");

  const handleClick = () => {
    let payload = {
      company_logo: logo,
      company_name: name,
      company_type: type,
      stock_exchange: stock,
      total_shares: shares,
      cost_per_share: cost,
      price_action: price,
    };

    axios({
      method: "POST",
      url: "https://mock-api-xfgb.onrender.com/companies",
      data: payload,
    })
      .then((res) => {
        alert("Stock added Succefully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchData = () => {
    fetch("https://mock-api-xfgb.onrender.com/companies")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  const DeleteStock = (id) => {
    fetch(`https://mock-api-xfgb.onrender.com/companies/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => fetchData())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <FormControl w={"40%"} m="auto">
        <FormLabel mt={"20px"}>Company Logo</FormLabel>
        <Input type="text" onChange={(e) => setLogo(e.target.value)} />

        <FormLabel mt={"20px"}>Company Name</FormLabel>
        <Input type="text" onChange={(e) => setName(e.target.value)} />

        <FormLabel mt={"20px"}>Company Type</FormLabel>
        <Select
          placeholder="Select Company"
          onChange={(e) => setType(e.target.value)}
        >
          <option>Bank</option>
          <option>It</option>
          <option>Automobile</option>
          <option>Pharma</option>
          <option>Oil</option>
        </Select>

        <FormLabel mt={"20px"}>Stock Exchange</FormLabel>
        <Select
          placeholder="Select Stock"
          onChange={(e) => setStock(e.target.value)}
        >
          <option>NSE</option>
          <option>BSE</option>
        </Select>

        <FormLabel mt={"20px"}>Total Share</FormLabel>
        <Input type="text" onChange={(e) => setShares(e.target.value)} />

        <FormLabel mt={"20px"}>Cost Per Share</FormLabel>
        <Input type="text" onChange={(e) => setCost(e.target.value)} />

        <FormLabel mt={"20px"}>Price Action</FormLabel>
        <Input type="text" onChange={(e) => setPrice(e.target.value)} />

        <Button mt={"20px"} onClick={handleClick}>
          List Stock Button
        </Button>
      </FormControl>
      {/* JCHHCHCHCC */}

      <TableContainer mt={30} width="100%" m={"auto"}>
        <Table variant="striped" colorScheme="teal">
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <Tr>
              <Th>Company logo</Th>
              <Th>Company name</Th>
              <Th>Company Type</Th>
              <Th>Stock Exchange</Th>
              <Th>Total shares</Th>
              <Th>Cost per share</Th>
              <Th>Price action</Th>
              <Th>Edit Stock </Th>
              <Th>Delete Stock </Th>
            </Tr>
          </Thead>

          {data &&
            data.map((ele) => (
              <Tbody>
                <Tr>
                  <Td>
                    <img src={ele.company_logo} alt="" />
                  </Td>
                  <Td>{ele.company_name}</Td>
                  <Td>{ele.company_type}</Td>
                  <Td>{ele.stock_exchange}</Td>
                  <Td>{ele.total_shares}</Td>
                  <Td>{ele.cost_per_share}</Td>
                  <Td>{ele.price_action}</Td>
                  <Td>Edit Stock</Td>
                  <Td onClick={() => DeleteStock(ele.id)}>Delete Stock</Td>
                </Tr>
              </Tbody>
            ))}
        </Table>
      </TableContainer>
    </>
  );
}

export default AdminDash;
