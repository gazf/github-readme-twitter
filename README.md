# github-readme-twitter
[![Dependabot](https://badgen.net/badge/Dependabot/enabled/green?icon=dependabot)](https://dependabot.com/)

## What is this?
Display the latest 3 tweets on your github readme.

## Usage
Insert the code below into your Github readme.

Change the `?id=` value to your Twitter's screen name.
```
[![github-readme-twitter](https://github-readme-twitter.gazf.vercel.app/api?id=gazff)](https://github.com/gazf/github-readme-twitter)
```

## Example
### @twitter
[![github-readme-twitter](https://github-readme-twitter.gazf.vercel.app/api?id=twitter)](https://github.com/gazf/github-readme-twitter)

### @nodejs
Add `?layout=wide` parameter

[![github-readme-twitter](https://github-readme-twitter.gazf.vercel.app/api?id=nodejs&layout=wide)](https://github.com/gazf/github-readme-twitter)

## Available parameters
### `id`
Specify the scree name of twitter.

**`id` must always be specified.**

### `layout` (optional)
Specify the layout. The default is `normal`.

+ `normal`: 300 x 285, three tweets
+ `wide`: 420 x 205, two tweets

## Host with your Vercel account
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Fgazf%2Fgithub-readme-twitter)
