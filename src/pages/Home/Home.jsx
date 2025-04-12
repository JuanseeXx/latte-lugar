import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import CoffeDisplay from '../../components/CoffeDisplay/CoffeDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

    const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <CoffeDisplay category={category}/>
      <AppDownload />
    </div>
  )
}

export default Home
