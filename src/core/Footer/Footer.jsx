import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (

        <footer className="mx-auto px-5 lg:text-lg text-sm  my-3">
            <div className=" flex justify-center items-center  ">
                <div className="lg:flex text-center  space-x-1">
                    <div className="text-green-950">Copyright © 2024 <span><Link to='/'> <span className="text-yellow-700">OAKSEE. </span></Link></span> </div>

                    <span>
                          Website Designed By <a href="http://arrowthought.com/" target="_blank"><span className="underline">Arrow Thought.</span></a>
                    </span>
                </div>
            </div>
        </footer>

    )
}

export default Footer
