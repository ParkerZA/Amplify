const awsconfig = {
    "aws_project_region": "us-east-2",
    "aws_content_delivery_bucket": "pattern-20191212123114-hostingbucket-angular",
    "aws_content_delivery_bucket_region": "us-east-2",
    "aws_content_delivery_url": "http://pattern-20191212123114-hostingbucket-angular.s3-website.us-east-2.amazonaws.com",
    "aws_cognito_identity_pool_id": "eu-west-1:92968d07-e699-46d1-ac14-d7cfe84235ae",
    "aws_cognito_region": "eu-west-1",
    "aws_user_pools_id": "eu-west-1_qG51gVdvj",
    "aws_user_pools_web_client_id": "6642kr3dk05b9i608v0ce60u3u",
    "oauth": {
        "domain": "pattern29678cd4-29678cd4-angular.auth.us-east-2.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "http://localhost:4200/dashboard/",
        "redirectSignOut": "http://localhost/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS"
};


export default awsconfig;