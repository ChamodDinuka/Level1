import React from 'react'
import '../../App.css'
import Contact from '../../images/contact.png'

function ThankPage() {
    return (
        <div className="thank">
            <div className="aboutInner">
                <div className="headerTextDark">Thank you for your reservation!</div>
                <div className="textDark">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <br />
                <div className="bottomText">For further information contact us</div>
                <img style={{ "width": 40, "height": 40, "marginBottom": 10, "marginTop": 10 }} src={Contact} alt="contact" />
                <div className="textDark" style={{ "color": "#A5A5A5", "marginBottom": 10 }}>(487) 1070 1087</div>
                <div className="textDark" style={{ "color": "#A5A5A5", "marginBottom": 10 }}>sales.salonprauge@sp.com</div>
            </div>
        </div>
    )
}

export default ThankPage