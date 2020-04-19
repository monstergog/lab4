
/*
 * GET home page.
 */

exports.view = function(req, res){
	res.render('index', {
	'projects': [
	  { 'name': 'Buy Buddy',
		'image': 'lorempixel.people.1.jpeg',
		'id': 'project1'
	  }
	]  
	});
};