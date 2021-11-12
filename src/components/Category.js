import React from 'react'
import {Link } from "react-router-dom"
import Hero from './heroSection/Hero'
import "./category.css"
function Category() {
    return (
        <div className="category">

<div class="animate four">
      <span>W</span><span>E</span><span>L</span><span>C</span><span>O</span><span>M</span><span>E</span>
     
    
    </div>

            <Hero />
            

          <Link to="/quiz">  <a >go to quiz page</a></Link>

        </div>
    )
}

export default Category
