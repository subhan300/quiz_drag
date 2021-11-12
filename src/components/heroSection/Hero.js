import React from 'react'
import "./Hero.css"
import GroupedSelect from './SelectCategory'
function Hero() {
    return (
        <div className="hero_section">
            <div className="hero_container">
                 <h1>Select Category For <span style={{color:"blue"}}>QuiZ Test</span></h1>

                 <div>
                    <GroupedSelect />
                 </div>
            </div>
        </div>
    )
}

export default Hero
