import './css/header.css'
import HeaderLogo from '../img/logo.png'

function Header() {
    return (
        <div className='headers'>
            <div className="head-wrap">
                <div className="logo">
                    <img src={HeaderLogo} />
                </div>

                <div className="menu-iteam">
                    <ul className="iteams">
                        <li className="iteam-link">Home</li>
                        <li className="iteam-link">About</li>
                        <li className="iteam-link">Service</li>
                        <li className="iteam-link">Team</li>
                        <li className="iteam-link">Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header