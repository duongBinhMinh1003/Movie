import { Radio, Rate, Tabs } from 'antd'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../../component/Spinner/Spinner'
import { https } from '../../service/api'
import TabMovieDetail from './TabMovie/TabMovieDetail'


export default function DetailPage() {
  let [detail,setDetail]=useState({})
  console.log('detail: ', detail);
  // let [isLoading,setIsLoading] = useState(false);
    let {maPhim} = useParams()
    
    
    
    useEffect(()=>{
      // setIsLoading(true);
    https
    .get(`api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
    .then((res) => {
          //  setIsLoading(false)
         
          setDetail(res.data.content)
          })
          .catch(function(err)  {
            // setIsLoading(false)
            console.log(err);
          });
  },[])
  return (
    <>
    <div className='bg-detail'>

  
    <div style={{width:"56%"}} className="container flex items-center space-x-5 text-white ">
     {/* {isLoading && <Spinner />} */}
      <img className="w-52 h-80 shadow-lg shadow-red-500 " src={detail?.hinhAnh} alt="" />
      <div className='space-y-5'>
      <span className=''>
      {moment(detail?.ngayChieuGioChieu).format("DD.MM.yyyy")}
    </span>
      <h1 className='text-3xl font-medium'>{detail?.tenPhim}</h1>
      {/* rating antd */}
      <div>
        
      <Rate disabled value={detail?.danhGia / 2} allowHalf style={{color:"#fb4226"}} />

      </div>
      
      </div>
    </div>
    {/* Tabs */}
    <div className='flex justify-center'>

    <div className='bg-white tab-detail'>
    <TabMovieDetail maphimm={maPhim}></TabMovieDetail>

    </div>
    </div>
    
    </div>
    </>
  );
}
