# github-readme-twitter
[![Dependabot](https://badgen.net/badge/Dependabot/enabled/green?icon=dependabot)](https://dependabot.com/)

## What is this?
Display the latest tweets on your github readme.

## Usage
Insert the code below into your Github readme.

Change the `?id=` value to your Twitter's screen name.
```
[![github-readme-twitter](https://github-readme-twitter.gazf.vercel.app/api?id=gazff)](https://github.com/gazf/github-readme-twitter)
```

## Example
### @twitter

`https://github-readme-twitter.gazf.vercel.app/api?id=twitter`

[![github-readme-twitter](https://github-readme-twitter.gazf.vercel.app/api?id=twitter)](https://github.com/gazf/github-readme-twitter)

### @nodejs
Add `?layout=wide` parameter

`https://github-readme-twitter.gazf.vercel.app/api?id=nodejs&layout=wide`

[![github-readme-twitter](https://github-readme-twitter.gazf.vercel.app/api?id=nodejs&layout=wide)](https://github.com/gazf/github-readme-twitter)

### @github
Add `?dark_mode=on` parameter

`https://github-readme-twitter.gazf.vercel.app/api?id=github&dark_mode=on`

[![github-readme-twitter](https://github-readme-twitter.gazf.vercel.app/api?id=github&dark_mode=on)](https://github.com/gazf/github-readme-twitter)

## Available parameters
### `id`
Specify the screen name of twitter.

**`id` must always be specified.**

### `layout` (optional)
Specify the layout.
+ `normal`: 300 x 285, three tweets **(default)**
+ `wide`: 420 x 205, two tweets

### `show_border` (optional)
Specify whether to display border.
+ `on`: display border **(default)**
+ `off`: hide border

### `show_retweet` (optional)
Specify whether to display retweet.
+ `on`: display retweet **(default)**
+ `off`: hide retweet

### `show_reply` (optional)
Specify whether to display reply.
+ `on`: display reply **(default)**
+ `off`: hide reply

### `dark_mode` (optional)
Specify whether to display reply.
+ `on`: use darkmode
+ `off`: **(default)**

## Host with your Vercel account
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Fgazf%2Fgithub-readme-twitter)
