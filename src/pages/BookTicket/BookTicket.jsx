import React from 'react'
import { useParams } from 'react-router-dom'

export default function BookTicket() {

  let{maLichChieu} = useParams()
  console.log('maLichChieu: ', maLichChieu);
  return (
    <div>
      <div className="tickets flex flex-col md:flex-row">
        <div className="md:w-8/12">
          <SeatList seatList />
          <div className="btnList flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <div className="btnGroup flex items-center">
              <button className="btnDisable btnItem">X</button>
              <p>Đã đặt</p>
            </div>
            <div className="btnGroup flex items-center">
              <button className="btnItem"></button>
              <p>Thường</p>
            </div>
            <div className="btnGroup flex items-center">
              <button className="btnVip btnItem"></button>
              <p>Vip</p>
            </div>
          </div>
        </div>
        <div className="md:w-4/12">
          <DetailSeat infoCinema />
        </div>
      </div>


    </div>
  )
}
