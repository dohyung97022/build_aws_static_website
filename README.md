# build_aws_static_website.sh
aws cli 를 이용하여 s3에 static website 를 배포하는 shell

### 사용방법
templates/dist 에 html 파일을 넣고   
build.sh 내의 
~~~
BUCKET_NAME=anybucketname1234
REGION=ap-northeast-2
FRONTEND_LOCATION=$PWD/templates/dist
~~~
변수를 변경 후 실행하면 됩니다.