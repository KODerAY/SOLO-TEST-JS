//console.log("events LOADED");
function onDown(e) {}
function onUp(e) {}

function onClick(e) {
	for(var i = 0; i < gameInitialization.gameObjects.length; i++){
		gameInitialization.gameObjects[i].mouseClick(e);
	}
}

function onMove(e){
	for(var i = 0; i < gameInitialization.gameObjects.length; i++){
		gameInitialization.gameObjects[i].mouseMove(e);
	}
}

function onOver(e) {
	
}
function onOut() {
	for(var i = 0; i < gameInitialization.gameObjects.length; i++){
		gameInitialization.gameObjects[i].mouseOut();
	}
}

function onKeyDown(e){
	for(var i = 0; i < gameInitialization.gameObjects.length; i++){
		gameInitialization.gameObjects[i].keyDown(e);
	}
}

/*function drawRect(x, y, width, height) {
	game.context.fillStyle = "blue";
	game.context.fillRect(x, y, width, height);
}//**drawRect**
*/
canvas.addEventListener("mousedown", onDown, false);
canvas.addEventListener("mouseup", onUp, false);
canvas.addEventListener("click", onClick, false);
canvas.addEventListener("mousemove", onMove, false);
canvas.addEventListener("mouseover", onOver, false);
canvas.addEventListener("mouseout", onOut, false);
document.addEventListener("keydown", onKeyDown, false);

//console.log("events ENDED");