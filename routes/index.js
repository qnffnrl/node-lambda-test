let express = require("express");
let payload = require("../utils/payload-util");
let router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json(payload.success("home", {}));
});

router.get("/api/v1/status", function (req, res, next) {
  res.json(payload.success("fine", {}));
});

module.exports = router;