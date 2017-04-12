// get the context and declare other variables
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
$(document).ready(function() {
  updateScoreboardMob();
  updateScoreboard();
  // Cheeky way to check if the user is on a screen only device, may hinder their game.
  var onMobile = false; //initiate as false
  // device detection
  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i
    .test(navigator.userAgent) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
    .test(navigator.userAgent.substr(0, 4))) onMobile = true;
if (onMobile) {
  canvas.height = 300;
  canvas.width = 300;
  playerX = canvas.width / 2;
  playerY = canvas.height - 20;
  playerSpeed = 0.8;
  canvasWidth = canvas.width;
  canvasHeight = canvas.height;
  $(".startButton").css("font-size", "20px");
  $(".controls").html(
    "<p>Don't let the enemies touch you or get to the other side!</p><h2> Tap to fire </h2>"
    )
}
$(".startButton").click(function() {
  $(".startScreen").hide();
  $(".gameOver").hide();
  $("#myCanvas").show();
  if (!gamePlaying) {
    gamePlaying = 1;
    init();
  }
  cirlceEffect();
});
});
var theGame;
var gamePlaying = 0;
var turnAround = false;
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var cursorX = 0;
var cursorY = 0;
var playerX = canvas.width / 2;
var playerY = canvas.height / 2;
var playerVelocityX = 0;
var playerVelocityY = 0;
var playerSpeed = 1.5;
var playerRadius = 5;
var playerfriction = 0.96;
var scoreArrayPC = [];
var scoreArrayMob = [];
var keyPressed = [];
var bulletCount = 0;
var bullets = [];
var bulletSpeed = 5;
var bulletLifetime = 100;
var enemyCount = 0;
var enemies = [];
var enemyWaveInterval = 1000;
var enemyWaveCounter = 1;
var enemiesToSpawn = 10;
var timeStat = 0;
var theInterval = 10;
var score = 0;
var mouseHeld = false;
// crosshair's image assigning.
var crosshairimg = new Image();
crosshairimg.src = '../images/crosshair.png';
// bullet's image assigning.
var bulletimg = new Image();
bulletimg.src = '../images/bullet.png'
  // bullet's splosion image assigning.
  var bulletsplodeimg = new Image();
  bulletsplodeimg.src = '../images/scorch.png'
  /*
* preventDefault
* Used to prevent the default behavior of
* double clicks and select start events.
*/

function preventDefault(event) {
  if (event.preventDefault) event.preventDefault();
  else event.returnValue = false;
  return false;
}
  // grabbing mouse pos

  function getMousePos(canvas, evt) {
   var rect = canvas.getBoundingClientRect();
   return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}
  // regular update function

  function cirlceEffect() {
    var r = 100;
    var numCircles = 50;
    for (var i = 0; i < numCircles; i++) {
      var angle = i * Math.PI / numCircles;
      var x = playerX + (r * Math.sin((i + 1) * angle))
      var y = playerY + (r * Math.cos((i + 1) * angle))
      bullets[bulletCount] = new Array(9);
    // have to floor because player co-ords can be a decimal due to friction multiplier
    var distance = Math.sqrt(Math.pow(cursorX - Math.floor(playerX), 2) +
      Math.pow(cursorY - Math.floor(playerY), 2));
    // spawn X
    bullets[bulletCount][0] = Math.floor(playerX - playerRadius);
    // spawn Y
    bullets[bulletCount][1] = Math.floor(playerY - playerRadius);
    // target X
    bullets[bulletCount][2] = x;
    // target Y
    bullets[bulletCount][3] = y;
    // alive bool
    bullets[bulletCount][4] = true;
    // opacity value
    bullets[bulletCount][5] = 1;
    // dx
    bullets[bulletCount][6] = (x - Math.floor(playerX)) / distance;
    // dy
    bullets[bulletCount][7] = (y - Math.floor(playerY)) / distance;
    // lifetime var
    bullets[bulletCount][8] = 0;
    bulletCount++;
  }
}

function spawnEnemies() {
  var rect = canvas.getBoundingClientRect();
  enemies[enemyCount] = new Array(9);
  var x = Math.floor(Math.random() * (canvasWidth - 25 + 1)) + 25;
  var y = 25;
  var tx = x
  var ty = canvasHeight + 15;
  if (onMobile == false) // if not on mobile, allow random direction attack
  {
    var whichSide = [1, 2, 3, 4];
    var whichSideRand = whichSide[Math.floor(Math.random() * whichSide.length)];
    switch (whichSideRand) {
      case 1:
      x = Math.floor(Math.random() * ((canvasWidth - 40) - 40 + 1)) + 40;
      y = 40;
      tx = x;
      ty = canvasHeight + 15;
      break;
      case 2:
      x = Math.floor(Math.random() * ((canvasWidth - 40) - 40 + 1)) + 40;
      y = canvasWidth - 40;
      tx = x;
      ty = -15;
      break;
      case 3:
      x = canvasWidth - 40;
      y = Math.floor(Math.random() * ((canvasWidth - 40) - 40 + 1)) + 40;
      tx = -15
      ty = y;
      break;
      case 4:
      x = 40;
      y = Math.floor(Math.random() * ((canvasWidth - 40) - 40 + 1)) + 40;
      tx = canvasWidth + 15;
      ty = y
      break;
    }
  }
  var distance = Math.sqrt(Math.pow(playerX - Math.floor(x), 2) + Math.pow(
    playerY - Math.floor(y), 2));
  // spawn X
  enemies[enemyCount][0] = x;
  // spawn Y
  enemies[enemyCount][1] = y;
  // target X
  enemies[enemyCount][2] = tx;
  // target Y
  enemies[enemyCount][3] = ty;
  // alive bool
  enemies[enemyCount][4] = true;
  // opacity value
  enemies[enemyCount][5] = 1;
  // dx
  enemies[enemyCount][6] = (Math.floor(tx) - x) / distance;
  // dy
  enemies[enemyCount][7] = (Math.floor(ty) - y) / distance;
  // speed var
  enemies[enemyCount][8] = 0.3;
  enemyCount++;
}

function getRandomColor() {
  /*too random, don't like it*/
  /*  var letters = '0123456789ABCDEF'.split('');

  var color = '#';

  for (var i = 0; i < 6; i++) {

    color += letters[Math.floor(Math.random() * 16)];

  }*/
  var rand = (Math.floor(Math.random() * 8));
  var color = '#000';
  switch (rand) {
    case 1:
    color = '#000'
    break;
    case 2:
    color = '#00F'
    break;
    case 3:
    color = '#0F0'
    break;
    case 4:
    color = '#0FF'
    break;
    case 5:
    color = '#F00'
    break;
    case 6:
    color = '#F0F'
    break;
    case 7:
    color = '#FF0'
    break;
    case 8:
    color = '#FFF'
    break;
  }
  return color;
}

function init() {
  gamePlaying = 1;
  turnAround = false;
  canvasWidth = canvas.width;
  canvasHeight = canvas.height;
  cursorX = 0;
  cursorY = 0;
  playerX = canvas.width / 2;
  playerY = canvas.height / 2;
  playerVelocityX = 0;
  playerVelocityY = 0;
  playerSpeed = 1.5;
  playerRadius = 5;
  playerfriction = 0.96;
  keyPressed = [];
  bulletCount = 0;
  bullets = [];
  bulletSpeed = 5;
  bulletLifetime = 100;
  enemyCount = 0;
  enemies = [];
  enemyWaveInterval = 1000;
  enemyWaveCounter = 1;
  enemiesToSpawn = 10;
  timeStat = 0;
  theInterval = 10;
  score = 0;
  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i
    .test(navigator.userAgent) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
    .test(navigator.userAgent.substr(0, 4))) {
  onMobile = true;
} else {
  onMobile = false;
};
if (onMobile) {
  canvas.height = 300;
  canvas.width = 300;
  playerX = canvas.width / 2;
  playerY = canvas.height - 20;
  playerSpeed = 0.8;
  canvasWidth = canvas.width;
  canvasHeight = canvas.height;
}
update();
}

function update() {
  if (gamePlaying) {
    // USER INPUT STUFF ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // if not on mobile, let them move themselves.
    // up/w
    if (onMobile == false) {
      if(keyPressed[17]){
        // just for debug
       // cirlceEffect();
      }
      if (keyPressed[38] || keyPressed[87]) {
        if (playerVelocityY > -playerSpeed) {
          playerVelocityY--;
        }
      }
      // down/s
      if (keyPressed[40] || keyPressed[83]) {
        if (playerVelocityY < playerSpeed) {
          playerVelocityY++;
        }
      }
      // left/a
      if (keyPressed[37] || keyPressed[65]) {
        if (playerVelocityX > -playerSpeed) {
          playerVelocityX--;
        }
      }
      // right/d
      if (keyPressed[39] || keyPressed[68]) {
        if (playerVelocityX < playerSpeed) {
          playerVelocityX++;
        }
      }
      // else if on mobile, move for them!
    } else {
      if ((playerVelocityX < playerSpeed) && turnAround) {
        playerVelocityX++;
        if (playerX >= canvasWidth - 10) {
          turnAround = false;
        }
      }
      if ((playerVelocityX > -playerSpeed) && turnAround == false) {
        playerVelocityX--;
        if (playerX <= 10) {
          turnAround = true;
        }
      }
    }
    if (mouseHeld) {
      if (timeStat % 40 == 0) {
        var rect = canvas.getBoundingClientRect();
        bullets[bulletCount] = new Array(9);
        // have to floor because player co-ords can be a decimal due to friction multiplier
        var distance = Math.sqrt(Math.pow(cursorX - Math.floor(playerX), 2) +
          Math.pow(cursorY - Math.floor(playerY), 2));
        // spawn X
        bullets[bulletCount][0] = Math.floor(playerX - playerRadius);
        // spawn Y
        bullets[bulletCount][1] = Math.floor(playerY - playerRadius);
        // target X
        bullets[bulletCount][2] = cursorX;
        // target Y
        bullets[bulletCount][3] = cursorY;
        // alive bool
        bullets[bulletCount][4] = true;
        // opacity value
        bullets[bulletCount][5] = 1;
        // dx
        bullets[bulletCount][6] = (cursorX - Math.floor(playerX)) / distance;
        // dy
        bullets[bulletCount][7] = (cursorY - Math.floor(playerY)) / distance;
        // lifetime var
        bullets[bulletCount][8] = 0;
        bulletCount++;
      }
    }
    // TEST SPAWN ENEMY e
    if (keyPressed[69]) {
      // just for debug
      //spawnEnemies();
    }
    // PLAYER MOVEMENT STUFF ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // applying movement with friction added
    playerVelocityY *= playerfriction;
    playerY += playerVelocityY;
    playerVelocityX *= playerfriction;
    playerX += playerVelocityX;
    // collision with wall checks
    if (playerX >= canvasWidth - playerRadius) {
      playerX = canvasWidth - playerRadius;
    } else if (playerX <= playerRadius) {
      playerX = playerRadius;
    }
    if (playerY > canvasHeight - playerRadius) {
      playerY = canvasHeight - playerRadius;
    } else if (playerY <= playerRadius) {
      playerY = playerRadius;
    }
    // DRAWING STUFF ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // DO ALL DRAWING DOWN HERE - AFTER I CLEAR THE SCENE!
    // clear scene
    context.clearRect(0, 0, canvasHeight, canvasWidth);
    // draw player
    context.fillStyle = "#000";
    context.beginPath();
    context.arc(playerX, playerY, playerRadius, 0, Math.PI * 2);
    context.fill();
    // re-draw crosshair after clearing
    context.drawImage(crosshairimg, cursorX, cursorY);
    // BULLET STUFF ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // for every bullet created adjust it's x and y until it hits the initial fire pos by 5 at a time
    for (var b = 0; b < bullets.length; b++) {
      var bX = bullets[b][0]; // none essential, made things easier to work with
      var bY = bullets[b][1];
      var tX = bullets[b][2];
      var tY = bullets[b][3];
      var dX = bullets[b][6];
      var dY = bullets[b][7];
      if (bullets[b][4] != false) // if not dead, move
      {
        bullets[b][0] += dX * bulletSpeed;
        bullets[b][1] += dY * bulletSpeed;
      }
      // lifetime check and increment
      if (bullets[b][8] >= bulletLifetime) {
        if (bullets[b][4] != false) // and set it to dead, only do once.
        {
          bullets[b][4] = false;
        }
      } else {
        bullets[b][8]++ // else increment the lifevar
      }
      if (bullets[b][4] != false) // if not dead, draw the projectile
      {
        context.drawImage(bulletimg, bullets[b][0], bullets[b][1]);
      } else {
        if (bullets[b][5] > 0.005) // if ran out of life, make a scorch and make that gradually fade 
        {
          bullets[b][5] = bullets[b][5] - 0.005;
          context.globalAlpha = bullets[b][5];
          context.drawImage(bulletsplodeimg, bX - 5, bY - 5);
          context.globalAlpha = 1;
        }
      }
    }
    // ENEMY STUFF ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    for (var e = 0; e < enemies.length; e++) {
      var dX = enemies[e][6];
      var dY = enemies[e][7];
      var eX = enemies[e][0]; // none essential, made things easier to work with
      var eY = enemies[e][1];
      var speed = enemies[e][8];
      if (enemies[e][4] != false) // if not dead, move
      {
        enemies[e][0] += dX * speed;
        enemies[e][1] += dY * speed;
      }
      var playerXCenter = playerX - playerRadius;
      var playerYCenter = playerY - playerRadius;
      if ((playerXCenter > (eX - (playerRadius * 4))) && (playerX < eX)) {
        if ((playerYCenter > (eY - (playerRadius * 4))) && (playerY < eY)) {
          if (enemies[e][4] != false) // if enemy alive
          {
            endGame();
          }
        }
      }
      for (var b = bullets.length - 10; b < bullets.length; b++) {
        var bX = bullets[b][0];
        var bY = bullets[b][1];
        if ((bX > (eX - (playerRadius * 4))) && (bX < eX)) {
          if ((bY > (eY - (playerRadius * 4))) && (bY < eY)) {
            if (bullets[b][4]) {
              if (enemies[e][4] != false) // kill the enemy
              {
                enemies[e][4] = false;
                score = score + Math.floor(enemyWaveCounter / 2);
                if (bullets[b][4] != false) // kill bullet too
                {
                  bullets[b][4] = false;
                }
              }
            }
          }
        }
        if ((enemies[e][0] > canvasWidth) || (enemies[e][0] < 0) || (enemies[
          e][1] > canvasHeight) || (enemies[e][1] < 0)) // if off map
        {
          enemies[e][4] = false;
          endGame();
        }
        if (enemies[e][4] != false) // if not dead draw the enemy
        {
          context.strokeStyle = "#000";
          context.fillStyle = getRandomColor();
          context.beginPath();
          context.arc(enemies[e][0], enemies[e][1], playerRadius * 2, 0, Math
            .PI * 2);
          context.fill();
          context.stroke();
          context.fillStyle = "#000";
        }
      }
    }
    // ENEMY SPAWN ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    if (enemyWaveInterval === 0) { // 10 second interval
      enemyWaveInterval = 1000;
      enemyWaveCounter++;
      for (var s = 0; s < enemiesToSpawn; s++) {
        spawnEnemies();
      }
      enemiesToSpawn++;
    } else {
      enemyWaveInterval--
    }
    timeStat++;
    document.getElementById('scoreBoard').innerHTML = score;
    document.getElementById('wavenumber').innerHTML = enemyWaveCounter;
    theGame = setTimeout(update, theInterval);
  }
}

function updateScoreboard() {
  $.post('../api/listScores.php', {
    scoreArrayPC
  }, function(data) {
    scoreArrayPC = data;
    scoreTableBuilderPC(scoreArrayPC);
  });
}

function updateScoreboardMob() {
  $.post('../api/listScoresMob.php', {
    scoreArrayMob
  }, function(data) {
    scoreArrayMob = data;
    scoreTableBuilderMob(scoreArrayMob);
  });
}

function endGame() {
  var showTime = timeStat;
  $("#myCanvas").hide();
  $("#stat").text(showTime / 100);
  $(".gameOver").show();
  gamePlaying = 0;
  clearTimeout(theGame);
  if (!onMobile) {
    $.get('../api/checkScore.php', function(data) {
      scoreArrayPC = data;
      if (data < score) {
        $('#newHighScore').fadeIn(1000);
        $('#playerScore').value = score;
      }
    });
  } else {
    $.get('../api/checkScoreMob.php', function(data) {
      scoreArrayMob = data;
      if (data < score) {
        $('#newHighScore').fadeIn(1000);
        $('#playerScore').value = score;
      }
    });
  }
  $('#playerScore').val(score);
}
$('#playerUpdate').on('click', function(ev) {
  ev.preventDefault(); // stops the form from sending
  if ($('#playerEmail').val().length > 11 || $('#playerEmail').val().length < 2) {
    $('[data-toggle="popover"]').popover();
} else {
  if ($('#playerScore').val() == score) {
      var formVars = $('#playerInfo').serialize(); // made into name value pairs for sending
      if (!onMobile) {
        $.post('../api/addNewHighScore.php', formVars, function(data) {
          $('#newHighScore').hide();
          updateScoreboard();
        });
      } else {
        $.post('../api/addNewHighScoreMob.php', formVars, function(data) {
          $('#newHighScore').hide();
          updateScoreboardMob();
        });
      }
    } else {
      window.alert("There is no honour in Cheating...");
      window.location =
      'http://lukemelville.com/portfolio/TDS/php/game.php';
    }
  }
});

function scoreTableBuilderPC(myData) {
  var tempHTMLName = "<th>Name</th>";
  var tempHTMLScore = "<th>Score</th>";
  $.each(myData, function(name, val) {
    tempHTMLName += '<td>' + val.dbPlayer + '</td>';
    tempHTMLScore += '<td>' + val.dbScore + '</td>';
  });
  $('#namesPC').html(tempHTMLName);
  $('#scorePC').html(tempHTMLScore);
}

function scoreTableBuilderMob(myData) {
  var tempHTMLName = "<th>Name</th>";
  var tempHTMLScore = "<th>Score</th>";
  $.each(myData, function(name, val) {
    tempHTMLName += '<td>' + val.dbPlayer + '</td>';
    tempHTMLScore += '<td>' + val.dbScore + '</td>';
  });
  $('#namesMob').html(tempHTMLName);
  $('#scoreMob').html(tempHTMLScore);
}
  // event listeners
  document.addEventListener('selectstart', function(e) {
    preventDefault(e);
  }, false);
  document.addEventListener('dblclick', function(e) {
    preventDefault(e);
  }, false);
// drawing the crosshair function
document.addEventListener('mousemove', function(e) {
  var pos = getMousePos(canvas, e);
  // take some away to get true cursor end img origin top left
  cursorX = pos.x - 8;
  cursorY = pos.y - 8;
  // the crosshair draw code
  context.drawImage(crosshairimg, cursorX, cursorY);
});
// get getdown
document.addEventListener("keydown", function(e) {
  keyPressed[e.keyCode] = true;
});
// get keyup
document.addEventListener("keyup", function(e) {
  keyPressed[e.keyCode] = false;
});
// clicking creates a new array for a new bullet with it's starting co-ords and destination co-ords and alive variable
document.addEventListener('mousedown', function(e) {
  mouseHeld = true;
  var rect = canvas.getBoundingClientRect();
  bullets[bulletCount] = new Array(9);
  // have to floor because player co-ords can be a decimal due to friction multiplier
  var distance = Math.sqrt(Math.pow(cursorX - Math.floor(playerX), 2) +
    Math.pow(cursorY - Math.floor(playerY), 2));
  // spawn X
  bullets[bulletCount][0] = Math.floor(playerX - playerRadius);
  // spawn Y
  bullets[bulletCount][1] = Math.floor(playerY - playerRadius);
  // target X
  bullets[bulletCount][2] = cursorX;
  // target Y
  bullets[bulletCount][3] = cursorY;
  // alive bool
  bullets[bulletCount][4] = true;
  // opacity value
  bullets[bulletCount][5] = 1;
  // dx
  bullets[bulletCount][6] = (cursorX - Math.floor(playerX)) / distance;
  // dy
  bullets[bulletCount][7] = (cursorY - Math.floor(playerY)) / distance;
  // lifetime var
  bullets[bulletCount][8] = 0;
  bulletCount++;
});
document.addEventListener('mouseup', function(e) {
  mouseHeld = false;
});