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
    //console.log("enemy.x: "+this.x+" enemy.y: "+ this.y);
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

//Player update method
Player.prototype.update = function() {
        this.x = this.x;
        this.y = this.y;
        this.checkCollisions();
        this.win();

    }
    //Player render the player
Player.prototype.render = function() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    }
    //handle keys
Player.prototype.handleInput = function(direction) {
    switch (direction) {
        case 'left':
            if (this.x >= 101) { this.x = this.x - 101; }
            console.log("x: "+this.x+" "+"y: "+this.y);
            break;
        case 'up':
            if( this.y>=83){this.y = this.y - 83;}
            console.log("x: "+this.x+" "+"y: "+this.y);
            break;
        case 'right':
            if (this.x<404){this.x = this.x + 101;}
            console.log("x: "+this.x+" "+"y: "+this.y);
            break;
        case 'down':
            if(this.y<415){this.y = this.y + 83;}
            console.log("x: "+this.x+" "+"y: "+this.y);
            break;
    }

};
//set the p;layer back to the positionin the beginnning 
Player.prototype.reset = function() {
    this.y = 415;
    this.x = 202;
};

//check if the player and enemy are in the same "square" in the grid
Player.prototype.checkCollisions = function() {
    for (var i = 0; i < allEnemies.length; i++) {
        if (this.x >= allEnemies[i].x &&this.x<allEnemies[i].x+51 &&this.y === allEnemies[i].y+20 ) {
            console.log("coliisssssssssion");
            this.reset();
        }

    }

}
//check if the player has a WIN. A winhappens when the player rich the water (this.y=0)
// Get the modal
var modal = document.getElementById('myModal');
var btn= document.getElementById('myBtn');

Player.prototype.win= function(){
    var p= this; //saving the "this" as the Player object
     if( this.y ===0){
        modal.style.display = "block";
        btn.onclick = function() {
            modal.style.display = "none"; 
           p.reset();
        }
           
            console.log("WINNNNNNNNNNNNNNNNN");
    }
  
      
    }


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(0, 63, 256), new Enemy(101, 146, 200), new Enemy(202, 229, 210)];
var player = new Player(202, 415);
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