var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index')
});
router.post('/', function(req, res) {
    console.log("req.content:",req.body.content)
    if (!req.body.content)
        res.json({
            message: "Tại sao ko post nội dung lên hả???"
        })
    else
        res.json({
            frontendMessage: req.body.content,
            message: "Nam yêu Linh heo nhiều lắm nè"
        })
});

module.exports = router;
