'use strict';
var AWS = require("aws-sdk");
var dynamodb = new AWS.DynamoDB();
module.exports.hello = async (event, context) => {


    for (let index = 1; index < 100; index++) {

        let params = {
          Item: {
            customer_id: {
              S: "C" + index.toString()
            },
            customer_name: {
              S: "chumnan"+index.toString()
            },
            customer_tel: {
                S: "0983696978"
              },
            customer_address: {
                  S: "Mars"
            }
          },
          TableName: "CustomerTable"
        };
    
        await new Promise(function(resolve, reject) {
          dynamodb.putItem(params, function(err, data) {
            if (err) reject(err, err.stack);
            else resolve(data); // successful response
          });
        });
    
      }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Generate Customer successfully!",
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
