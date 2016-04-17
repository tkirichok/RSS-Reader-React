import React from 'react';
import NewChannel from './NewChannel';
var PropTypes = React.PropTypes;

const ChannelList =  (props) => {
  return (
            
            <div className = "col-xs-12 col-sm-3" id = "left">
                <button type="button" className = "btn btn-default btn-info btn-block" data-toggle="modal" data-target="#newChannel" id="channel">
                    <span className = "glyphicon glyphicon-plus" aria-hidden="true"></span> Add RSS Channel
                </button>
                
      <div className="modal fade" id="messageModal">
    <div className="modal-dialog">
        <div className="modal-content">
           
            <div className="modal-body">
                
                <div id="message"></div>
      
            </div>
<div className="modal-footer">
                <button type="button" className="btn btn-default btn-sm" data-dismiss="modal">Close</button>
            </div>
           
        </div>
    </div>
</div>
      
      
                <div id="newChannel" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">New RSS channel</h4>
                            </div>
                            <div className="modal-body">

                                <form className="form-inline ">

                                    <div className="form-group">
                                        
                                        <input type="text" className="form-control input-sm" placeholder="Name" id="name"    value = {props.newName} onChange = {props.onChangeValue}/>
                                    </div>
                                    <div className="form-group">
                                        
                                        <input type="url" className="form-control input-sm" placeholder="URL" id="url" value = {props.newUrl} onChange = {props.onChangeValue}/> 
                                    </div>

                                    <button id="addChannel" type="submit" className="btn btn-info btn-sm" data-dismiss="modal" onClick = {props.onAddChannel}>OK</button>
                                    <button type="button" className="btn btn-default btn-sm" data-dismiss="modal">Cancel</button>

                                </form>

                            </div>
                        </div>
                    </div>
            </div>
                <div className = "list-group">
      

        {props.channelsInfo.map(
        (item,itemIndex) => (
    
     <a href = "#" className = "list-group-item list-group-item-info" id={itemIndex+'a'} title = {item.url} key = {itemIndex} onClick = {props.onSelectChannel}>
        {item.name}
            <span className = "pull-right">
       <span className = "glyphicon glyphicon-remove" onClick = {props.onRemoveChannel}></span></span>
      </a> 
    )
    
    )
        }
        
        </div>
            </div>
            
  )
}

ChannelList.propTypes = {
    onSelectChannel: PropTypes.func.isRequired,
    onRemoveChannel: PropTypes.func.isRequired,
    channelsInfo: PropTypes.array.isRequired,
    onAddChannel: PropTypes.func.isRequired,
    onChangeValue: PropTypes.func.isRequired
    
}

export default ChannelList