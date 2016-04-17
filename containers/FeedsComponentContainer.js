import React from 'react';
import FeedsComponent from '../components/FeedsComponent';
import helper from '../utils/feednamiHelper';

class FeedsComponentContainer extends React.Component {

    constructor(props, context) {

        super(props, context);


        this.state = {
            isLoading: true
            , feeds: []
            , currentFeed: {
                title: "Title"
                , content: "Content"
                , link: ""
            }
        }

        this.showFeeds = this.showFeeds.bind(this)
    }

    componentDidMount() {

        let url = this.props.location.query.url;
        helper.getFeeds(url).then(
                function (res) {
                    this.setState({
                        isLoading: false
                        , feeds: [].concat(res)
                        , currentFeed: {
                            title: res[0].title
                            , content: res[0].content
                            , link: res[0].link
                        }
                    })

                }.bind(this))
            .catch(function (err) {
                this.context.router.push('/')
            }.bind(this))
    }

    componentWillUpdate() {

    }

    componentWillReceiveProps(nextProps) {
        //console.log(nextProps)
        let url = nextProps.location.query.url;
        let id = nextProps.location.query.id;
        let idCh = nextProps.location.query.idCh;
        if (!id) {

            if (idCh) {
                var elem = document.getElementById(idCh + 'a');

                var elems = document.getElementsByClassName('list-group-item list-group-item-info active');

                for (var i = 0; i < elems.length; i++) {
                    if (elems[i].className == "list-group-item list-group-item-info active") {
                        elems[i].className = "list-group-item list-group-item-info "
                    }

                }
                elem.className = "list-group-item list-group-item-info active";
            }
            let elem1 = document.getElementById('middle')
            let elem2 = document.getElementById('right')

            if (elem1) {

                elem1.scrollTop = 0
            }
            if (elem2) {
                elem2.scrollTop = 0
            }

            helper.getFeeds(url).then(
                    function (res) {
                        this.setState({
                            isLoading: false
                            , feeds: [].concat(res)
                            , currentFeed: {
                                title: res[0].title
                                , content: res[0].content
                                , link: res[0].link
                            }
                        })

                    }.bind(this))
                .catch(function (err) {

                    this.context.router.push('/')
                }.bind(this))


        } else {
            let f = this.state.feeds[id];
            var elem = document.getElementById(id);

            var elems = document.getElementsByClassName('list-group-item active');

            for (var i = 0; i < elems.length; i++) {
                if (elems[i].className == "list-group-item active") {
                    elems[i].className = "list-group-item"
                }
                
            }
            elem.className = "list-group-item active";
            
            this.setState({
                currentFeed: {
                    title: f.title
                    , content: f.content
                    , link: f.link

                }
            });
            let elem2 = document.getElementById('right')
            if (elem2) {
                elem2.scrollTop = 0
            }
        }

    }

    showFeeds(e) {

        var el = e.target
        if ((el.className || el.parentNode.className) == "list-group-item active") {

            el = (el.className == "list-group-item active") ? el : el.parentNode;
            let ind = parseInt(el.id, 10);
            let f = this.state.feeds[ind];
            this.context.router.push({
                pathname: '/channel'
                , query: {
                    url: this.props.location.query.url
                    , id: el.id
                }
            })


            this.setState({
                currentFeed: {
                    title: f.title
                    , content: f.content
                    , link: f.link

                }
            });
            e.preventDefault();
        }

    }


    render() {

        return ( < FeedsComponent feeds = {
                this.state.feeds
            }
            onShowFeeds = {
                this.showFeeds
            }
            content = {
                this.state.currentFeed.content
            }
            title = {
                this.state.currentFeed.title
            }
            isLoading = {
                this.state.isLoading
            }
            link = {
                this.state.currentFeed.link
            }
            />
        )
    }

}

FeedsComponentContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default FeedsComponentContainer