import { Button } from 'antd';
import React, { memo } from 'react'

function Footer({like,handlePlusLike}) {
    console.log("con render")
  return (
    <div className='bg-red-500  p-5 '>
        <h2>Like:{like}</h2>
        <Button type='primary' className='bg-black' onClick={handlePlusLike}>Plus Like</Button>
    </div>
  )
}
export default memo(Footer);