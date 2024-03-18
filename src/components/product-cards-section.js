import React, { useEffect, useState } from "react";
import ProductCard from "./product-card";
import { Button, Col, Row } from "antd";
import axios from "axios";

function ProductCardsSection() {
  const [allBlogs, setAllBlogs] = useState([]);
  const [blogsList, setBlogList] = useState([]);
  const getBlogList = async () => {
    const res = await axios.get(
      "https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/"
    );
    if (res.data) {
      setAllBlogs([...res.data]);
      if (res.data.length > 6) {
        setBlogList(res.data.slice(0, 6));
      } else {
        setBlogList([...res.data]);
      }
    }
  };

  useEffect(() => {
    getBlogList();
  }, []);

  const learnMoreHandler = () => {
    setBlogList([...allBlogs]);
  };
  return (
    <>
      <div className="container mx-auto my-0 bg-white">
        <Row className="py-[80px]">
          {blogsList?.map((item) => {
            return (
              <Col xs={24} md={12} lg={6} xl={8}>
                <ProductCard  data={item}/>
              </Col>
            );
          })}
        </Row>
        <div className="text-center">
          <Button
            onClick={learnMoreHandler}
            size="large"
            className="bg-black px-3 text-white"
          >
            learn more
          </Button>
        </div>
      </div>
    </>
  );
}

export default ProductCardsSection;
