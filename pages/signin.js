import React from 'react'
import Image from 'next/image'
import style from '../styles/signin.module.css'
import Link from 'next/link'
function Signin() {
  return (
    <>
<div className={style.container}>
    
        <div className={style.image}>
            <Image
            priority
            width={500}
            height={695}
            src='/wash.jpg'
            />
        </div>

        {/* main contents */}
<div>
        <div className={style.head}>
            <h1 style={{color:"aqua"}}>Aplha</h1>
             <p>Don&apos;t have an acccount? <Link href='/' style={{color:"aqua"}}>Sign Up</Link></p>
        </div>

        <div className={style.main}>
            <h1>Welcome!<br/>Nice to see<br/>you again!</h1>

            <div>
                <form>
                    <div className={style.content}>
                        <input placeholder='Email Address*:' type='text'/>
                        <input placeholder='password*:' type='text'/>
                        <Link href='/'><p style={{color:"Aqua"}}>Forgot your Password</p></Link>                   
                         <button>Sign in with your Email</button>
                    </div>
                </form>
            </div>
        </div>

</div>

        
 </div> 
    </>
  )
}

export default Signin