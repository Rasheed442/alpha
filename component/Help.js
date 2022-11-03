import React from 'react'
import style from "../styles/help.module.css"
import Image from 'next/image'
function Help() {
  return (
    <>
    <h1 style={{color:"rgb(46, 46, 73)", fontSize:"40px", textAlign:"center", padding:"20px"}}>We help you save</h1>
    <div className={style.container}>
        <div className={style.image}>
           <Image
           src="/pip1.png"
           width={800}
           height={500}/>
        </div>
        <div className={style.main}>
            <p>01</p>
            <h2>Save time</h2>
            <h4>Hours of your precious time are wasted driving and queuing at your local car
                 wash or garage. It's time to value your time.</h4>
        </div>
    </div>

    <div className={style.container1}>
        <div className={style.main1}>
            <p>01</p>
            <h2>Save money</h2>
            <h4>Our competitive pricing, alongside our mobile approach, aims to save each of our customers money.</h4>
        </div>
        <div className={style.image}>
           <Image
           src="/pip2.png"
           width={800}
           height={500}/>
        </div>
    </div>

    <div className={style.container2}>
    <div className={style.image}>
           <Image
           src="/pip3.png"
           width={800}
           height={500}/>
        </div>
        <div className={style.main2}>
            <p>01</p>
            <h2>Save money</h2>
            <h4>Hours of your precious time are wasted driving and queuing at your local car
                 wash or garage. It's time to value your time.</h4>
        </div>
     
    </div>
    </>
  )
}

export default Help