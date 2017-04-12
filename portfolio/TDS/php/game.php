<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Luke Melville</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <link href="/css/bootstrap.min.css" rel="stylesheet">
  <link href="/css/font-awesome.min.css" rel="stylesheet">
  <link href="/css/animate.min.css" rel="stylesheet">
  <link href="/css/styles.css" rel="stylesheet">
  <link href="/css/fonts.css" rel="stylesheet">
</head>
<body>
  <nav class="navbar navbar-trans navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button class="navbar-toggle" data-target="#navbar-collapsible"
        data-toggle="collapse" type="button"><span class=
        "sr-only">Toggle navigation</span> <span class=
        "icon-bar"></span> <span class="icon-bar"></span> <span class=
        "icon-bar"></span></button> <a class="navbar-brand" href=
        "#">Lm</a>
      </div>
      <div class="navbar-collapse collapse" id="navbar-collapsible">
        <ul class="nav navbar-nav navbar-left">
          <li>
            <a href="/index.php">Home</a>
          </li>
          <li>
            <a href="#sectionGame1">The Game</a>
          </li>
          <li>
            <a href="#sectionGame2">High Scores</a>
          </li>
          <li>&nbsp;</li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a data-target="#myModal" data-toggle="modal" href=
            "#"><i class="fa fa-heart-o fa-lg"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>


  <section class="container-fluid" id="sectionGame1">
    <div>
      <div class = "row">
        <div class="col-md-2 col-md-offset-4">
          <h2 class="gameTitle">Score</h2>
          <h2 id="scoreBoard">0</h2>
        </div>

        <div class="col-md-2">
          <h2 class="gameTitle">Wave Number</h2>
          <h2 id="wavenumber">0</h2>
        </div>
      </div>

      <div class = "row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="divCanvas">
          <div class="startScreen">
            <h1>The Top Down Shooter</h1>
            <div class = "controls">
              <p>Don't let the enemies touch you or get to the other side!</p>
              <h2> W, S, A, D </h2>
              <h2> Up, Down, Left, Right </h2>
              <br>
              <h2> Move mouse to aim </h2>
              <h2> Click or Click and hold to fire </h2>
            </div>
            <button class="startButton btn btn-primary" type="button" value="Start">Begin!</button>
          </div>

          <div class="center-block gameOver" style="display:none">
            <h1>Game Over</h1>
            <p>You lasted for: <span id="stat"></span> seconds.</p>
            <div id="newHighScore">
              <form id="playerInfo" name="playerInfo">
                <input id="playerScore" name="playerScore" value="0">
                <p><input id="playerEmail" name="playerEmail" placeholder="MagicGuy" type="text"></p>
                <p><input data-content="Please enter between 2 and 11 characters!" data-toggle="popover" id="playerUpdate" type="submit" value="Join Hall of Fame"></p>
              </form>
            </div>

            <button class="startButton btn btn-primary" type="button" value="Start">Replay</button>
          </div>

          <canvas class="center-block" height="600" id="myCanvas" style=
          "display:none;" width="600"></canvas>
        </div>
      </div>
    </div>

  </section>


  <section class="container-fluid v-center" id="sectionGame2">
    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-md-offset-2 col-sm-offset-2 hsTable">
      <table class="table table-bordered table-responsive highScores">
        <caption>
          PC High Scores
        </caption>
        <tbody>
          <tr id='namesPC'>              
          </tr>
          <tr id='scorePC'>            
          </tr>
        </tbody>
      </table>
    </div>

    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-md-offset-2 col-sm-offset-2 hsTable">
      <table class="table table-bordered table-responsive highScores">
        <caption>
          Mobile High Scores
        </caption>
        <tbody>
          <tr id='namesMob'>
          </tr>
          <tr id='scoreMob'>
          </tr>
        </tbody>
      </table>
    </div>
  </section>


  <div aria-hidden="true" aria-labelledby="myModalLabel" class="modal fade"
  id="myModal" role="dialog" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button aria-hidden="true" class="close" data-dismiss=
        "modal" type="button">×</button>
        <h2 class="text-center"><img class="img-circle" src=
          "//placehold.it/110"><br>
          Sign In</h2>
        </div>
        <div class="modal-body row">
          <?php
          if (isset($_GET['error'])) {
            echo '<h6 class="error text-center">Error Logging In!</h6>';
          }
          ?>
          <h6 class="text-center">Enter Information and press
            Register to Sign Up!</h6>
            <form action="/loginSystem/includes/process_login.php"
            class="col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0"
            id="loginForm" method="post" name="login_form">
            <div class="form-group">
              <input class="form-control input-lg" name="email"
              placeholder="Email" type="text">
            </div>
            <div class="form-group">
              <input class="form-control input-lg" id="password"
              name="password" placeholder="Password" type=
              "password">
            </div>
            <div class="form-group">
              <input class="btn btn-danger btn-lg btn-block"
              onclick="formhash(this.form, this.form.password);"
              type="button" value="Login"> <span class=
              "pull-right"><a href="#">Register</a></span>
              <span><a href=
                "/loginSystem/includes/logout.php">Logout</a></span>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <h6 class="text-center">You are Currently Logged
              <?php echo $logged ?></h6>
            </div>
          </div>
        </div>
      </div><!--scripts loaded here-->


      <script src="/js/jquery-1.12.1.min.js">
      </script> 
      <script src="/js/bootstrap.min.js">
      </script> 
      <script src="/js/scripts.js">
      </script> 
      <script src="/loginSystem/js/sha512.js" type="text/JavaScript">
      </script> 
      <script src="/loginSystem/js/forms.js" type="text/JavaScript">
      </script> 
      <script src="../js/game.js">
      </script>
      <footer></footer>
    </body>
    </html>