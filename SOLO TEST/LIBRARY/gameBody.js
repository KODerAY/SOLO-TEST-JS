//console.log("gameBody LOADED");
var gameBody = class{
	
	constructor(){
	}
	
	start(){
		this.createObjects();
		//myScore = new component("30px", "Consolas", "black", 280, 40, "text");
		this.interval = setInterval(function(){game.update();}, 20);
	}
		
	createObjects(){
		alert("Play with space button.\n" + 
		"Space tuşu ile oyna.\n" + 
		"スペースボタンで遊べ"
		);
		var d = gameInitialization.boardDefaultValues;
		var board = new gameInitialization.prototype.entityBoard(d.x, d.y, d.width, d.height, d.color);
		var choices = new gameInitialization.prototype.entityChoices(null, null, null, null, null, board);
		
		/*Oyuna dönüştür, ihtimal hesaplarını c' ye bırak :D
		var boards = [board];
		for(var i = 0; i < boards.length; i++){
			var boardsOfPlayableMoves = boards[i].boardsOfPlayableMoves();
			if(boardsOfPlayableMoves.length > 0){
				for(var j = 0; j < boardsOfPlayableMoves.length; j++){
					boards.push(boardsOfPlayableMoves[j]);
				}
				boards.splice(i, 1);
				i--;
			}
			
		}*/
		//setTimeout(asd, 1000);
		//function asd(){boards[3].drawAll();}
		//console.log(gameInitialization.gameObjects);
		//console.log(boards);
	}
	
	update(){
		this.clearArea();
		for(var depth = 15; depth > 0; depth--){
			for(var i = 0; i < gameInitialization.gameObjects.length; i++){
				if(gameInitialization.gameObjects[i].depth == depth){
					gameInitialization.gameObjects[i].draw();
				}
			}
		}
	}
	
	clearArea(){
		var g = gameInitialization;
		g.context.clearRect(0, 0, g.canvas.width, g.canvas.height);
	}
	
	deleteObject(pointer){
		var objects = gameInitialization.gameObjects;
		for(var i = 0; i < objects.length; i++){
			if(objects[i] == pointer){
				objects.splice(i, 1);
				return true;
			}
		}
		console.log("Obje bulunamadı dolayısı ile silinemedi -> " + pointer);
		return false;
	}
	
	getMouse(e){
		return {x : e.clientX - gameInitialization.canvas.offsetLeft,
		y : e.clientY - gameInitialization.canvas.offsetTop};
	}
}
var game = new gameBody();
game.start();
//console.log("gameBody ENDED");