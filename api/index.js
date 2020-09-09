'use strict';

const Twitter = require('twitter');
const createSVG = require('../src/createSVG');
const layouts = require('../src/layouts');

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const deploy_env = process.env.DEPLOY_ENV || 'develop';
const isProduction = deploy_env === 'production';

module.exports = async (req, res) => {
  const {
    id,
    layout = 'normal',
    show_border = 'on',
    show_retweet = 'on',
    show_reply = 'on'
  } = req.query;

  if (!id) {
    res.status(400).send('Bad Parameter.');
    return;
  }

  const option = { 
    show_border: show_border === 'on',
    show_retweet: show_retweet === 'on',
    show_reply: show_reply === 'on',
    ...(layouts[layout] || layouts.normal)
  };

  const params = {
    screen_name: id,
    count: 10,
    include_rts: option.show_retweet,
    exclude_replies: !option.show_reply
  };

  const tweets = await client.get('statuses/user_timeline', params).catch(e => {
    console.error(e);
    return undefined;
  });

  if (!tweets) {
    res.status(400).send('Bad Request.');
    return;
  }

  const svg = await createSVG(tweets, option).catch(e => {
    console.error(e);
    return undefined;
  });

  if (!svg) {
    res.status(500).send('Can not create SVG.');
    return;
  }

  if (isProduction) {
    res.setHeader('Cache-Control', `public, max-age=${60 * 60}`);
  }

  res.status(200);
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(svg);
};
