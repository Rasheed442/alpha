import React from 'react'
import style from '../styles/footer.module.css'
function Footer() {
  return (
    <>
        <div className={style.container}>
              <div className={style.main}>
                  <h2>Alpha</h2>
                  <p>&copy; Dropless LTD</p>
                  <p>All rights reserved.</p>
                  <p>Registered company</p>
                  <p>number:#11018311</p>
                  <p>VAT:GB3314151666</p>
              </div>

              <div className={style.main}>
                <h4>About</h4>
                <p>Sustainability</p>
                <p>Ambassador</p>
                <p>Careers</p>
                <p>Blog</p>
                <p>Gift Cards</p>
                <p>Refer a friend</p>
              </div>
              
              <div className={style.main}>
                <h4>Services</h4>
                <p>Fleet Washing</p>
                <p>Customers</p>
                <p>Pricing</p>
                <p>HGV Truck Wash</p>
                <p>Scratch & Dent</p>
                <p>Repair</p>
                <p>Oil Change</p>
                <p>Servicing & Repairs</p>
                <p>FAQ</p>
              </div>
              
              <div className={style.main}>
                <h4>Legal</h4>
                <p>Terms and Conditions</p>
                <p>Privacy and policy</p>
                <p>Cookie Policy</p>
              </div>
              
              <div className={style.main}>
                <h4>Sign up to our newsletter</h4>
                <div className={style.up}>
                    <input type='/'/>
                    <button>SUBSCRIBE</button>
                </div>
              </div>
  
        </div>
    </>
  )
}

export default Footer