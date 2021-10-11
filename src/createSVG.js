'use strict';

import * as d3 from 'd3'
import { JSDOM } from 'jsdom'
import fetch from 'node-fetch'

import css from './style.css.js'
import twitterIcon from './twitter.svg.js'

const getBase64Image = async (url) => {
  const response = await fetch(url);
  const arrayBuffer = await response.buffer();
  return 'data:image/png;base64,' + arrayBuffer.toString('base64');
};

const appendDefs = (node, option) => {
  // append css
  node.append('style').html(css);
  // append clipPath
  node.append('clipPath')
    .attr('id', 'clipCircle')
    .append('circle')
      .attr('r', 20)
      .attr('cx', 20)
      .attr('cy', 20);
  // append linearGradient
  const lg = node.append('linearGradient')
    .attr('id', 'lg0')
    .attr('x1', '0%').attr('y1', '100%')
    .attr('x2', '0%').attr('y2', '0%')
  lg.append('stop')
    .attr('offset', 0)
    .attr('stop-color', '#fff')
    .attr('stop-opacity', 1);
  lg.append('stop')
    .attr('offset', '100%')
    .attr('stop-color', '#fff')
    .attr('stop-opacity', 0);
};

const appendBackground = (node, option) => {
  if (option.show_border) {
    node.append('rect')
      .attr('class', 'card-bg')
      .attr('x', 0.5).attr('y', 0.5)
      .attr('rx', 4.5)
      .attr('width', option.width - 1)
      .attr('height', "99%");
  }
};

const appendHeader = (node, option) => {
  // append twitter icon
  node.append('g')
    .attr('transform', 'translate(20, 10)')
    .attr('x', 0).attr('y', 0)
    .html(twitterIcon);
  //append title
  node.append('g')
    .attr('transform', 'translate(65, 35)')
    .attr('x', 0).attr('y', 0)
    .append('text')
      .attr('class', 'header')
      .attr('x', 0).attr('y', 0)
      .text('Latest Tweets');
};

const appendTweet = (node, context, option) => {
  const { x, y, icon, text, user } = context;

  const g = node.append('g')
    .attr('transform', `translate(${x}, ${y})`)
    .attr('x', 0).attr('y', 0);

  g.append('line')
    .attr('x1', 0).attr('y1', 0)
    .attr('x2', option.width - 10).attr('y2', 0)
    .attr('stroke', '#aaa')
    .attr('stroke-width', 0.5);

  if (icon) {
    g.append('g')
      .attr('transform', 'translate(0, 18)')
      .append('image')
        .attr('class', 'tw-icon')
        .attr('href', icon)
        .attr('width', 40).attr('height', 40)
        .attr('x', 0).attr('y', 0)
        .attr('clip-path', 'url(#clipCircle)');
  }
  
  const tweet = g.append('foreignObject')
    .attr('x', 50).attr('y', 0)
    .attr('width', option.width - 60).attr('height', 70)
    .append('div')
      .attr('xmlns', 'http://www.w3.org/1999/xhtml')
      .attr('class', 'tw-wrapper')
      .attr('height', '100%');
  
  const header = tweet.append('p')
    .attr('class', 'tw-header')
    .attr('width', '100%');
  
  header.append('span')
    .attr('class', 'tw-name')
    .text(user.name);
  
  header.append('span')
    .attr('class', 'tw-screen-name')
    .text(`@${user.screen_name}`);
  
  tweet.append('p')
    .attr('class', 'tw-text')
    .text(text);
  
  g.append('rect')
    .attr('x', 50).attr('y', 55)
    .attr('width', option.width - 60).attr('height', 15)
    .attr('fill', 'url(#lg0)');
};

const createSVG = async (tweets, option) => {
  const getIconAsync = getBase64Image(tweets[0].user.profile_image_url_https)
    .catch(() => undefined);

  const document = new JSDOM().window.document;
  const svg = d3.select(document.body).append('svg')
    .attr('width', option.width).attr('height', option.height)
    .attr('viewBox', `0 0 ${option.width} ${option.height}`)
    .attr('xmlns', 'http://www.w3.org/2000/svg');

  appendDefs(svg.append('defs'), option);
  appendBackground(svg, option);
  appendHeader(svg, option);

  const icon = await getIconAsync;
  tweets.slice(0, option.count).forEach((tweet, index) => {
    appendTweet(svg, {
      x: 5, y: 50 + (index * 80),
      icon: icon,
      ...tweet
    }, option);
  });

  return document.body.innerHTML;
};

export default createSVG;
