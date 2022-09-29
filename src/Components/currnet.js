import React from 'react'
import './current.css'
export default function Currnet() {
  return (
    <div>
        <div className="container mt-5 d-flex justify-content-center">
       <div className="card p-4 mt-3">
          <div className="first d-flex justify-content-between align-items-center mb-3">
            <div className="info">
                <span className="d-block name">Thank you, Alex</span>
                <span className="order">Your Application Submitted Sucessfully</span>
                 
            </div>
           
             {/* <img src="https://i.imgur.com/NiAVkEw.png" width="40"/> */}
              

          </div>
              <div className="detail">
          <span className="d-block summery">We will contact you shortly.</span>
              </div>
          <hr />
          <div className="text">
        <span className="d-block new mb-1" >Alex Dorlew</span>
         </div>
        <span className="d-block address mb-3">672 Conaway Street Bryantiville Massachusetts 02327</span>
          <div className="  money d-flex flex-row mt-2 align-items-center">
            <img src="https://i.imgur.com/ppwgjMU.png" width="20" />
        
            <span className="ml-2">Contact Us</span> 

               </div>
               <div className="last d-flex align-items-center mt-3">
                <span className="address-line">CHANGE DETAILS</span>

               </div>
        </div>
    </div>
    </div>
  )
}
