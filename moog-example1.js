console.log('moog, example 1: what barks in the morning, barks in the evening...');

var synth = require('moog')();

synth.define('dog', {
  construct: function(self, options) {
    self.bark = function() {
      self.name = options.name;
      console.log(self.name + ' barked.');
    };
  }
});

var dog = synth.create('dog', { name: 'Roma' });
dog.bark();
