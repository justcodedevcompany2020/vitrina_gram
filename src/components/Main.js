import React from 'react'


import {  Routes, Route } from 'react-router-dom'
import Home from './screens/Home'


require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class Main extends React.Component {
    render(){
        return(
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        )
    }
}
