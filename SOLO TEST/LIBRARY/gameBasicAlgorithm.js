//console.log("gameBasicAlgorithm LOADED");
var gameBasicAlgorithm = class{
	//constructor(){}
	static getDistance(x1, y1, x2, y2){
		var deltaX = x2 - x1;
		var deltaY = y2 - y1;
		return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
	}
	static collisionMouse(mouse, that){
		var g = gameInitialization;
		if(that.type == g.gameConst.Types.RECTANGLE.name){
			return ((mouse.x >= that.x && mouse.x < that.x + that.width)&&
					(mouse.y >= that.y && mouse.y < that.y + that.height));
		}else if(that.type == g.gameConst.Types.SQUARE.name){
			return ((mouse.x >= that.x && mouse.x < that.x + that.width)&&
					(mouse.y >= that.y && mouse.y < that.y + that.height));
		}else if(that.type == g.gameConst.Types.CIRCLE.name){
			return (that.size / 2 > gameBasicAlgorithm.getDistance(mouse.x, mouse.y, that.x, that.y));
		}
		return false;
	}
	
};
//console.log("gameBasicAlgorithm ENDED");