import React from 'react';

class Container extends React.Component{
    
    render(){
        return (
            <div className = "row row-content">
             {this.props.children}
            </div>
        );
    }
}


export default Container