//method1
/* In this way we can not use instanceof to test */
function extend(origin, source) {
	for (var key in source) {
		if (source.hasOwnProperty(key)) {
			origin[key] = source[key];
		}
	}
	return origin;
}

//method2
/*use a brige to connet*/
function A() {
	this.name = 'A';
	this.say = function(str) {
		console.log(str);
	};
}
A.prototype = {
	another: 'another'
};
function bridge() {}
bridge.prototype = A.prototype;
function B() { }
B.prototype = new bridge();
var a = new A();
var b = new B();
console.log(a);
console.log(b);
console.log(b.name);  //here b can not access A static variable and method, but it can with this "B.prototype = new A()"
console.log(b.another);
console.log(b instanceof A);



function C() {}
C.prototype = {
	a: '1'
};
var c = new C();
console.log(c.a);
C.prototype = {
	a: '2'
};
console.log(c.a);
