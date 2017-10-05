var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('homework', { title: 'Hello, you are on tne homework page!' });
});

router.get('/:id', function(req, res, next) {
	console.log(req.params.id);
});

module.exports = router;