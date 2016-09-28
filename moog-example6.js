// moog example 6: optionally async afterConstruct

console.log('moog, example 6: optionally async afterConstruct');

var synth = require('moog')();
var request = require('request');

synth.define('dog', {
  afterConstruct: function(self, callback) {
    self.wake();
    return self.observe(callback);
  },
  construct: function(self, options) {
    self.name = options.name;
    self.wake = function() {
      console.log(self.name + ' woke up.');
    };
    self.observe = function(callback) {
      return request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
        function(err, response, body) {
        if (err || (response.statusCode >= 400)) {
          return callback(err || response.statusCode);
        }
        var data = JSON.parse(body);
        console.log(self.name + ' looked at: ' + data.title);
        return callback(null);
      });
    };
    self.bark = function() {
      console.log(self.name + ' barked.');
    };
  },
});

synth.define('lazy-dog', {
  extend: 'dog',
  afterConstruct: function(self) {
    console.log(self.name + ' went back to sleep.');
  },
  construct: function(self, options) {
    self.wake = function() {
      console.log(self.name + ' slept all day.');
    }
  }
});

// We must create the lazy-dog asynchronously because its
// base class has an asynchronous afterConstruct method

synth.create('lazy-dog', { name: 'Bela' }, function(err, dog) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  dog.bark();
});
