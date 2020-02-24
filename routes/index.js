var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index')
});
router.post('/', function(req, res) {
    if (!req.content)
        res.json({
            message: "Tại sao ko post nội dung lên hả???"
        })
    else
        res.json({
            frontendMessage: req.content,
            message: "Nam yêu Linh heo nhiều lắm nè"
        })
});

module.exports = router;
