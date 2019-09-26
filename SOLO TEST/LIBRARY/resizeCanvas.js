//console.log("resizeCanvas loaded");
(function() {
	window.addEventListener("resize", resizeCanvas, false);

	function resizeCanvas() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		/*
		for(var i = 0; i < game.gameObjects.length; i++){
			//console.log(game.gameObjects[i].constructor.);
			//if(game.gameObjects[i].constructor == game.entityBoard){
				console.log("yosh!");
				game.gameObjects[i].reSize();
			//}
		}
		*/
		drawStuff(); 
	}
    resizeCanvas();

	function drawStuff() {}
})();
//console.log("resizeCanvas ended");