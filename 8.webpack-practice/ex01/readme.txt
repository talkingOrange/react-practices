ex01: js module 번들링 하기

1. 설치 패키지
$npm i -D express webpack webpack-cli

2. 스크립팅
  npx webpack ./src/index.js (번들링-이 작업을 자동화하기 위해 build 설정추가)
   npx webpack ./src/index.js -o ./public

  "scripts": {
    "start": "node dev-server",
    "build": "npx webpack ./src/index.js -o ./public"
  }


3. 빌드
$ npm run build

4. 실행
$ npm start  

