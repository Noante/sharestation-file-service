const router = require("express").Router();
const fileController = require("./controller/FileController");

router.post("/api/file", fileController.saveFile);

module.exports = router;