ex04: css 모듈 번들링

1. 설치 패키지
$npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader

2. 번들링 환경(webpack.config.js) 설정
   1) entry
   2) output
   3) devServer
   4) modules

```
const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve("src/index.js"),
  output: {
    path: path.resolve("public"),
    filename: "assets/js/bundle.js",
  },
  devServer: {
    host: "0.0.0.0",
    port: 9090,
    liveReload: true,
    compress: true,
    hot: false,
  },
};


```


2. 스크립팅
 "scripts": {
    "start": "npx webpack serve --progress",
    "build": "npx webpack"
  }


3. 빌드
$ npm run build

4. 실행
$ npm start  

