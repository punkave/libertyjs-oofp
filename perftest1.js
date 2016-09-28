selfTest();
protoTest();

function selfTest() {
  console.log('Self pattern test');
  var start = Date.now();

  var sprites = [];
  var player;
  var i, tick;
  var width = 600, height = 600;

  function Sprite() {

    var self = this;
    self.x = width / 2;
    self.y = height / 2;
    sprites.push(self);

    self.tick = function() {
      self.x += self.dx;
      self.y += self.dy;
      self.bounds();
    };

    self.bounds = function() {
      if ((self.x < 0) || (self.x >= width)) {
        self.dx = -self.dx;
        self.x += self.dx;
      }
      if ((self.y < 0) || (self.y >= width)) {
        self.dy = -self.dy;
        self.y += self.dy;
      }
    };

  }

  function Alien() {

    Sprite.call(this);
    var self = this;
    self.x = Math.random() * width;
    self.y = Math.random() * height;
    var superTick = self.tick;
    self.tick = function() {
      if (player.x < self.x) {
        self.dx = -1;
      } else {
        self.dx = 1;
      }
      if (player.y < self.y) {
        self.dy = -1;
      } else {
        self.dy = 1;
      }
      superTick();
    };

  }

  function Player() {
    Sprite.call(this);
    var self = this;
  }

  player = new Player();

  for (i = 0; (i < 1000); i++) {
    new Alien();
  }

  var afterInit = Date.now();

  console.log('construct time:');
  console.log(afterInit - start);

  for (tick = 0; (tick < 60); tick++) {
    for (i = 0; (i < sprites.length); i++) {
      sprites[i].tick();
    }
  }

  var end = Date.now();

  console.log('60 frames time:');
  console.log(end - afterInit);
}

function protoTest() {
  console.log('Prototypal inheritance test');
  var start = Date.now();

  var sprites = [];
  var player;
  var i, tick;
  var width = 600, height = 600;

  function Sprite() {
    this.x = width / 2;
    this.y = height / 2;
    sprites.push(this);
  }

  Sprite.prototype.tick = function() {
    this.x += this.dx;
    this.y += this.dy;
    this.bounds();
  };

  Sprite.prototype.bounds = function() {
    if ((this.x < 0) || (this.x >= width)) {
      this.dx = -this.dx;
      this.x += this.dx;
    }
    if ((this.y < 0) || (this.y >= width)) {
      this.dy = -this.dy;
      this.y += this.dy;
    }
  };

  function Alien() {
    Sprite.call(this);
    this.x = Math.random() * width;
    this.y = Math.random() * height;
  }

  Alien.prototype = Object.create(Sprite.prototype);
  Alien.prototype.constructor = Alien;

  Alien.prototype.tick = function() {
    if (player.x < this.x) {
      this.dx = -1;
    } else {
      this.dx = 1;
    }
    if (player.y < this.y) {
      this.dy = -1;
    } else {
      this.dy = 1;
    }
    Sprite.prototype.tick.call(this);
  };

  function Player() {
    Sprite.call(this);
  }

  Player.prototype = Object.create(Sprite.prototype);
  Player.prototype.constructor = Player;

  player = new Player();

  for (i = 0; (i < 1000); i++) {
    new Alien();
  }

  var afterInit = Date.now();

  console.log('construct time:');
  console.log(afterInit - start);

  for (tick = 0; (tick < 60); tick++) {
    for (i = 0; (i < sprites.length); i++) {
      sprites[i].tick();
    }
  }

  var end = Date.now();

  console.log('60 frames time:');
  console.log(end - afterInit);
}

