console.log('Self pattern, example five: if you REALLY hate "this"');

function Dog(name) {
  var self = {};
  self.name = name;

  self.bark = function() {
    console.log(self.name + ' barked.');
  };

  self.barkAfterOneSecond = function() {
    setTimeout(self.bark, 1000);
  }

  // Fun fact: this actually matters now!
  return self;
}

var dog = new Dog("Bella");
dog.bark();
dog.barkAfterOneSecond();
