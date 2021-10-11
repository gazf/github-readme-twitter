'use strict';

export default `
*{
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Meiryo, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
}
.card-bg{
  stroke: #dddddd;
  stroke-opacity: 1;
  fill: #fffefe;
}
.card-bg.darkmode{
  fill: #000;
}
.header{
  font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
  fill: #2f80ed;
}
.header.darkmode{
  fill: #fff;
}
.tw-wrapper{
  overflow: hidden;
}
.tw-header{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.tw-name{
  font-weight: bold;
  font-size: 13px;
}
.tw-name.darkmode{
  color: rgb(255,255,255);
}
.tw-screen-name{
  color: rgb(101, 119, 134);
  font-size: 12px;
  margin-left: .5em;
}
.tw-screen-name.darkmode{
  color: rgb(172, 204, 231);
}
.tw-text{
  color: rgb(20, 23, 26);
  font-size: 12px;
}
.tw-text.darkmode{
  color: rgb(227, 227, 227);
  font-size: 12px;
}
`;
