"use strict";

const hello = async (event) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Old log message");
  // console.log("New log message");
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.handler = hello;
