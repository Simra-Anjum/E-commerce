import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import About from '../../components/About/About'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      <Header/>
      <About/>
      <ExploreMenu setCategory={setCategory} category={category}/>
      <ProductDisplay category={category}/>
      <AppDownload/>
    </>
  )
}

export default Home
