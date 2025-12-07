import React from 'react'
import Banner from './Banner/Banner'
import ListMovie from './ListMovie'
import TabMovie from './TabMovie/TabMovie'

export default function HomePage() {
  return (
    <>
      <div className='m-0' >
      <Banner></Banner>
      </div>
      
      
      <div className='home-title'>
        <h2></h2>
      </div>
    
      <ListMovie></ListMovie>
<div class="MuiContainer-root jss2004 MuiContainer-maxWidthMd " id="cumRap"></div>
      <TabMovie>
      </TabMovie>
      
     
    
    </>
  )
}
