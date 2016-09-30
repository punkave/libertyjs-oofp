console.log('self pattern, example 1: a self-aware Dog');

function Dog(name) {
  var self = this;
  self.name = name;

  self.bark = function() {
    console.log(self.name + ' barked.');
  };
}

var dog = new Dog("Roma");
dog.bark();
