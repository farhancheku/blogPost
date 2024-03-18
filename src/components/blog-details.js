import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';

function BlogDetails() {
    const dispatch=useDispatch()
  let { id } = useParams();
  id = id.split("=")[1];

  const [blogDetail, setBlogDetail] = useState({});
  const getBlogDetail = async () => {
    const res = await axios.get(
      `https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/${id}`
    );
    if (res.data) {
        dispatch({
            type:"ADD_VIEW",
            payload:{
                id,

            }

        })
      setBlogDetail(res.data);
    }
  };

  useEffect(() => {
    if (id) getBlogDetail();
  }, [id]);
  const data = useSelector((state) => state.blogs);
  

  return (
    <>
      <div className="container mx-auto my-0 bg-white">
        <div className=" px-40 py-10">
          <div className="flex justify-between text-[#93919] py-4">
            <p>Posted on October 6th 2021</p>
            <p>{data?.allViews[blogDetail?.id]}</p>
          </div>
          <div className="font-bold text-[48px]">{blogDetail?.Title}</div>

          <div></div>
          <div></div>
        </div>
        <img className="w-full" src={blogDetail?.Image} alt="Blog" />
        <div className=" px-40 py-10">
          <div className="font-bold text-[48px]">{blogDetail?.Subtitle}</div>
          <p>
          {blogDetail?.Article}
          </p>
        </div>
      </div>
    </>
  );
}

export default BlogDetails;
