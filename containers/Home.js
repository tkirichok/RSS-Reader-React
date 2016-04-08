import React from 'react';
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link } from 'react-router'
import Container1 from '../components/Container1';
import Container2 from '../components/Container2';
import Container3 from '../components/Container3';
import FeedsContainer from '../components/FeedsContainer';

import helper from '../utils/feednamiHelper';


class Home extends React.Component{
    
    constructor(props, context) {
       
        super(props, context);
        
        
        this.state = {
             currentFeed: {title: "Title", content: "Content"}
           , feeds: []
           , channels: [
                {
                    name: "Pravda"
                    , url: "http://www.pravda.com.ua/rss/"

                }
                , {
                    name: "Gorky Look"
                    , url: "http://gorky-look.livejournal.com/data/rss"
                             }
                , {
                    name: "Stack Overflow"
                    , url: "http://stackoverflow.com/feeds"
                 }]
        }
        console.log('init')
        this.removeChannel = this.removeChannel.bind(this)
        this.selectChannel = this.selectChannel.bind(this)
        this.showFeeds     = this.showFeeds.bind(this)
        
        //this.update = this.update.bind(this)
        
    }
    
    removeChannel(e){
        
        var channelIndex = parseInt(e.target.parentNode.parentNode.id, 10);
        //console.log(taskIndex, this.state.channels[taskIndex]);
        this.setState(state => {
            state.channels.splice(channelIndex, 1);
            return {channels: state.channels};
        });
        
        this.context.router.push('/')
        
        //e.preventDefault();
    }

    selectChannel(e) {
        
        var id = parseInt(e.target.parentNode.id, 10);
        //console.log(e.target.parentNode.className)
        if (e.target.parentNode.className == "list-group-item list-group-item-info active"){
        
        this.context.router.push({
        pathname: '/channel',
        query: {
          name: this.state.channels[id].name
          
        }
      })
        }
        //console.log(this.context)
        e.preventDefault();
        
    }    
    showFeeds(e) {
        
        let ind = parseInt(e.target.parentNode.id, 10);
        let name = this.props.name;
        let currentChannel = this.state.channels.filter(function(item){
            return name == item.name
        })
        
        let url = currentChannel[0].url; //"http://www.pravda.com.ua/rss/"; //this.props.currentUrl;
        
        helper.showFeed(url, ind).then(
            function(f){
                
        
                this.setState({
                    currentFeed: {
                    title: f.title
                    , content: f.content
                
                }})}.bind(this))
        e.preventDefault();
            }
        
    
   // update(e){
     //   this.setState({txt: e.target.value})
//    }
    
    componentDidMount() {
    console.log('didmount')    
    let ind = 0;//this.props.feedIndex;  
                
        let name = this.props.name;
        let currentChannel = this.state.channels.filter(function(item){
            return name == item.name
        })
        
        let url = currentChannel[0].url;
    //let url = "http://www.pravda.com.ua/rss/";//this.props.currentUrl;    
    helper.getFeeds(url).then(
        function (res) {
            this.setState({
                feeds: [].concat(res)/*,
                currentFeed: {
                    title: res[ind].title,
                    content: res[ind].content
                }*/
                
            })

        }.bind(this)) 
    
}
    
    render(){
        
   console.log(this.state)
   
       // let txt = this.state.txt; //this.props.txt;
        return (
           <div> 
            <Container1>
            <ItemChannel channelsInfo = {this.state.channels} onRemoveChannel = {this.removeChannel} onSelectChannel = {this.selectChannel} />
            </Container1>
            
            <Container2>
            <FeedsContainer feeds = {this.state.feeds} onShowFeeds = {this.showFeeds}/>
            </Container2>
            
            <Container3>
            <CurrentFeedContainer  content = {this.state.currentFeed.content} title = {this.state.currentFeed.title}/>
            </Container3>
            
            </div>
        );
    }
}



const CurrentFeedContainer = (props) => {
    return (
        <div className="panel panel-default">
                    <div className="panel-heading">
                        <a href="#" target="_blank"><h4>{props.title}</h4></a>
                    </div>
                    <div className="panel-body" id = "panelBodyContent"
        dangerouslySetInnerHTML = {{__html: props.content}}>
                    </div>
                </div>
    )
}        
        



const ItemChannel = (props) => {
    return (
        <div className = "list-group">
        {props.channelsInfo.map(
        (item,itemIndex) => (
    
     <a href = "#" className = "list-group-item list-group-item-info" id={itemIndex} key = {itemIndex} onClick = {props.onSelectChannel}>
        {item.name}
            <span className = "pull-right">
       <span className = "glyphicon glyphicon-remove" onClick = {props.onRemoveChannel}></span></span></a> 
    )
    
    )
        }
        
        </div>
    );
}

        //to = {`/channel/${item.name}`}
             

/*const FeedDetails = (feed, props) => {
    return (
        <a href="#" className = "list-group-item list-group-item-info" id="feed">{feed.info.name}
            <span className = "pull-right">
       <span className = "glyphicon glyphicon-remove" onClick = {props.onRemoveChannel}></span></span></a> 
    );
}*/
/*FeedDetails.propTypes = {
  onRemoveChannel: React.PropTypes.func.isRequired,
}*/

/*App.defaultProps = {
    txt: 'this is the default txt'
}*/

/*
ReactDOM.render(
    <App cat = {5}  txt = "oo"/>, 
    document.getElementById('app'));
*/

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default Home
