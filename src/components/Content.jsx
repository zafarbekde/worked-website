import './css/scss/content.css'
import React from 'react'

function Content() {
    return (
        <div className="txt">
            <div className="split">
                <h1 className="text">Best Solution For
                    Your  <span className='blue-txt'>Business</span>Startup</h1>

                <span className="subtext"> Pellentesque non pretium sem. Sed sit amet diam vitae tortor mattis tincidunt et at neque.</span>

                <div className="buttons">
                    <a href="#">Get Started</a>
                    <a href="#" className="play-btn"></a>
                </div>
            </div>
        </div>
    )
}


export default Content