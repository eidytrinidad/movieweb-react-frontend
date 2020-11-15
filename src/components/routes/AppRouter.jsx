import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Agregar } from '../Admin/Agregar'
import { Login } from '../Admin/Login'
import { Home } from '../Home'


function AppRouter() {
    return (
       <Router>
           <Switch>
               <Route exact path="/login" component={Login}/>
               <Route exact path="/admin/agregar" component={Agregar}/>
               <Route path="/" component={Home}/>
           </Switch>
       </Router>
    )
}

export default AppRouter
