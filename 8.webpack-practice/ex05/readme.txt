ex05: sass/scss 모듈 번들링

1. 설치 패키지
$ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass

2. 번들링 환경(webpack.config.js) 설정
   1) entry
   2) output
   3) devServer
   4) module
      module: {
          rules:[{
              test: /\.(c|sa|sc)ss$/i,
              use:['style-loader', 'css-loader', 'sass-loader']
          }]
      }   

3. 스크립팅
  "scripts": {
    "start": "npx webpack serve  --progress",
    "build": "npx webpack"
  }

4. 빌드
$ npm run build  

5. 실행
$ npm start