var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('localhost:27017/shopping');
var products = [
	new Product({
		imagePath:'https://s-media-cache-ak0.pinimg.com/originals/2d/df/d4/2ddfd4d3806e64ee197c8fe5be076ba9.jpg',
		title:'GTA5',
		description:'Mission Game!',
		price:500
	}),
	new Product({
		imagePath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPqF6fiiyYv9dh3I8_mVLrxjMm9M5ah_pdymley3wBEqXkv-bU',
		title:'Freedom Fighters',
		description:'Mission Game!',
		price:100
	}),
	new Product({
		imagePath:'https://upload.wikimedia.org/wikipedia/en/c/c6/Far_Cry_3_PAL_box_art.jpg',
		title:'FarCry3',
		description:'Mission Game!',
		price:400
	}),
	new Product({
		imagePath:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSFOj51ZO0eLpVHfHFIrFT2hwutrQfPVvdUs7Qx-OjumcWknrBmXA',
		title:'Counter Strike',
		description:'Multiplayer Game!',
		price:200
	}),
	new Product({
		imagePath:'http://images.nintendolife.com/games/ds/need_for_speed_most_wanted/cover_large.jpg',
		title:'NFS MostWanted 2005',
		description:'Racing Game!',
		price:300
	}),
	new Product({
		imagePath:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjknwHjV2_NbbsHut_uK-6a_ROydD3_Z04Tes0a5VzVkcIKStB',
		title:'Age of Empires',
		description:'Strategy Game!',
		price:50
	})
];
var done=0;
for(var i=0;i<products.length;i++)
{
	products[i].save(function(err,result){
		done++;
		if(done==products.length){
			exit();
		}
	});
}
function exit(){
	mongoose.disconnect();
}
