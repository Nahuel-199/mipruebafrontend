import React from 'react'
import Banner from '../../components/banner/Banner'
import Categories from '../../components/categories/Categories'
import Products from "../../components/products/Products"
import "./home.scss"

const Home = () => {
  return (
    <div>
        <Banner />
        <Categories />
        <Products />
    </div>
  )
}

export default Home