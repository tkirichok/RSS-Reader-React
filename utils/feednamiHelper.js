function showChannel(url) {
    //function downloads feeds by url, using feednami.load from https://feednami.com/,
    //counts messages and authors 
    return new Promise(
            function (resolve, reject) {
                feednami.load(url, function (result) {

                    if (result.error) {
                        //console.log(result.error)
                        reject(result.error)
                    } else {
                        var entries = result.feed.entries
                        var feeds = []
                        var authors = []
                        for (var i = 0; i < entries.length; i++) {
                            var entry = entries[i]
                            var feed = new Object();
                            feed.author = entry.author;
                            authors[i] = feed.author;
                            feed.link = entry.link;
                            feed.date = moment(entry.date).startOf('hour').fromNow();
                            feed.title = entry.title;
                            feed.content = entry.description;
                            feeds[i] = feed;
                        }

                    }
                    resolve(feeds)
                    //console.log('!feed');
                    //return feeds[0].title;
                })
            }
    ) //Promise

}

var cast = Promise.resolve(showChannel);

var helper = {
    getFeeds : function(url){
            return showChannel(url).then(
                function (value) {
                    //console.log('Contents: ' + value);
                    return value
                }
            )
    },
    showFeed: function(url,ind){
        return showChannel(url).then(function(feeds){
            //console.log('h',feeds)
                
            let f = feeds[ind];
            //console.log('h',f)
            return f
                        })
    }
}

export default helper