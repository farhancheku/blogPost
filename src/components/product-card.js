import React from "react";
import { Card } from "antd";
import {  useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

function ProductCard({ data }) {
  const blogData = useSelector((state) => state.blogs);
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/blog/id=${data.id}`);
  };

  return (
    <Card onClick={onClickHandler} className="border-0 cursor-pointer">
      <img className="w-full" src={data.image} alt="Blog" />
      <div>
        <div className="flex justify-between text-[#93919] py-4">
          <Typography
            variant="paragraph"
          >
            Posted on October 6th 2021
          </Typography>
          <p>
            {blogData?.allViews[data?.id] ? blogData?.allViews[data?.id] : 0}
          </p>
        </div>
        <div className="font-bold text-[40px]">{data.Title}</div>
        <p>{data.Article}</p>
        <div></div>
      </div>
    </Card>
  );
}

export default ProductCard;
