import Content from './Content'
import './css/hero.css'
import Header from './Header'


function Hero(){
    return(
        <div className="container">
            <div className="wrapper">
                <div className="heading">
                    <Header/>
                </div>

                <div className="content">
                    <div className="text-content">
                        <Content/>
                    </div>

                    <div className="img-content">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero