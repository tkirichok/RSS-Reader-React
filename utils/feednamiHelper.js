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
              
                })
            }
    ) 

}

var helper = {
    getFeeds : function(url){
            return showChannel(url).then(
                function (value) {
                    return value
                }
            ).catch(function (err) {
                $('#messageModal').modal('show')
                document.getElementById("message").innerHTML = "Error: " + err.message})
                    
    }
}

export default helper