var Twitter = require('twitter');

const extractTweetText = function(body) {
  return body.statuses.map( tweet => tweet.text )
}

exports.queryTwitter = function(query, queryWatson) {

  var client = new Twitter({
    consumer_key: 'kYMxhMF25J6pFwpsQOJ8HgIZO',
    consumer_secret: 'pmWuAcaE8KC0c2r6V2FUPkI1gJ7NlWXusM29PzJVOUjQkMd3U3',
    access_token_key: '1479259352-5OvLbChp9GxVaACc87EF5umsFO5SDsVIru80nOs',
    access_token_secret: 'GOMb8wh1U1ksJjNY8lpqsVBOW7yNuq1Hqi0P72emf8ezD'
  });

  let resultingTweets;

  console.log('Pinging twitter for  ', query);
  client.get('search/tweets', {q: query, count: 10}, function(error, tweets, response) {
    if(error) console.log(error);
    resultingTweets = extractTweetText(tweets);
    queryWatson(resultingTweets);
  });
}