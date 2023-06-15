import React from 'react'


import {  Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import NewCatalog from './screens/NewCatalog'
import ProductCategories from './screens/ProductCategories'
import Newsletter from './screens/Newsletter'
import SentNewsletter from './screens/SentNewsletter'
import Messages from './screens/Messages'
import ClientUsers from './screens/ClientsUsers'
import NewClientCard from './screens/NewClientCard'


require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class Main extends React.Component {
    render(){
        return(
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new_catalog" element={<NewCatalog />} />
                <Route path="/product_categories" element={<ProductCategories />} />
                <Route path="/newsletter" element={<Newsletter />} />
                <Route path="/sent_newsletter" element={<SentNewsletter />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/client_users" element={<ClientUsers />} />
                <Route path="/new_client_card" element={<NewClientCard />} />
            </Routes>
        )
    }
}
