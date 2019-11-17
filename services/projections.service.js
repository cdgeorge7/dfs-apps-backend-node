const { fetchProjectionsDataFromDB } = require("../db/projections.db");

const fetchProjectionDataService = (weekYear, projectionName) => {
  try {
    return fetchProjectionsDataFromDB(weekYear, projectionName);
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  fetchProjectionDataService
};
