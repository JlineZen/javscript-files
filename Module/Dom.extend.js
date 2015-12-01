Dom = (function(win, DOM) {
	var slice = [].slice,
			hasOwn = Object.prototype.hasOwnProperty,
			DOM = window.DOM || {};
			_isType = function(o) {
				return typeof o === 'object' ? (Object.prototype.toString.call(o).slice(8, -1)) : 'undefined';
			}
			isFunction = function(o) {
				return _isType(o) === 'Function';
			},
			isObject = function(o) {
				return _isType(o) === 'Object';
			},
			isNumber = function(o) {
				return _isType(o) === 'Number';
			},
			isString = function(o) {
				return _isType(o) === 'String';
			},
			isWindow = function(o) {
				return o !== null && o.window == o;
			},
			isDocument = function(o) {
				return o != null && o.nodeType == o.DOCUMENT_NODE;
			};
		DOM.isFunction = isFunction;
		DOM.isObject = isObject;
		DOM.isNumber = isNumber;
		DOM.isString = isString;
		DOM.isWindow = isWindow;
		DOM.isDocument = isDocument; 
}(window, DOM || {}));