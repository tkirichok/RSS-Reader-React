import React from 'react';
var PropTypes = React.PropTypes;

const NewChannel =  (props) => {
  return (
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
                                        
                                        <input type="text" className="form-control input-sm" placeholder="Name" id="name"  value={props.newName} onChange = {props.onChangeValue} autofocus/>
                                    </div>
                                    <div className="form-group">
                                        
                                        <input type="url" className="form-control input-sm" placeholder="URL" id="url"  value={props.newUrl} onChange = {props.onChangeValue}/> 
                                    </div>

                                    <button id="addChannel" type="submit" className="btn btn-info btn-sm" data-dismiss="modal" onClick = {props.onAddChannel}>OK</button>
                                    <button type="button" className="btn btn-default btn-sm" data-dismiss="modal">Cancel</button>

                                </form>

                            </div>
                        </div>
                    </div>
            </div>
      )
}

NewChannel.propTypes = {
  onAddChannel: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default NewChannel
                