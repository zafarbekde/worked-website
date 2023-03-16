import './css/scss/content.css'
import React from 'react'


function Content() {
    return (
        <div className="txt">
            <div className="split">
                <h1 className="text">Best Solution For
                    Your  <span className="blue-txt">Business</span> Startup</h1>

                <span className="subtext"> Pellentesque non pretium sem. Sed sit amet diam vitae tortor mattis tincidunt et at neque.</span>

                <div className="buttons">
                    <div className="btn"><a className='start-btn' href="#">Get Started <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    </a></div>
                    <a href="#" className="play-btn"></a>
                </div>
            </div>
        </div>
    )
}


export default Content