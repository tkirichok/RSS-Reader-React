import React from 'react'
import ChannelList from '../components/ChannelList'
import {
    browserHistory, Router, Route, Link
}
from 'react-router'

class ChannelListContainer extends React.Component {

    constructor(props, context) {

        super(props, context);
        this.state = {
                newChannel: {name: "", url: ""}
                , channels: [
                    {
                        name: "Pravda"
                        , url: "http://www.pravda.com.ua/rss/"

                }
                
                    , {
                        name: "Gorky Look"
                        , url: "http://gorky-look.livejournal.com/data/rss"
                             }
                
                    ]
            }
            
        this.removeChannel = this.removeChannel.bind(this)
        this.selectChannel = this.selectChannel.bind(this)
        this.addChannel = this.addChannel.bind(this) 
        this.handleChange = this.handleChange.bind(this)
        
    }

    removeChannel(e) {

        var channelIndex = parseInt(e.target.parentNode.parentNode.id, 10);
        
        this.setState(state => {
            state.channels.splice(channelIndex, 1);
            return {
                channels: state.channels
            };
        });

        this.context.router.push('/')

        e.preventDefault();
    }

    selectChannel(e) {

        e.preventDefault();
        if ((e.target.className || e.target.parentNode.className) == "list-group-item list-group-item-info active") {
            var el = (e.target.className == "list-group-item list-group-item-info active") ? e.target : e.target.parentNode;
            
            var id = parseInt((el.id), 10);
            this.context.router.push({
                pathname: '/channel'
                , query: {
                    url: this.state.channels[id].url,
                    idCh: id

                }
            })
        }
    }
    
    addChannel(){
 
        this.setState(state => {
            let newCh = state.newChannel;
            if (!(newCh.name == '')) {
            state.channels.push(newCh);
            }
            return {
                channels: state.channels
            };
        });
    }
    
    handleChange(event) {
    if (event.target.id == "name"){ 
        var str = event.target.value;
      this.setState({
      newChannel: {
          name: (str.length > 11) ? str.slice(0, 11) : str,
          url: this.state.newChannel.url
      }
    })
    }else if (event.target.id == "url"){
      this.setState({
      newChannel: {
          name: this.state.newChannel.name,
          url: event.target.value
      }
    })  
    }
    }
    
    
    /*componentWillReceiveProps(nextProps) {
        console.log(nextProps.location)
        //console.log(this.props.location.query.idCh)
        if (nextProps.location.pathname == '/'){
            let el = document.getElementById(this.props.location.query.idCh + 'a')
            if (el){
            el.className = "list-group-item list-group-item-info"}
        }
    }
*/
    render() {

        return ( < div className = "row row-content" >
                
            < ChannelList channelsInfo = {
                this.state.channels
            }
            onRemoveChannel = {
                this.removeChannel
            }
            onSelectChannel = {
                this.selectChannel
            }
            onAddChannel = {
                this.addChannel    
            }
            onChangeValue = {
                this.handleChange
                }    
            newName = {this.state.newChannel.name}    

                /> {
                this.props.children && React.cloneElement(this.props.children)
            } < /div>
        );
    }
}

ChannelListContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default ChannelListContainer