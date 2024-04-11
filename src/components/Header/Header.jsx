import '../Header/Header.css'
// import CardImage from '/public/Header/card.png'
import {Link} from 'react-router-dom'

export default function Header({bag}){

    return(
        <header>
            <div className="container">
                <div className="header-content">
                    <div className="left">
                         <Link to="/" className="logo">
                            <p>LOGO</p>
                            </Link>
                       
                    </div>
                    <nav className="header-nav">
                            <li className="btn-nav">
                            <Link to="/"><p className='menu'>Главная</p></Link>
                            </li>
                            <li className="btn-nav">
                            <Link to="/"> <p className='menu'>Каталог</p></Link>
                            </li>
                            
                        </nav>
                    <div className="right">
                    <Link to="/bag"><p className='bag'>Корзина {bag.length}</p></Link>
                      
                    </div>
                </div>
            </div>
            <div className="line"></div>
        </header>
        
    )
}