var express = require('express');
var router = express.Router();
var userModel = require('../models/user')
const PAGE_STEP = 2;

router.get('/', function(req, res, next) {
    res.render('index')
})
router.get('/user', function(req, res, next) {
    var page = req.query.page;
    console.log(page)
    if (page) {
        var page = parseInt(page);
        var skip = (page - 1) * PAGE_STEP
        userModel.find({})
            .skip(skip)
            .limit(PAGE_STEP)
            .then(data => {
                userModel.countDocuments({})
                    .then(total => {
                        var tongsopage = Math.ceil(total / PAGE_STEP)
                        res.json({
                            total: total,
                            tongsopage: tongsopage,
                            data: data
                        })

                    })
            })
            .catch(err => {
                res.json('loi')
            })
    } else {
        userModel.find({})
            .then(data => {
                return res.json(data)
            })
            .catch(err => {
                return res.json('loi')
            })
    }
});

module.exports = router;