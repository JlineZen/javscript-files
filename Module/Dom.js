var DOM = (function(win) {
	var tool,
			doc = win.document,
			getById = function(id) {
				return typeof id === 'string' ? doc.getElementById(id) : null;
			},
			get = function(selector) {
				return doc.querySelectorAll(selector);
			};

		tool = {
			getById: getById,
			get    : get
		};

		return tool;	
}(window));