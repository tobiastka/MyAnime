import React from 'react'

import bannerImg from "../images/banner.jpg"
import bannerImg2 from "../images/banner-2.jpg"
function Home() {
    return (
        <div className='flex md:flex-row sm:flex-col w-2/3 mx-auto gap-5 h-2/3'>
            <div className=''><img className='my-auto rounded-xl w-full ' src={bannerImg} alt="" /></div>
            <div className='flex flex-col gap-5'>
                <img className='rounded-xl' src={bannerImg2} alt="" />
                <div className='flex flex-col text-[1.44vw] gap-2' style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
                    <p>This project is a <span className='text-sky-600'>"single page application"</span> where you can search about the anime world!</p>
                    <p>Focused on creating <span className='text-sky-600' >"custom hooks"</span> for state management!</p>
                    <p>Some of the concepts applied in this project were <span className="text-sky-600">"Fetch API"</span> to consume the anime API and <span className="text-sky-600">"Intersection Observer API"</span> for infinite scrolling!</p>
                    <p>Finally the styles were made with <span className="text-sky-600">"Tailwind CSS"</span>!</p>


                </div>
            </div>

        </div>
    )
}

export default Home