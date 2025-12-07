import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormLogin from './FormLogin'
import Lottie from "lottie-react";
import animateSrc from "./bgAnimate.json";
export default function LoginPage() {
  return (
   <div>
    <FormLogin  ></FormLogin>
    <div className='w-1/2'>
    <Lottie animationData={animateSrc} loop={true} ></Lottie>

    </div>
   </div>
  )
}
