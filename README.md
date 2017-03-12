# WillCode4Food

Team Members: Bryan Nguyen, Andrew Cordivari, Nicole Zhou, Ed Wade, Eric Oliveira


## Twitter API
`npm install -s twitter`

```js
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  bearer_token: ''
});

//client.get(path, params, callback);

let hashtag="#taco";
let resultingTweets;

client.get('search/tweets', {q: hashtag, count: 100}, function(error, tweets, response) {
  if(error) throw error;
  console.log(tweets);  // The tweets.
  resultingTweets = tweets;
  console.log(response);  // Raw response object.
});
```

## Watson API
```js
const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

let personality_insights = new PersonalityInsightsV3({
  "url": 'https://gateway.watsonplatform.net/personality-insights/api',
  "username": '',
  "password": '',
  "version_date": '',
  "headers": {}
});

//GET from Twitter API and build the profile obj, to be passed in to Watson.
//Each obj should have:
//         "language" : "en",
//         "content" : 'Tweet text goes here',
//         "contenttype" : "application/json"
let profile = [{}, {}, {}];

let params = {
  content_items: [{
       "contentItems": profile
  }],
  consumption_preferences: true,
  raw_scores: true,
  headers: {
    'accept-language': 'en',
    "Content-Type": "text/plain;charset=utf-8"
  }
};


personality_insights.profile(params, callBack); //callBack(error, response) {}

```
