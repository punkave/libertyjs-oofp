console.log('Self pattern, example two: inheritance and the super pattern');

function Dog(name) {
  var self = this;
  self.name = name;

  self.bark = function() {
    console.log(self.name + ' barked.');
  };
}

function Collie(name) {
  var self = this;
  Dog.call(this, name);

  var superBark = self.bark;
  self.bark = function() {
    superBark();
    console.log('Then she herded some sheep.');
  };
}

var collie = new Collie("Jane");
collie.bark();
