import { Tabs } from 'antd';
import moment from 'moment';
import React, { Children, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { https } from '../../../service/api';

export default function TabMovieDetail({ maphimm }) {
  let [lichChieu, setLichChieu] = useState([]);
 

  useEffect(() => {
    https
      .get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=1329`)
      .then((res) => {
       
        setLichChieu(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


const onChange = (key) => {
  console.log(key);
};

const items = lichChieu.heThongRapChieu?.map((item)=>{
  return {
    key:item.maHeThongRap,
    label: <img className='w-16 ' src={item.logo} alt="" />,
    children:<Tabs style={{ height: 600 }}  tabPosition='left' defaultActiveKey="1" items={item.cumRapChieu.map((cumRapChieu)=>{
      return {
        key:cumRapChieu.maCumRap,
        label: <div >
          <div>

          <h1> {cumRapChieu.tenCumRap}</h1>
          </div>
          <div>

                      <img className='w-16' src={cumRapChieu.hinhAnh} alt="" />
          </div>
        
        </div>,
        children:
        <div style={{width:"100%"}}>
        <div style={{height:600 }} className='space-y-5 overflow-y-scroll ' >{cumRapChieu.lichChieuPhim.map((lichChieuPhim)=>{
          return <>
          <div className='jss342 w-32  '>
            <NavLink to = {`/chitietphongve/${lichChieuPhim.maLichChieu}`} className="jss880">
            <span className='jss882'>{moment(lichChieuPhim.ngayChieuGioChieu).format("DD/mm/yyyy~hh:mm")}</span> 


            </NavLink>
          </div>
            
                  </>
        })}</div>
        </div>
      }
    })} onChange={onChange} />
  }
})



  return <div><Tabs tabPosition='left' defaultActiveKey="1" items={items} onChange={onChange} /></div>;
}
