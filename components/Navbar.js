import React from 'react';

import {browserHistory, Router, Route, Link} from 'react-router' ;

class Navbar extends React.Component{
    render(){
        return (
                        <ul className = "nav navbar-nav">
                    <li><a  onClick={() => browserHistory.push('/') }><h1><span><i className = "fa fa-rss"></i>
                        </span> RSS Reader</h1></a></li>
                    
                </ul>
        )
    }
}

export default Navbar