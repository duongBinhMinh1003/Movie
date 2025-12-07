import React from 'react'
import HistoryBooking from './HistoryBooking'
import ProfileUser from './ProfileUser'

export default function ProfilePage() {
  return (
    <div className='bg-profile'>
      <div className='flex justify-center'>
      <div style={{width:"960px",padding:"16px"}} className='bg-white'>
        <ProfileUser></ProfileUser>

        </div>
      </div>
        
        <div>
        <HistoryBooking></HistoryBooking>

        </div>
    </div>
  )
}
