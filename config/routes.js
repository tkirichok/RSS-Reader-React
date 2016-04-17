import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import ChannelListContainer from '../containers/ChannelListContainer'
import FeedsComponentContainer from '../containers/FeedsComponentContainer'


let routes =    (
  <Router history={browserHistory}>
    <Route path="/" component={ChannelListContainer}>
      
      <Route path = 'channel' component = {FeedsComponentContainer}/> 
     </Route>
  </Router>)


export default routes