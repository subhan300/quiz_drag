import React from 'react'
import {Link } from "react-router-dom"
function Category() {
    return (
        <div>
            <h1>select categories from here  </h1>

          <Link to="/quiz">  <a >go to quiz page</a></Link>

        </div>
    )
}

export default Category
