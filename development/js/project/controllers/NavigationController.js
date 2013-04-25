goog.provide('example.controllers.NavigationController');

goog.require('goog.events.EventTarget');
goog.require('goog.events');
goog.require('goog.History');
goog.require('goog.history.Html5History');
goog.require('goog.history.EventType');
goog.require('goog.string');

/**
 * @constructor
 */
example.controllers.NavigationController = function(){
  goog.base(this);

  // a toggle of whether to use history API
  this._useHistoryAPI = null;

  // the current token
  this._token = null;

  // the history object
  this._navHistory = null;
};
goog.inherits(example.controllers.NavigationController, goog.events.EventTarget);
goog.addSingletonGetter(example.controllers.NavigationController);


example.controllers.NavigationController.prototype.init = function(){
  this._useHistoryAPI = (example.controllers.NavigationController.Implementation === example.controllers.NavigationController.HISTORY_API);

  if(this._useHistoryAPI) {
  	this._navHistory = new goog.history.Html5History();
  	this._navHistory.setUseFragment(false);
  }else {
  	var input = goog.dom.createDom('input');
  	var iframe = goog.dom.createDom('iframe');
  	this._navHistory = new goog.History(false, null, input, iframe);
  }

  // the current token
  this._token = null;

  goog.events.listen(this._navHistory, goog.history.EventType.NAVIGATE, this.onNavigate, false, this);

  this._navHistory.setEnabled(true);
};


example.controllers.NavigationController.prototype.setToken = function(token, title){
	// if using hash, make sure the '/' is prepended
	if(!this._useHistoryAPI) {
		if(!goog.string.startsWith(token, '/')) {
			token = ('/').concat(token);
		}
	}

	this._navHistory.setToken(token ,title);
};


example.controllers.NavigationController.prototype.getToken = function(){
	var token = this._navHistory.getToken();
	if(goog.string.startsWith(token, '/')) {
		token = token.substring(1);
	}
	return token;
};


example.controllers.NavigationController.prototype.replaceToken = function(token, title){
	this._navHistory.replaceToken(token ,title);
};


example.controllers.NavigationController.prototype.handleToken = function(token){
	console.log('handle token: ' + token);
};


example.controllers.NavigationController.prototype.onNavigate = function(e){
	// validate the token by HTML5 history API support,
	// optionally append or remove hash fragment,
	// and reset the window location
	var tokenStr = goog.string.remove(window.location.href, example.Url.ORIGIN);

	if(e.token === '' && tokenStr !== '') {
		if(this._useHistoryAPI) {
			// indicates a possible hash bang to be removed
			if(goog.string.startsWith(tokenStr, '#/')) {
				var token = tokenStr.substring(2);
				window.location = example.Url.ORIGIN + token;
			}
		}else{
			// indicates a possible lack of hash bang
			if(!goog.string.startsWith(tokenStr, '#/')) {
				var token = ('#/').concat(tokenStr);
				window.location = example.Url.ORIGIN + token;
			}
		}

		return false;
	}

	// skip duplicated token returned by the closure html5History API
	if(this._token === e.token) return false;
	else this._token = e.token;

	this.handleToken( this.getToken() );
};


example.controllers.NavigationController.HASH = 'hash';
example.controllers.NavigationController.HISTORY_API = 'history_api';
example.controllers.NavigationController.Implementation = (goog.history.Html5History.isSupported() ? example.controllers.NavigationController.HISTORY_API : example.controllers.NavigationController.HASH);