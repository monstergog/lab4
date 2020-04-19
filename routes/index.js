
/*
 * GET home page.
 */

exports.view = function(req, res){
	res.render('index', {
	'projects': [
	  { 'name': 'Buy Buddy',
		'image': 'BuyBuddy.png',
		'id': 'project1'
	  }
	]  
	});
};