1. backend
    1) 테스트(개발 모드)
        eclipse ctrl + f11

- 터미널에서 해당 명령어로 build success 확인하기.
C:\Users\pc\Desktop\poscodx2023\eclipse\react-practices\emaillist\backend> mvn exec:exec clean package

    2) 빌드(배포)
        # mvn -f emaillist/backend exec:exec clean package

    3) 테스트
        # java -Dspring.profiles.active=production -jar emaillist/backend/target/emaillist.jar
