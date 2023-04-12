import React from 'react'
import '../assets/css/Footer.css'
import greenFooter from '../assets/img/FooterGreen.png'

function Footer() {
  return (
    <div>
        <section id='footer-title'>
            <h1 id='footer-help'> Need Help ?</h1>
            <h3 id='footer-site'>coopers@coopers.pro</h3>
            <p id='footer-rights'>© 2021 Coopers. All rights reserved.</p>
            <img id='footer-faixa-verde' src={greenFooter} />

        </section>
    </div>
  )
}

export default Footer