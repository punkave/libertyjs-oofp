console.log('Self pattern, example 3b: simple forEach win!');

function Dog(name) {
  var self = this;
  self.name = name;

  self.sniff = function(dog) {
    console.log(this.name + ' sniffed ' + dog.name + '.');
  };

  self.sniffFriends = function(friends) {
    friends.forEach(function(dog) {
      self.sniff(dog);
    });
  };
}

var bella = new Dog('Bella');
var tuli = new Dog('Tuli');
var roma = new Dog('Roma');

bella.sniff(tuli);

bella.sniffFriends([ tuli, roma ]);
