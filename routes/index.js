const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const savedPage = require("../client/src/pages/savedBooks");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

//saved page route
router.use("/seach");
  res.sendFile(path.join(__dirname, savedPage));

module.exports = router;
