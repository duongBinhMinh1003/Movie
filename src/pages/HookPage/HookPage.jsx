import { Button } from 'antd'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Footer from './Footer'

export default function HookPage() {
    let scoreArr = [1,1]
    const[number,setNumber] = useState(1)
    const[like,setlike] = useState(1)
    useEffect(()=>{

    },[])
    console.log("cha render")
    const handlePlus = () => {
        setNumber(number+1)
    }
     
    const handleLike = useCallback(() => { 
        setlike(like+1)
     },[like])
     let total = useMemo(() => {
        return scoreArr.reduce((sum, num) => {
          console.log("tính nè");
          return (sum = sum + num);
        });
      }, []);
     
   
   
     
  return (
    <div>
        <h1>total :{total}</h1>
        <h1>{number}</h1>
        <Button className='bg-blue-500' type='primary' onClick={handlePlus}>Plus number</Button>
        <strong>{like}</strong>
        <Button className='bg-red-500' type='primary' onClick={handleLike}>Plus like</Button>
        <Footer handlePlusLike = {handleLike} like = {like}></Footer>
    </div>
  )
}
