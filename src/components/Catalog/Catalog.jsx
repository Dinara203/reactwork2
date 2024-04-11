import '../Catalog/Catalog.css'
import { catalog } from '../../data'
import Card from '../Card/Card'
import {useState} from 'react'


export default function Catalog({addToBag, bag}){

    const[query,setQuery] = useState("")
    const[sorting, setSorting] = useState("")
    const[category, setCategory] = useState(0)


    // ПОИСК
    
    function search(e){
        setQuery(e.target.value)
        console.log(query)
    }

    const filterTovar = catalog.filter(
        (item)=>item.name.toLowerCase().includes(query.toLowerCase())
        // console.log(filterTovar)
        &&
        (item.category == category||category == 0))


    // СОРТИРОВКА

    function sort(e){
        const sortValue = e.target.value
        setSorting(sortValue)
    }

    const sortTovar = (sorting, catalog) => {
        switch (sorting) {
            case 'price-asc':
               return [...catalog].sort((a,b) =>a.price - b.price)
            case 'price-desc':
                return [...catalog].sort((a,b) =>b.price - a.price)
            // case 'ost-asc':
            //    return [...catalog].sort((a,b) =>a.ost - b.ost)
            // case 'ost-desc':
            //     return [...catalog].sort((a,b) =>b.ost - a.ost)
            default:
                   return catalog
        }
    }

    const sortAndFilterTovar = sortTovar(sorting, filterTovar)

    return(
        <div className="catalog">
            <div className="container">
                <div className="links">
                    <p className="title">Каталог</p>
                </div>
                <div className="cat-poisk">
                <div className="filters">
                    <div className="filters-content">
                        <button onClick={()=>setCategory(0)} className="filter">Все</button>
                        <button onClick={()=>setCategory(1)} className="filter">Топ</button>
                        <button onClick={()=>setCategory(2)} className="filter">Низ</button>
                        <button onClick={()=>setCategory(3)} className="filter">Обувь</button>
                    </div>                  
                </div>
                <div className="filters-content">
                    <div className="poisk">
                        <input onChange={search} type="search" className='search' name="search" placeholder="Поиск"/>
                    </div>
                    <select className="sort" onChange={sort}>
                        <option value="price-asc">Сортировать...</option>
                        <option value="price-asc">По возростанию цены</option>
                        <option value="price-desc">По убыванию цены</option>
                        
                    </select>
                </div>
                </div>
                <div className="cards">
                    <div className="cards-content">
                        {
                            sortAndFilterTovar.length ?
                            sortAndFilterTovar.map((card, index)=>{
                                return(
                                    <Card  key={index} {...card}
                                     addTovar={
                                         ()=> addToBag([...bag,card.id])} 
                                    />
                                )
                            })
                            :
                            <h2>По вашему запросу "{query}" ничего не найдено</h2>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}