import {useParams} from 'react-router-dom'
import {catalog} from '../../data'
import CardImage from '/public/Catalog/card.png'
import './OneCard.css'

export default function OneCard({addTovar, addToBag, bag}){

        const {id} = useParams();
        const tovar =catalog.find(tovar=> tovar.id===parseInt(id))
    return(
      
        <>
  
         <div className="one-card">
            <div className="container">
                <div className="links">
                    <p className="text">Главная\{tovar.name}</p>
                </div>
                <div className="one-card-content">
                    <img src={CardImage} alt="" />
                    <div className="one-card-inf">
                        <div className="name-price">
                            <p className="name">{tovar.name}</p>
                            <p className="price col">{tovar.price} ₽</p>
                        </div>  
                          
                        <div className="btn-like">
                            <button onClick={addTovar=()=> addToBag([...bag,tovar.id])} className="to-bag">ДОБАВИТЬ В КОРЗИНУ</button>
                            
                                   
                                    
                        </div>  
                        <p className="text">{tovar.text}</p>            
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}