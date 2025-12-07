import moment from 'moment/moment'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function List({dsPhim}) {
// console.log("LIST",dsPhim)
    return (
    <div style={{height:400}} className='space-y-2 overflow-y-scroll'>{dsPhim.map((phim)=>{
        return (
            <>
            <div  className='flex space-x-5 jssa09'>
            <img className='w-32 h-40 object-cover' src={phim.hinhAnh} alt="" />
            <div>
            <h2 className=' jssa00'>{phim.tenPhim}</h2>
            <div className='grid grid-cols-3 gap-5 '>{phim.lstLichChieuTheoPhim.map((item)=>{    
                console.log('item: ', item);
                return <>


                <NavLink to = {`/chitietphongve/${item.maLichChieu}`} >

                <span className='border-2  time-movie'>{moment(item.ngayChieuGioChieu).format("DD/mm/yyyy~hh:mm")}</span>

                </NavLink>
               
                </>
            })}</div>
            </div>
            </div>
            </>
        )
    })}</div>
  )
}
