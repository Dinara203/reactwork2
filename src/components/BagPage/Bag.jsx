import {Link} from 'react-router-dom'
import CardImage from '/public/Catalog/card.png'
import {catalog} from '../../data'

export default function({bag}){

    const cardTovars = bag.map(id => catalog.find(item => item.id == id))
    const sum = cardTovars.reduce((sum, item) => sum + item.price, 0)
    return(
        <div className="container">
             <div className="links">
                    <p className="text">Главная\Каталог</p>
                </div>
            <div className="price-icons">
                <h1 className="title">Корзина</h1>
                <h3>Итого {sum}</h3>
            </div>
            <div className="cards">
                    <div className="cards-content">
            { cardTovars.map(tovar=>
                <div key={tovar.id} className="card">
                    <img src={CardImage} alt="" className="card-img" />
                    <p className="name">{tovar.name}</p>
                    <div className="price-icons">
                        <p className="price">{tovar.price} ₽</p>
                    </div>
                    <Link to={`${tovar.id}`} className="to-bag">Подробнее</Link>
                </div>
            )
            }
            </div>
            </div>
        </div>
        )
    
}