// Banner.js
import { Carousel } from 'antd';
import React, { useEffect, useState } from 'react';
import { https } from '../../../service/api';

export default function Banner() {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    https
      .get("/api/QuanLyPhim/LayDanhSachBanner")
      .then((res) => {
        setBanner(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="carousel-container grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
      <Carousel autoplay>
        {banner.map((item, index) => (
          <div key={index}>
            <img style={{width:"100%",height:"800px"}} className='object-fit-cover' src={item.hinhAnh} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
