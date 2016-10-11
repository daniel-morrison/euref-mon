'use strict';

var Pageres = require('pageres');

var pageres = new Pageres({delay: 2})
.src('www.bbc.co.uk/news', ['1024x768', '480x640'], {crop:true, filename:'<%= time %>-<%= url %>-<%= size %>'})
.src('www.bbc.co.uk/news/politics/eu_referendum/results', ['1024x768', '480x640'], {crop:false, filename:'<%= time %>-<%= url %>-<%= size %>'})
.src('www.elpais.com', ['1024x768', '480x640'], {crop:true, filename:'<%= time %>-<%= url %>-<%= size %>'})
.src('http://uk.reuters.com/subjects/eu-referendum', ['1024x768', '480x640'], {crop:false, filename:'<%= time %>-<%= url %>-<%= size %>'})
.src('www.economist.com/brexit', ['1024x768', '480x640'], {crop:true, filename:'<%= time %>-<%= url %>-<%= size %>'})
.src('www.theguardian.com/uk', ['1024x768', '480x640'], {crop:true, filename:'<%= time %>-<%= url %>-<%= size %>'})
.src('www.theguardian.com/politics/ng-interactive/2016/jun/23/eu-referendum-live-results-and-analysis', ['1024x768', '480x640'], {crop:false, filename:'<%= time %>-<%= url %>-<%= size %>'})
.src('www.thetimes.co.uk/article/eu-referendum-follow-the-results-live-np32xpkh5', ['1024x768', '480x640'], {crop:false, filename:'<%= time %>-<%= url %>-<%= size %>'})
.src('http://www.ft.com/home/uk', ['1024x768', '480x640'], {crop:true, filename:'<%= time %>-<%= url %>-<%= size %>'})
.src('http://ig.ft.com/sites/elections/2016/uk/eu-referendum/index.html', ['1024x768', '480x640'], {crop:false, filename:'<%= time %>-<%= url %>-<%= size %>'})
.src('www.itv.com/news/', ['1024x768', '480x640'], {crop:true, filename:'<%= time %>-<%= url %>-<%= size %>'})
.src('www.telegraph.co.uk', ['1024x768', '480x640'], {crop:false, filename:'<%= time %>-<%= url %>-<%= size %>'})
.src('http://news.sky.com', ['1024x768', '480x640'], {crop:false, filename:'<%= time %>-<%= url %>-<%= size %>'})
.src('http://election.news.sky.com/referendum', ['1024x768', '480x640'], {crop:true, filename:'<%= time %>-<%= url %>-<%= size %>'})
.src('www.wsj.com/europe', ['1024x768', '480x640'], {crop:false, filename:'<%= time %>-<%= url %>-<%= size %>'})
.src('http://www.independent.co.uk/news/uk/politics/eu-referendum-poll-polls-results-latest-live-tracker-who-will-win-brexit-remain-leave-britain-uk-a7094206.html', ['1024x768', '480x640'], {crop:false, filename:'<%= time %>-<%= url %>-<%= size %>'})
.src('http://www.express.co.uk/news/politics/682835/EU-referendum-result-European-Union-Leave-Remain-In-Out', ['1024x768', '480x640'], {crop:false, filename:'<%= time %>-<%= url %>-<%= size %>'})
.src('https://www.buzzfeed.com/aliciamelvillesmith/its-almost-over', ['1024x768', '480x640'], {crop:false, filename:'<%= time %>-<%= url %>-<%= size %>'})
.src('http://www.bloomberg.com/graphics/2016-brexit-referendum/', ['1024x768', '480x640'], {crop:false, filename:'<%= time %>-<%= url %>-<%= size %>'})
.src('http://www.dailymail.co.uk/home/index.html', ['1024x768', '480x640'], {crop:false, filename:'<%= time %>-<%= url %>-<%= size %>'})
.dest(__dirname)
.run()
.then(function() {
    console.log('done!');
});
