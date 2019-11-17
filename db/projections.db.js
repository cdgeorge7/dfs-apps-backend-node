const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2", endpoint: "http://localhost:8000" });

const fetchProjectionsDataFromDB = (weekYear, projectionName) => {
  const docClient = new AWS.DynamoDB.DocumentClient();
  const table = "GenericProjections";
  const params = {
    TableName: table,
    Key: {
      week_year: weekYear,
      projection_name: projectionName
    }
  };

  let promise = new Promise((resolve, reject) => {
    return docClient.get(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
  return promise;
};

module.exports = { fetchProjectionsDataFromDB };
