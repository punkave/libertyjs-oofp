console.log('moog, example 2: the problem with taking action in constructors');

var synth = require('moog')();

synth.define('dog', {
  construct: function(self, options) {
    self.name = options.name;
    self.wake = function() {
      console.log(self.name + ' woke up.');
    };
    self.wake();
  }
});

synth.define('lazy-dog', {
  extend: 'dog',
  construct: function(self, options) {
    self.wake = function() {
      console.log(self.name + ' slept all day.');
    }
  }
});

// Doesn't work: the lazy dog still wakes up

var dog = synth.create('lazy-dog', { name: 'Bela' });
