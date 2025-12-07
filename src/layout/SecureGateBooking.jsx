import React, { Children } from 'react'

export default function SecureGateBooking({children}) {
    let user =JSON.parse(localStorage.getItem("USER_INFO"))
    console.log('user: ', user);
    
    if (!user) {
        window.location.href = "/login";
      }
     
        
        return children
      
    
   
}
