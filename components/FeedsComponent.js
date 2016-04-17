import React from 'react';
import Loading1 from './Loading1';

const FeedsComponent =  (props) => {
  return (props.isLoading === true
    ? <Loading1 />
    :
<div>   
          
<div className = "col-xs-6 col-sm-4" id = "middle">
      <ul className="list-unstyled list-group">
     {props.feeds.map(
     (item, itemIndex) => (
            <a href="#" className="list-group-item" id = {itemIndex} key = {itemIndex} onClick = {props.onShowFeeds}>
                    {item.author}@{item.date} &nbsp;{item.title}
            </a>
    )
        )
     }
    </ul>
</div>
    
<div className="col-xs-6 col-sm-5" id = "right">
    <div className="panel panel-default">
        <div className="panel-heading">
            <a href={props.link} target="_blank"><h4>{props.title}</h4></a>
        </div>
        <div className="panel-body" id = "panelBodyContent" dangerouslySetInnerHTML = {{__html: props.content}}></div>
       
    </div>
</div>    
        
</div>    
    
  )
}
export default FeedsComponent