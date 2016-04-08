/*var React = require('react');
var ReactRouter = require('react-router');
import { Router, Route } from 'react-router';
//var Router = ReactRouter.Router;
//var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Container = require('../components/Container');
var Home = require("../components/Home");


let routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Container}>
      <Route path = 'home' component={Home} />
    </Route>
  </Router>
);
      


export default routes*/

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'


import Container from '../components/Container'
import Home from '../containers/Home'

const ACTIVE = { color: 'red' }

/*
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>APP!</h1>
        <ul>
          <li><Link      to="/"           activeStyle={ACTIVE}>/</Link></li>
          <li><IndexLink to="/"           activeStyle={ACTIVE}>/ IndexLink</IndexLink></li>

          <li><Link      to="/users"      activeStyle={ACTIVE}>/users</Link></li>
          <li><IndexLink to="/users"      activeStyle={ACTIVE}>/users IndexLink</IndexLink></li>

          <li><Link      to="/users/ryan" activeStyle={ACTIVE}>/users/ryan</Link></li>
          <li><Link      to={{ pathname: '/users/ryan', query: { foo: 'bar' } }}
                                          activeStyle={ACTIVE}>/users/ryan?foo=bar</Link></li>

          <li><Link      to="/about"      activeStyle={ACTIVE}>/about</Link></li>
        </ul>

        {this.props.children}
      </div>
    )
  }
}
*/



class Users extends React.Component {
  render() {
    return (
      <div>
        <h2>Users</h2>
        {this.props.children}
      </div>
    )
  }
}

class UsersIndex extends React.Component {
  render() {
    return (
      <div>
        <h3>UsersIndex</h3>
      </div>
    )
  }
}

class User extends React.Component {
  render() {
    return (
      <div>
        <h3>User {this.props.params.id}</h3>
      </div>
    )
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    )
  }
}



class HomeContainer extends React.Component{
    render() {
        console.log('Home')
        
        return <Home name = 'Pravda' />
    }
}
    
class ChannelContainer extends React.Component{
    
    render() {
        let name = this.props.location.query.name;
        console.log('Channel',name);
        
        return <Home name = {name}  />
    }
}



    
//render(
let routes =    (
  <Router history={browserHistory}>
    <Route path="/" component={Container}>
      <IndexRoute component={HomeContainer}/>
      <Route path = 'channel' component = {ChannelContainer}/> 
    
      <Route path="/about" component={About}/>
      <Route path="users" component={Users}>
        <IndexRoute component={UsersIndex}/>
        <Route path=":id" component={User}/>
      </Route>
    </Route>
  </Router>)


    
 


export default routes