console.log('Self pattern, example 3b: REALLY simple forEach win!');

function Dog(name) {
  var self = this;
  self.name = name;

  self.sniff = function(dog) {
    console.log(self.name + ' sniffed ' + dog.name + '.');
  };

  self.sniffFriends = function(friends) {
    // WHOA DUDE
    friends.forEach(self.sniff);
  };
}

var bella = new Dog('Bella');
var tuli = new Dog('Tuli');
var roma = new Dog('Roma');

bella.sniff(tuli);

bella.sniffFriends([ tuli, roma ]);
