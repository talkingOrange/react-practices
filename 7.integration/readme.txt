1. backend
    1) 테스트(개발 모드)
        eclipse ctrl + f11

- 터미널에서 해당 명령어로 build success 확인하기.
C:\Users\pc\Desktop\poscodx2023\eclipse\react-practices\emaillist\backend> mvn exec:exec clean package

    2) 빌드(배포)
        # mvn -f emaillist/backend exec:exec clean package

    3) 테스트
        # java -Dspring.profiles.active=production -jar emaillist/backend/target/emaillist.jar


9090 : webpack 개발서버
8080: 톰캣 서버
8088: 테스트서버


2. frontend


3-1. deploy: ssh 연결 (ssh key 인증)
1) key 생성하기
    # ssh-keygen -t rsa -b 2048 -m PEM -C "sonrisa-bonita@naver.com"
2) key 생성 확인 (root에서 cd .ssh으로 가서 ll 하면 두가지의 키를 확인할 수 있다.)
    - private key(개인키): ~/.ssh/id_rsa
    - public key(공개키): ~/.ssh/id_rsa.pub

3) 공개키를 서버에 설치하기
    # mv ~/.ssh/id_rsa.pub ~/.ssh/authorized_keys


4) private key 잘 저장하기
    # cat id_rsa 
    모든 파일로 로컬에 'mykey_pem'라는 이름으로 저장 (메모장)

5) 접속 테스트
    # ssh -i mykey.pem root@192.168.0.178


3-2. deploy: Publish Over SSH 플러그인(Jenkins)

1) Publish Over SSH 플러그인 설치
2) Dashboard > Jenkins 관리 > System
    - 실행 서버(SSH server ) 등록: springboot-publish-server
    - 프로젝트의 빌드 후 조치 ( post-build action )의 send build artifacts over ssh 설정
      1. emaillist.jar : transfer 
