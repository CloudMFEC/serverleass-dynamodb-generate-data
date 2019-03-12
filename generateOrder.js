"use strict";
var AWS = require("aws-sdk");
var dynamodb = new AWS.DynamoDB();

module.exports.hello = async (event, context) => {
  for (let index = 1; index < 100; index++) {

    let params = {
      Item: {
        order_id: {
          S: "O" + index.toString()
        },
        product_id: {
          S: "P" + index.toString()
        },
        customer_id: {
          S: "C" + index.toString()
        },
        create_date: {
          S: new Date().toString()
        }
      },
      TableName: "OrderTable"
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
      message: "Generate Order successfully!",
    })
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
