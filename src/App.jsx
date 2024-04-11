import { useState } from 'react'
import Header from './components/Header/Header'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Catalog from './components/Catalog/Catalog'
import OneCard from './components/OneCard/OneCard'
import BagPage from './components/BagPage/Bag'

function App() {
  const [count, setCount] = useState(0)
  const[bag,setBag] = useState([])
  console.log(bag)

  return (
    <>
      <Header  bag={bag}/>
      <Routes>
      <Route path="/" element={<Catalog addToBag={setBag} bag={bag}/>}></Route>
      <Route path="/:id" element={<OneCard addToBag={setBag} bag={bag}/>}></Route>
      <Route path="/bag" element = {<BagPage  bag={bag}/>} />
      </Routes>
    </>
  )
}

export default App
