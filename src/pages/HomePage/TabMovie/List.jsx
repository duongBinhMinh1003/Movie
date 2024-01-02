import moment from 'moment/moment'
import React from 'react'

export default function List({dsPhim}) {
console.log("LIST",dsPhim)
    return (
    <div style={{height:600}} className='space-y-5 overflow-y-scroll'>{dsPhim.map((phim)=>{
        return (
            <>
            <div  className='flex space-x-5'>
            <img className='w-40 h-48 object-cover' src={phim.hinhAnh} alt="" />
            <div>
            <h2 className='font-medium'>{phim.tenPhim}</h2>
            <div className='grid grid-cols-3 gap-5'>{phim.lstLichChieuTheoPhim.map((item)=>{    
                return <span>{moment(item.ngayChieuGioChieu).format("DD/mm/yyyy hh:mm")}</span>
            })}</div>
            </div>
            </div>
            </>
        )
    })}</div>
  )
}
