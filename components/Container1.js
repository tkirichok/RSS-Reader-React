import React from 'react';


const Container1 =  (props) => {
  return (
            
            <div className = "col-xs-12 col-sm-2">
                <button type="button" className = "btn btn-default btn-info btn-block" data-toggle="modal" data-target="#newChannel" id="channel">
                    <span className = "glyphicon glyphicon-plus" aria-hidden="true"></span> Add RSS Channel
                </button>
                {props.children}
            </div>
            
  )
}

export default Container1