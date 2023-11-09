import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;

const Homepage = () => {

  const { data, isFethcing } = useGetCryptosQuery();

  console.log(data);

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrenies" value="5"></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value="5"></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value="5"></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volumne" value="5"></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value="5"></Statistic>
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
