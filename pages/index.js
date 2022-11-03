import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Navbar from '../component/Navbar'
import Service from '../component/Service'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [change, setChange] = useState()
  const [change1, setChange1] = useState()
  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(true)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
         <Navbar/>
         <div className={styles.container}>
          <div className={styles.overlay}>
                <div className={styles.main}>
                  <h1>Your one stop shop for vehicle care</h1>
                  <h2>High quality, convenient and sustainable car care, all through one app</h2>
                  <h4>Mobile Body Repair - Mobile Valet - Mobile Mechanics</h4>
                  <button>Book now</button>
                </div>

          </div>
         </div>
     
     <div className={styles.cot}>
         <h1>Why Customers love <span style={{color:"cornflowerblue"}}>Aplha</span> </h1>
         <div className={styles.love}>
          <button style={{backgroundColor: change ? "aqua":"", backgroundColor: change1 ? "gainsboro":"" }}
           className={styles.love1} onClick={()=> {
            setChange(true)
            setChange1(false)
            setOpen(false)
            setOpen1(true)
           }}>Customers</button>

          <button style={{backgroundColor: change1 ? "aqua":""}} className={styles.love2}
           onClick={()=>{
            setChange1(true)
            setOpen(true)
            setOpen1(false)
            setChange(false)
            }}>Business fleet</button>
         </div>
     </div>


    {open1 ? <div className={styles.board} data-aos="fade-up">
      
         <div className={styles.firstboard}>
            <div className={styles.overboard}>
                <h1>it&apos; easy</h1>        
                <p>You can book, pay for, and manage<br/> your car care service from your <br/> mobile or computer.
          Simply register<br/> an account and enjoy a 10%<br/> discount off your first watch,<br/> and with the option to
          cancel or <br/>reschedule at any time- the power<br/> is in your hands.
                </p>
         </div>
        </div>
         
         <div className={styles.secondboard}>
            <div className={styles.overboard}>
                <h1>it&apos; Convenient</h1>        
                <p>why? Our mobile valeters and <br/>
                technicians come to you. No more<br/> driving to a car wash or a garage<br/> and waiting your turn in a queue.<br/>
                Sit back and relax- or go out and<br/> get on with your day--while<br/> Aplha take care of your car.
                </p>
         </div>
        </div>

         <div className={styles.thirdboard}>
            <div className={styles.overboard}>
                <h1>it&apos; Sustainable</h1>        
                <p>Our waterless watch methods use<br/> only 2 to 3 litres of water - that a<br/> saving over 200 litres per wash.<br/>
                  The solutions we use are non-toxic<br/> and the professional operators<br/> guarantee a fantastic wash every<br/> time.
                </p>
         </div>
        </div>
</div>:""}

 {open ?<div className={styles.board} data-aos="fade-up">
         <div className={styles.firstboard} style={{backgroundColor:"orangered"}}>
            <div className={styles.overboard}>
                <h1>Account Management</h1>        
                <p>
                  You&apos;ll be assigned an <span style={{color:"cornflowerblue", fontWeight:"700"}}>Alpha</span><br/> account manager who&apos;ll create a<br/> bespoke solution
         to suit your<br/> business
   needs.This will include<br/> custom pricing, service<br/> requirements and scheduling your<br/> first visit from us.

                </p>
         </div>
        </div>
         
         <div className={styles.secondboard}>
            <div className={styles.overboard}>
                <h1>Flexibility and<br/> efficiency</h1>        
                <p>
                  Using our app you can schedule<br/> monthly,weekly,and even daily<br/> washes and valets. Once you've<br/> selected you&apos;re 
                  preffered location<br/> you're sorted- and free to dedicate time to other business.
                </p>
         </div>
        </div>

         <div className={styles.thirdboard} style={{backgroundColor:"black"}}>
            <div className={styles.overboard}>
                <h1>Cooperate social<br/>responsibility</h1>        
                <p>Our waterless cleaning methods<br/> give numerous benefits to business<br/> clients who are concerned with<br/> 
  improving their CSR. We can clean<br/> vehicles wherever they stand<br/> without the need for drainage and<br/> offer huge water savings comapared<br/>
  with traditional car washes.

                </p>
         </div>
        </div>
</div>:""}

  <Service/>
     
    </div>
  )
}
