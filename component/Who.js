import React from 'react'
import style from '../styles/who.module.css'
import Image from 'next/image'
import Help from './Help'
function Who() {
  return (
    <div>
      <h1 style={{color:"rgb(46, 46, 73)", fontSize:"40px", textAlign:"center",padding:"40px"}}>Who We Are</h1>

      <div className={style.container}>
             <div className={style.header}>
                 <div className={style.main}>
                    <div>
                      <Image
                      priority
                      width={100}
                      height={100}
                      src="/digital.png"
                      />
                    </div>
                    <h1>Digital</h1>
                    <h4>Book from anywhere</h4>
                 </div>
                 <p>Dropless is a fully digital service that allows you to easily schedule, manage and pay
                   for a car wash or valet in seconds (Mobile Body Repair and Mechanics coming soon!). 
                  Simply register, book your wash and leave the rest to us..</p>
                <button>READ MORE</button>
             </div>

             <div className={style.header1}>
                 <div className={style.main1}>
                   <div>
                   <Image
                      priority
                      width={100}
                      height={100}
                      src="/Artboard3.png"/>
                   </div>
                    <h1>Sustainable</h1>
                    <h4>Saving over 150 litres of water</h4>
                 </div>
                 <p>Our eco-friendly sustainable nano solutions help us save over 150 litres each wash.
                   Our eco nano solutions 
                  break down and encapsulate dirt that we safely remove from any surface.</p>
                <button>READ MORE</button>
             </div>

             <div className={style.header2}>
                 <div className={style.main2}>
                    <div>
                    <Image
                      priority
                      width={100}
                      height={100}
                      src="/mobile.png"/>
                    </div>
                    <h1>Mobile</h1>
                    <h4>We come to you</h4>
                 </div>
                 <p>We deliver car washing and servicing to our customers' door. Simply let 
                  us know your car location and a Dropless 
                  operative will arrive in one of our branded vans or electric mopeds.</p>
                <button>READ MORE</button>
             </div>

        </div>
   <Help/>
    </div>
  )
}

export default Who