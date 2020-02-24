var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res) {
    res.json({
        frontendMessage: req.content,
        message: "Nam yêu Linh heo nhiều lắm nè"
    })
});

module.exports = router;
