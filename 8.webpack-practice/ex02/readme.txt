ex02: 번들링 환경(webpack.config.js) 설정

1. 설치 패키지
$npm i -D express webpack webpack-cli

2. 번들링 환경(webpack.config.js) 설정
   1) entry
   2) output

```
const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve("src/index.js"),
  output: {
    path: path.resolve("public"),
    filename: "assets/js/bundle.js",
  },
};

```


2. 스크립팅
 "scripts": {
    "start": "node dev-server",
    "build": "npx webpack"
  }


3. 빌드
$ npm run build

4. 실행
$ npm start  

