	$( document ).ready(function() 
	{
	  var updating = true;//update bool
	  var thePage; //timeout var
	  var theInterval = 100; //update interval
	  var timeStat = 1.0; // counter
	  var rising = true; // timestat rising bool
	  var change = true; // bg change

	  var imageArray = new Array
	  (
	   "portfolio/TDS/images/snapTDS2.png",
	   "portfolio/MATHOGL/images/snapMATHOGL2.png",
	   "portfolio/TTTTT/images/snapTTTTT.PNG",
	   "portfolio/SHOTSNAIL/images/snapSHOTSNAIL.png",
	   "portfolio/FOPZOMB/images/snapFOPZOMB.PNG",
	   "portfolio/FOCAENCODE/images/snapFOCAENCODE.PNG"
	   );

	  var currentBG = "portfolio/TDS/images/snapTDS2.png";//holds current BG image
	  var imageCounter = 0;// simple image counter
	  var bgChanging = true;
	  update();


	  function update() 
	  {
	  	backgroundChange();
	  	thePage = setTimeout(update, theInterval);
	  }


	  function backgroundChange()
	  {
	  	if(bgChanging){
	  		$('#section1').css("background-color", "rgba(69,184,248," + timeStat + ")");
	  		$('#section2').css("background-color", "rgba(0,0,0," + (0.3+(timeStat)) + ")");
	  		$('#section3').css("background-color", "rgba(0,0,0," + (0.3+(timeStat)) + ")");
	  		$('#section4').css("background-color", "rgba(0,0,0," + (0.3+(timeStat)) + ")");
	  		if(timeStat > 1.0){
	  			rising = false;
	  			change = true;
	  		}
	  		if(timeStat < 0.25){
	  			rising = true;  		
	  		}
	  		if(rising){
	  			timeStat += 0.0075;
	  		}else{
	  			timeStat -= 0.0075;
	  		}
	  		if(change){
	  			currentBG = imageArray[imageCounter];
	  			if(imageCounter+1 == imageArray.length){
	  				imageCounter = 0;
	  			}else{
	  				imageCounter++;
	  			}
	  			$('html').css("background", "center no-repeat fixed url('"+ currentBG +"')");
	  			$('body').css("background", "center no-repeat fixed url('"+ currentBG +"')");
	  			$('html').css("background-size", "cover");
	  			$('body').css("background-size", "cover");
	  		}
	  		change = false;
	  	}
	  }
	});
