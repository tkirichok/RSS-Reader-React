import React from 'react';

const FeedsContainer = (props) => {
    return (
    
                
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
     
    
        )}
        
export default FeedsContainer        