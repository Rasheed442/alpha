import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import style from "../styles/navbar.module.css"
import{AiOutlineDown,AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import{IoEnterSharp} from 'react-icons/io'
import Aos from 'aos'
import 'aos/dist/aos.css' 
function Navbar() {
    useEffect(() =>{
        Aos.init({duration: 1000});
    }, []);
    const [icon, setIcon] = useState(false)
    const [service, setService] = useState(false)
    const [fleet, setFleet] = useState(false)
    const [about, setAbout] = useState(false)
  return (
    <>
       <div className={style.container} style={{backgroundColor: icon ? "cornflowerblue" : ""}}>
          <h1 style={{color: icon ? "white":""}}>Alpha</h1>

{/* navlinks for website */}
          <div className={style.navlink}>
             <Link href="/" ><p>Customers </p></Link>

             <Link href="/" onClick={()=> {
                setService(!service)
                setFleet(false)
                setAbout(false)
                }}><p>Services <AiOutlineDown/></p></Link>

             <Link href="/" onClick={()=> {
                setFleet(!fleet)
                setAbout(false)
                setService(false)
            }}><p>Fleet <AiOutlineDown/></p></Link>

             <Link href="/"><p>Pricing </p></Link>

             <Link href="/"  onClick={()=> {
                setService(false)
                setFleet(false)
                setAbout(!about)}}><p>About <AiOutlineDown/></p></Link>
             <Link href="/"><p>Get Help </p></Link>
          </div>
{/* navmenu for the app */}
          {icon ?<div className={style.navmenu} data-aos="fade-right">
               <Link href='/'><p>Customers</p></Link>
               <Link href='/'><p>Pricing</p></Link>
               <Link href='/'><p>Fleet</p></Link>
               <Link href='/'><p>HGV Truck Wash</p></Link>
               <Link href='/'><p>Scratch and Dent Repair</p></Link>
               <Link href='/'><p>Mobile Mechanic</p></Link>
               <Link href='/'><p>lifetime Protection</p></Link>
               <Link href='/'><p>About Us</p></Link>
               <Link href='/'><p>Get Help</p></Link>
               <Link href='/'><p>Careers</p></Link>
          </div>:""}

          <button>REGISTER/LOGIN</button>
          <div className={style.icon} onClick={()=> setIcon(!icon)} style={{color: icon ? "white":""}} >
           {icon ?<AiOutlineClose data-aos='zoom-in'/>:<AiOutlineMenu data-aos='zoom-in'/>} 
          </div>
       </div>

           {service ?<div data-aos="zoom-in" className={style.service}>
              <Link href='/'><p>wash & detail</p></Link> 
              <Link href='/'><p>lifetime Protection</p></Link> 
              <Link href='/'> <p>Scratch & Dent Repair</p></Link>
               <Link href='/'><p>Mobile Mechanic</p></Link>
               <Link href='/'><p>Oil Change</p></Link>
               <Link href='/'><p>End lease of Repairs</p></Link>
       </div>:""}
           {fleet?<div data-aos="zoom-in" className={style.fleet}>
               <Link href='/'><p>HGV Truck Wash</p></Link>
               <Link href='/'><p>Servicing & Repairs</p></Link>
               <Link href='/'><p>Partnership</p></Link>
       </div>:""}
           {about?<div data-aos="zoom-in" className={style.about}>
               <Link href='/'><p>About Us</p></Link>
               <Link href='/'><p>Blog</p></Link>
               <Link href='/'><p>Sustainability</p></Link>
               <Link href='/'><p>wash & detail</p></Link>
       </div>:""}
    </>
  )
}

export default Navbar