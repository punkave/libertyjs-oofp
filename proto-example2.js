// This works in IE8 and later

console.log('Prototypal inheritance, example two: subclassing and "super"/"parent"');

function Dog(name) {
  this.name = name;
}

Dog.prototype.speak = function(s) {
  console.log(this.name + ' ' + s);
};

Dog.prototype.bark = function() {
  this.speak('barked.');
};

function Collie(name) {
  Dog.call(this, name);
  this.speak('is a collie!');
}

// Create the object that provides default values for all properties
// of an object created by the Collie constructor. By calling Object.create
// we essentially make a generic Dog without running the Dog constructor.
// We can't just say Collie.prototype = Dog.prototype because if we did,
// our additions of new methods would actually modify every Dog, not
// just every Collie.
//
// This is kosher since IE9. It's uglier before IE9

Collie.prototype = Object.create(Dog.prototype);

// Make sure the constructor property of the prototype object for
// Collies is set to the Collie constructor function, just in case someone
// wants to call that explicitly and get a reasonable result
Collie.prototype.constructor = Collie;

// Override the "bark" method
Collie.prototype.bark = function() {
  // Call "superclass" version
  Dog.prototype.bark.call(this);
  // Now extend it by doing more
  this.speak('then herded some sheep.');
};

var collie = new Collie("Jane");
collie.bark();
