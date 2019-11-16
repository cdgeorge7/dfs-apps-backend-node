const express = require("express");
const projectionsController = require("../controllers/projections.controller");

const router = express.Router();

router.get("/players/projections", projectionsController.getProjectionData);

module.exports = router;
