const {
  fetchProjectionDataService
} = require("../services/projections.service");

const getProjectionData = (req, res, next) => {
  fetchProjectionDataService(
    `${req.query.week}_${req.query.year}`,
    req.query.projectionName
  )
    .then(data => {
      res.json(data.Item);
      next();
    })
    .catch(e => {
      console.log(e.message);
      res.status(500).json({ error: e.message }) && next(e);
    });
};

module.exports = { getProjectionData };
