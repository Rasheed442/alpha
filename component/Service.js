import React from 'react'
import style from '../styles/service.module.css'
import {GiAutoRepair} from 'react-icons/gi'
import {FaHandsWash,FaOilCan} from 'react-icons/fa'
import Who from './Who'
function Service() {
  return (
    <div>
        <h1 style={{color:"rgb(46, 46, 73)", fontSize:"40px", textAlign:"center"}}>Our Service</h1>

        <div className={style.container}>
             <div className={style.header}>
                 <div className={style.main}>
                    <div className={style.icon}>
                    <GiAutoRepair/>
                    </div>
                    <h1>Body Repair</h1>
                    <p>Mobile body repair to your door</p>
                 </div>
                 <p>Simply snap and send images for a quote in minutes. Then let our technician come to you, 
                with mobile scratch and dent repair that puts money and time back in your pocket.</p>
                <button>READ MORE</button>
             </div>

             <div className={style.header1}>
                 <div className={style.main1}>
                    <div className={style.icon1}>
                    <FaHandsWash/>
                    </div>
                    <h1>Wash & Detail</h1>
                    <p>Mobile body repair to your door</p>
                 </div>
                 <p>Simply sign up and book a service online in less than a minute! Sit back and a
                   fully trained Dropless Operative will visit your car
                   and provide a professional service giving your car a showroom shine..</p>
                <button>READ MORE</button>
             </div>

             <div className={style.header2}>
                 <div className={style.main2}>
                    <div className={style.icon2}>
                    <FaOilCan/>
                    </div>
                    <h1>Mobile Mechanics</h1>
                    <p>Mobile body repair to your door</p>
                 </div>
                 <p>From routine maintenance to diagnostics and repairs, our mobile mechanic
                   team will keep your car healthy on the road! All 
                  our mechanics are fully trained, vetted and insured by AXA..</p>
                <button>READ MORE</button>
             </div>

        </div>
       <Who/>
    </div>
  )
}

export default Service