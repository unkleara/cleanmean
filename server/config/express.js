var express = require('express');

module.exports = function(app, config) {

		app.configure(function() {
				app.set('views', config.rootPath + '/server/views');
				app.set('view engine', 'jade');
				app.use(express.logger('dev'));
				app.use(express.urlencoded());
        app.use(express.json());
        app.use(express.methodOverride());
        app.use(express.favicon());
				app.use(express.static(config.rootPath + '/public'));
		});
};
