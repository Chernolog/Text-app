var express = require('express');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var router = express.Router();
var Thefile = require('Example.json')
/*GET users listing. */
router.get('/', function(req, res, next) {
	req = new XMLHttpRequest();
	req.open ("GET", 'Example.json', true);
	req.onreadystatechange = function () {
		if (req.readyState === 4 && req.status === 200) {
			req.responseType = 'text';

		}
	};
	res.send(Thefile);
});

module.exports = router;
