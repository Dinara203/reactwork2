
import './Card.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import CardImage from '../../../public/Catalog/card.png'
import Modalka from '../Modalka/Modalka'

export default function Card({name, price, ost, id, addTovar}){
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return(
        <div className="card">
            <img src={CardImage} alt="" className="card-img" />
            <p className="name">{name}</p>
             <div className="price-icons">
                <p className="price">{price} ₽</p>
                <div className="icons">
                    {ost === 0 ? (
                        <Modalka modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
                    ):
                    (
                        <button onClick={addTovar}><p className='bag'>Купить</p></button>
                    )}      
                </div>   
            </div>
            <p className="grey">Осталось {ost} шт.</p>
            <Link to={`${id}`} className="to-bag">Подробнее</Link>
        
        </div>
    )
}