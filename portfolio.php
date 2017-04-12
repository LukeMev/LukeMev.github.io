<!-- php code -->
<?php
error_reporting(E_ALL);
require('../conn.inc.php');
$queryPortfolio = "SELECT * FROM portfolio";
$resultPortfolio = $mysqli->query($queryPortfolio);
?>
<!DOCTYPE HTML>
<?php 
include('cms/includes/head.inc.php');
echo "<link rel=\"stylesheet\" href=\"/css/portfolio.css\">";
include('cms/includes/nav.inc.php');
?>
<body>
  <div id="mainDisplay">
    <div class="container">
      <div class"row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div class="clearfix visible-xs-block"></div>
          <ul class = "mainPic">
            <li>
              <figure>
                <?php
                $rowPortfolio = $resultPortfolio->fetch_assoc();
                echo "<img class=\"center-block img-responsive\" id=\"image{$rowPortfolio['portID']}\" src=\"images/{$rowPortfolio['portImage']}\"/>";
                echo "<figcaption id = \"fig{$rowPortfolio['portID']}\" style=\"background: url({$rowPortfolio['portVidLink']}); background-size: 100% 100%; \" >";
                echo "<a id = \"vidLink{$rowPortfolio['portID']}\" href = \"{$rowPortfolio['portLink']}\"> <h1>Click to Play {$rowPortfolio['portName']}</h1></a>";
                echo "</figcaption>";
                echo "</figure>";
                echo "</li>";
                echo "</ul>";
                $timestampDate = strtotime($rowPortfolio['portDate']);
                $displayDate = date("M Y", $timestampDate);
                echo "</div>";
                echo "<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">";
                echo "<h3 class=\"text-center\" id=\"item{$rowPortfolio['portID']}\"><strong>{$rowPortfolio['portName']}</strong></h2>";
                echo "<h4 class=\"text-center\"id=\"module{$rowPortfolio['portID']}\">{$rowPortfolio['portModule']}</h4>";
                echo "<p class=\"text-justify\" id=\"descLong{$rowPortfolio['portID']}\">{$rowPortfolio['portLongDescription']}</p>";
                echo "<a id=\"link{$rowPortfolio['portID']}\" href = \"{$rowPortfolio['portLink']}\">View {$rowPortfolio['portName']}</a>";
                echo "<p class = \"hidden\" id = \"desc{$rowPortfolio['portID']}\">{$rowPortfolio['portDescription']}</p>";
                echo "<p id = \"date{$rowPortfolio['portID']}\"><i>{$rowPortfolio['portDate']}</i></p>";
                echo "</div>";
                $itemCount = 0;
                ?>
              </div>   
            </div>
          </div> 
        </div> 
        <div class="container">
          <h2>Choose an item to View <a href = 'searchPage.php'>or click here to Search</a></h2>
          <div class="row">
            <div class="thumbs">
              <?php
              while($rowPortfolio = $resultPortfolio->fetch_assoc()){
                $itemCount++;

                if($itemCount <= 3){
                  echo "<div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">";
                  $timestampDate = strtotime($rowPortfolio['portDate']);
                  $displayDate = date("M Y", $timestampDate);
                  echo "<div class=\"thumbnail{$rowPortfolio['portID']}\">";
                  echo "<img id=\"image{$rowPortfolio['portID']}\" class=\"img-thumbnail\" src=\"images/{$rowPortfolio['portImage']}\" alt=\"{$rowPortfolio['portID']}\"/>";
                  echo "<div class=\"caption\">";
                  echo "<h3 id=\"item{$rowPortfolio['portID']}\"><strong>{$rowPortfolio['portName']}</strong></h3>";
                  echo "<h4 id=\"module{$rowPortfolio['portID']}\">{$rowPortfolio['portModule']}</h4>";
                  echo "<p id=\"desc{$rowPortfolio['portID']}\">{$rowPortfolio['portDescription']}</p>";
                  echo "<p class = \"hidden\" id = \"date{$rowPortfolio['portID']}\"><i>{$rowPortfolio['portDate']}</i></p>";
                  echo "<p class = \"hidden\" id = \"descLong{$rowPortfolio['portID']}\">{$rowPortfolio['portLongDescription']}</p>";
                  echo "<a class = \"hidden\" id = \"link{$rowPortfolio['portID']}\" href = \"{$rowPortfolio['portLink']}\">View {$rowPortfolio['portName']}</a>";
                  echo "<a class = \"hidden\" id = \"vidLink{$rowPortfolio['portID']}\" href = \"{$rowPortfolio['portLink']}\"> <h1>Demonstration of {$rowPortfolio['portName']}coming soon!</h1></a>";
                  echo "<figcaption class = \"hidden\" id = \"fig{$rowPortfolio['portID']}\" style=\"background: url({$rowPortfolio['portVidLink']}); background-size: 100% 100%;\">";
                  echo "</div>";
                  echo "</div>";
                  echo "</div>";
                } else {
                  echo "<div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">";
                  $timestampDate = strtotime($rowPortfolio['portDate']);
                  $displayDate = date("M Y", $timestampDate);
                  echo "<div class=\"thumbnail{$rowPortfolio['portID']}hidden\">";
                  echo "<img id=\"image{$rowPortfolio['portID']}\" class=\"img-thumbnail\" src=\"images/{$rowPortfolio['portImage']}\" alt=\"{$rowPortfolio['portID']}\"/>";
                  echo "<div class=\"caption\">";
                  echo "<h3 id=\"item{$rowPortfolio['portID']}\"><strong>{$rowPortfolio['portName']}</strong></h3>";
                  echo "<h4 id=\"module{$rowPortfolio['portID']}\">{$rowPortfolio['portModule']}</h4>";
                  echo "<p id=\"desc{$rowPortfolio['portID']}\">{$rowPortfolio['portDescription']}</p>";
                  echo "<p class = \"hidden\" id = \"date{$rowPortfolio['portID']}\"><i>{$rowPortfolio['portDate']}</i></p>";
                  echo "<p class = \"hidden\" id = \"descLong{$rowPortfolio['portID']}\">{$rowPortfolio['portLongDescription']}</p>";
                  echo "<a class = \"hidden\" id = \"link{$rowPortfolio['portID']}\" href = \"{$rowPortfolio['portLink']}\">View {$rowPortfolio['portName']}</a>";
                  echo "</div>";
                  echo "</div>";
                  echo "</div>";
                }
              }
              ?>
            </div>
          </div>
          <div class="text-center">
            <ul class="pagination" style="margin-top: -10px;">
              <li><button type="button" id = "pg1" class="btn btn-default active">1</button></li>
              <li><button type="button" id = "pg2" class="btn btn-default">2</button></li>
              <li><button type="button" id = "pg3" class="btn btn-default">3</button></li>
            </ul>
          </div>
        </div>
        <?php  include('cms/includes/foot.inc.php'); ?>
        <script src="/js/paginationScript.js"></script>
      </body>
      </html>