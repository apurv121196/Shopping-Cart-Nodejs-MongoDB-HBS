var express = require('express');
var router = express.Router();

var csrf = require('csurf');
var csrfProtection = csrf();

var Product = require('../models/product');
router.use(csrfProtection);
/* GET home page. */
router.get('/', function(req, res, next) {
	Product.find(function(err,docs){
		var productChunks=[];
		var chunksize=3;
		for(var i=0;i<docs.length;i+=chunksize)
		{
			productChunks.push(docs.slice(i,i+chunksize));
		}
 	res.render('shop/index', { title: 'Shopping Cart',products :productChunks });
	});
});

module.exports = router;
