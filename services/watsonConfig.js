const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

exports.queryWatson = function(body) {
  let personalityInsights = new PersonalityInsightsV3({
    "url": 'https://gateway.watsonplatform.net/personality-insights/api',
    "username": '6cf44ed0-b68d-4867-9def-84b2cf03b2c4',
    "password": 'kHgqTmBVxmRG',
    "version_date": '2016-10-19'
  });

  let contentItems = [];

  body.forEach( tweet => {
    contentItems.push({
      "language" : "en",
      "content" : tweet,
      "contenttype" : "application/json"
    })
  });

  let params = {
    content_items: [{
        "contentItems": contentItems
    }],
    consumption_preferences: true,
    raw_scores: true,
    headers: {
      'accept-language': 'en',
      "Content-Type": "text/plain;charset=utf-8"
    }
  };

  personalityInsights.profile(params, (err, response) => {
    if(err){ console.log('The Error:', JSON.stringify(err));}
    console.log("Success!!", response)
  })

}
