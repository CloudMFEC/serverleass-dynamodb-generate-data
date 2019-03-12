# serverleass-dynamodb-generate-data
This is repo for learning serverless

### Pre-requisites ####
AWS Cli 
https://docs.aws.amazon.com/en_us/cli/latest/userguide/cli-chap-install.html

AWS IAM 
Access key ID and Secret Access key

Node JS
https://nodejs.org/en/download/

Serverless Framework
https://serverless.com/framework/docs/getting-started/

### install node_module ###
$npm install 

### Deploy  ###

# Set aws configure
$ aws configure

AWS Access Key ID [None]: accesskey

AWS Secret Access Key [None]: secretkey

Default region name [None]: ap-southeast-1

Default output format [None]:


#Deploy 
$serverless deplpoy 


### Output Deploy

Service Information

service: serverleass-dynamodb-generate-data

stage: dev

region: ap-southeast-1

stack: serverleass-dynamodb-generate-data-dev

resources: 29

api keys:

  None

endpoints:

  GET - https://uuid.execute-api.ap-southeast-1.amazonaws.com/dev/generate/customer

  GET - https://uuid.execute-api.ap-southeast-1.amazonaws.com/dev/generate/order

  GET - https://uuid.execute-api.ap-southeast-1.amazonaws.com/dev/generate/product

functions:

  generateCustomer: serverleass-dynamodb-generate-data-dev-generateCustomer

  generateOrder: serverleass-dynamodb-generate-data-dev-generateOrder

  generateProduct: serverleass-dynamodb-generate-data-dev-generateProduct
