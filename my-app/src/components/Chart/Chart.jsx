import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Pie } from "react-chartjs-2";

function Chart() {
  const [data, setData] = useState("");
  const fetchData = () => {
    fetch("https://mock-api-xfgb.onrender.com/stockuser")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const DATA_COUNT = 5;
  const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

  return (
    <>
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
              <Th>Quantity</Th>
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
                  <Td>{ele.Quantity}</Td>
                </Tr>
              </Tbody>
            ))}
        </Table>
      </TableContainer>
    </>
  );
}

export default Chart;
