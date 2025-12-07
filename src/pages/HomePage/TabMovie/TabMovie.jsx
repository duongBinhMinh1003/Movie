import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react'
import { https } from '../../../service/api'
import List from './List';

export default function TabMovie() {
    const [dsHeThongRap,setDsHeThongRap] = useState([]);
    console.log('dsHeThongRap: ', dsHeThongRap);
    
    
    
    
    
    
    
    useEffect(()=>{
        https
        .get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`)
        .then((res) =>  {
                // console.log(res);
                setDsHeThongRap(res.data.content)
              })
              .catch(function(err)  {
                console.log(err);
              });
    },[])
    const onChange = (key) => {
        // console.log(key);
      };
      
    //   const items = [
    //     {
    //       key: '1',
    //       label: 'Tab 1',
    //       children: 'Content of Tab Pane 1',
    //     },
       
    //   ];
    const items = dsHeThongRap.map((heThongRap)=>{
        return {
            key : heThongRap.maHeThongRap,
            label: <img className='w-16' src={heThongRap.logo} alt="" />,
            children:<Tabs style={{ height: 400 }}  tabPosition='left' items={heThongRap.lstCumRap.map((cumRap)=>{
                return {
                    key:cumRap.maCumRap,
                    label:<div className='text-left w-64 truncate'><h2 className='font-medium'> {cumRap.tenCumRap} </h2>
                                <p>{cumRap.diaChi}</p>
                    </div>,
                    children:<List dsPhim={cumRap.danhSachPhim}></List>,
                }
            })}  ></Tabs>,
        }
    })
  return (
    <div className='flex justify-center items-center  grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5'>
         <Tabs   style={{ height: 400 }} tabPosition='left' defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}







