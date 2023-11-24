BUCKET_NAME=anybucketname1234
REGION=ap-northeast-2
FRONTEND_LOCATION=$PWD/templates/dist

# bucket 생성
aws s3api create-bucket --bucket ${BUCKET_NAME} --region ${REGION}  --create-bucket-configuration LocationConstraint=${REGION}

# bucket public access 허용
aws s3api delete-public-access-block --bucket ${BUCKET_NAME}

# policy 파일 생성
cat bucket_policy.json

echo "{
    \"Version\": \"2012-10-17\",
    \"Statement\": [
        {
            \"Effect\": \"Allow\",
            \"Principal\": \"*\",
            \"Action\": \"s3:GetObject\",
            \"Resource\": \"arn:aws:s3:::$BUCKET_NAME/*\"
        },
        {
            \"Effect\": \"Allow\",
            \"Principal\": {
               \"AWS\": \"*\"
            },
            \"Action\": \"S3:PutBucketWebsite\",
            \"Resource\": \"arn:aws:s3:::$BUCKET_NAME\"
         }
    ]
}" > bucket_policy.json

# policy 적용
aws s3api put-bucket-policy --bucket ${BUCKET_NAME} --policy file://$PWD/bucket_policy.json

# 파일 업로드
aws s3 sync ${FRONTEND_LOCATION} s3://${BUCKET_NAME}/

# s3 website 적용
aws s3 website s3://${BUCKET_NAME}/ --index-document index.html --error-document error.html

# 엔드포인트
echo https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/index.html