// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x > 500) {
        this.x = 0;
    }
    this.x = this.x + this.speed * dt;
    //this.y = this.y + this.speed * dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
}

//update method
Player.prototype.update = function(dt) {
        this.x = this.x;
        this.y = this.y;

    }
    //render the player
Player.prototype.render = function() {
        console.log(this.sprite);
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    }
    //handle keys
Player.prototype.handleInput = function(direction) {
    switch (direction) {
        case 'left':
            if (this.x > 100) { this.x = this.x - 100; }
            console.log("left");
            break;
        case 'up':
            this.y = this.y - 83;
            console.log("up");
            break;
        case 'right':
            this.x = this.x + 100;
            console.log("right");
            break;
        case 'down':
            this.y = this.y + 83;
            console.log("down");
            break;
    }

};
Player.prototype.checkCollisions = function(allEnemies) {
    for (var i = 0; i < allEnemies.length; i++) {
        if (this.x >= allEnemies[i].x && this.x < allEnemies[i].x + 100 &&
            this.y >= allEnemies[i].y && this.y < allEnemies[i].x + 83) {
            console.log("coliisssssssssion");
            this.x = 0;
            this.y = 400;
        }

    }

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player(0, 400);
var allEnemies = [new Enemy(0, 83, 256), new Enemy(101, 166, 256), new Enemy(202, 249, 256)];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});