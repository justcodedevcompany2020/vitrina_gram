import React from 'react'


import {  Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import NewCatalog from './screens/NewCatalog'
import ProductCategories from './screens/ProductCategories'


require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class Main extends React.Component {
    render(){
        return(
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new_catalog" element={<NewCatalog />} />
                <Route path="/product_categories" element={<ProductCategories />} />
            </Routes>
        )
    }
}
