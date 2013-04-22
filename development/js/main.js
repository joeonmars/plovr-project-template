goog.provide('example.main');

goog.require('goog.dom');
goog.require('goog.style');
goog.require('soy');
goog.require('example.templates');

example.main = function() {
	console.log('hello world!!!', TweenMax);
	goog.style.setStyle(document.body, 'transform', 'translate(0px, 0px)');

	var helloWorld = soy.renderAsFragment(example.templates.helloWorld);
	goog.dom.appendChild(document.body, helloWorld);
};

goog.exportProperty(window, 'example', example);
goog.exportProperty(example, 'main', example.main);