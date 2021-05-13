const router = require("express").Router();
const fileController = require("./controller/FileController");

router.post("/api/file", fileController.getFile);

module.exports = router;