import { Rate } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../../component/Spinner/Spinner'
import { htpps } from '../../service/api'

export default function DetailPage() {
    let [detail,setDetail]=useState({})
    let [isLoading,setIsLoading] = useState(false);
  let {maPhim} = useParams()
  useEffect(()=>{
    setIsLoading(true);
    htpps
    .get(`api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
    .then((res) => {
           setIsLoading(false)
           console.log("data nè" , res.data)
            setDetail(res.data.content)
          })
          .catch(function(err)  {
            setIsLoading(false)
            console.log(err);
          });
  },[])
  return (
    <div className="container flex items-center space-x-5">
     {/* {isLoading && <Spinner />} */}
      <img className="w-64 h-96 shadow-lg shadow-red-600 " src={detail?.hinhAnh} alt="" />
      <div className='space-y-5'>
      <h1 className='text-3xl font-medium'>{detail?.tenPhim}</h1>
      <p>{detail?.moTa}</p>
      {/* rating antd */}
      <Rate value={detail?.danhGia / 2} allowHalf style={{color:"yellow"}} />
      </div>
    </div>
  );
}
