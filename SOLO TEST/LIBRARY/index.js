//console.log("index LOADED");
function scriptLoad(file, target){
	var script = document.createElement("script");
	script.src = file;
	script.async = false;
	//script.defer = false;
	target.appendChild(script);
}


scriptLoad("LIBRARY/gameBasicAlgorithm.js", document.head);
scriptLoad("LIBRARY/dataTypes.js", document.head);
scriptLoad("LIBRARY/gameInitialization.js", document.head);

	scriptLoad("LIBRARY/OBJECTS/entity.obj", document.head);
	scriptLoad("LIBRARY/OBJECTS/board.obj", document.head);
	scriptLoad("LIBRARY/OBJECTS/square.obj", document.head);
	scriptLoad("LIBRARY/OBJECTS/peg.obj", document.head);
	scriptLoad("LIBRARY/OBJECTS/choices.obj", document.head);
	
scriptLoad("LIBRARY/gameBody.js", document.head);
scriptLoad("LIBRARY/events.js", document.head);
scriptLoad("LIBRARY/resizeCanvas.js", document.head);
//console.log("index ENDED");