import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Clothing from './Components/Clothing/Clothing';
import Item from './Components/Item/Item';



export default (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/clothing" exact component={Clothing}/>
        <Route path="/clothing/:id/:img" component={Item}/>
        
    </Switch>
)