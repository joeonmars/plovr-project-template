goog.provide('example.main');

goog.require('goog.fx.anim');
goog.require('goog.dom');
goog.require('goog.style');
goog.require('soy');
goog.require('example.templates');
goog.require('example.controllers.NavigationController');

example.Config = {};

example.main = function( config ) {
	example.Config = config;
	
	goog.fx.anim.setAnimationWindow(window);

	//example.controllers.NavigationController.Implementation = example.controllers.NavigationController.HASH;
	example.main.controllers.navigationController.init();

	var helloWorld = soy.renderAsFragment(example.templates.helloWorld);
	goog.dom.appendChild(document.body, helloWorld);
};

example.main.controllers = {
	navigationController: example.controllers.NavigationController.getInstance()
};

goog.exportProperty(window, 'example', example);
goog.exportProperty(example, 'main', example.main);