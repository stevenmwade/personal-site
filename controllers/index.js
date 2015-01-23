var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	about: function(req, res) {
		res.render('about');
	},
	web: function(req, res) {
		res.render('work-web');
	},
	photo: function(req, res) {
		res.render('work-photo');
	},
	contact: function(req, res) {
		res.render('contact');
	}
};

module.exports = indexController;