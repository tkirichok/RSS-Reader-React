var React = require('react');
var PropTypes = React.PropTypes;



var Loading1 = React.createClass({

    componentDidMount: function () {
        var canvas = document.getElementsByClassName('spinn');

        var ctx = canvas[0].getContext("2d");
        ctx.arc(500, 500, 20, 0, 2 * Math.PI, true);
        $('body').css('pointer-events', 'none');
        $('body').css('opacity', '0.4');
        $('.spinn').css('visibility', 'visible');

    },

    componentWillUnmount: function () {
        $('body').css('pointer-events', 'auto');
        $('body').css('opacity', '1.0');
        $('.spinn').css('visibility', 'hidden');
    },

    render: function () {
        return ( < div > < /div>)
    }
})

module.exports = Loading1;