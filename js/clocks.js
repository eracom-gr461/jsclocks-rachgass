
<!doctype html>
<html class="no-js" lang="fr">
    <head>
        <meta charset="utf-8">
        <title>The JS Clocks</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/style.css">
        <script src="js/clocks.js"></script>
        <style>

        body {
          margin: 0;
        }
        svg {
          border: 1px; solid #ddd;
          background: #fff;
          margin: auto;
          height: 100%;
          width: auto;
        }
        html {
          font-familiy: helvetica;
          font-size: 500%;

        }

        time {
        		position: absolute;
        	}

          </style>

    </head>


    <body>

    <time id="heure">00</time>
    <time id="minute">00</time>
    <time id="seconde">00</time>

    

    </body>
    <script>

	// Initialiser l'affichage au chargement:
	metronome();
	metronomeMinute();
	metronomeHeure();
	// Répéter la fonction metronome une fois par seconde
	var monIntervalle = setInterval(function() {
	  metronome();
  }, 1000); // mille millisecondes = 1 seconde
	// Notre fonction random:
	function getRandom(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}




    var date = new Date
console.log.(Date);
document.getElementById('seconde').innerHTML=seconde;
