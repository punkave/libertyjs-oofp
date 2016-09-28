console.log('Self pattern, example three: async win!');

function Dog(name) {
  var self = this;
  self.name = name;

  self.bark = function() {
    console.log(self.name + ' barked.');
  };

  self.barkAfterOneSecond = function() {
    setTimeout(self.bark, 1000);
  }
}

var dog = new Dog("Bella");
dog.bark();
dog.barkAfterOneSecond();
