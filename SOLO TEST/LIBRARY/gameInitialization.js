//console.log("gameInitialization LOADED");
var gameInitialization = class{
	
	static canvas = document.getElementById("canvas");
	static context = canvas.getContext("2d");
	static gameWidth = 500;
	static gameHeight = 500;
	static interval = 0;
		
	static gameConst = {
		Colors : Object.freeze({
			RED:   { name: "red", hex: "#f00" },
			GREEN: { name: "green", hex: "#0f0" },
			BLUE:  { name: "blue", hex: "#00f" },
			WHITE: { name: "white", hex: "#fff" },
			BLACK: { name: "black", hex: "#000" },
			GRAY:  { name: "gray", hex: "#888" },
			YELLOW:{ name: "yellow", hex: "#ff0" },
			BROWN: { name: "brown", hex: "#a52a2a" }
		}),
		Types : Object.freeze({
			RECTANGLE:	{ name: "rectangle"},
			CIRCLE:		{ name: "circle"},
			SQUARE:		{ name: "square"},
			TRIANGLE:	{ name: "triangle"},
			TEXT:		{ name: "text"}
		})
	};
	
	static boardXSlot = 7;
	static boardYSlot = 7;
	static boardWSlot = 32;
	static boardHSlot = 32;
	static boardWGap = 1;
	static boardHGap = 1;
	
	static boardDefaultValues = {
		x : 0,
		y : 0,
		width : this.boardXSlot * this.boardWSlot + (this.boardXSlot - 1) * this.boardWGap,
		height : this.boardYSlot * this.boardHSlot + (this.boardYSlot - 1) * this.boardHGap,
		color : this.gameConst.Colors.GREEN.hex,
		type : this.gameConst.Types.RECTANGLE.name,
		depth : 10,
		notation : null,
		squares : new dataTypes.map(this.boardXSlot, this.boardYSlot),
		pegs : new dataTypes.map(this.boardXSlot, this.boardYSlot),
		squareMap : [
		[0, 0, 1, 1, 1, 0, 0],
		[0, 0, 1, 1, 1, 0, 0],
		[1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1],
		[0, 0, 1, 1, 1, 0, 0],
		[0, 0, 1, 1, 1, 0, 0]
		],
		pegMap : [
		[0, 0, 1, 1, 1, 0, 0],
		[0, 0, 1, 1, 1, 0, 0],
		[1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 0, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1],
		[0, 0, 1, 1, 1, 0, 0],
		[0, 0, 1, 1, 1, 0, 0]
		]
	};

	static squareDefaultValues = {
		x : 0,
		y : 0,
		size : this.boardWSlot,
		color : this.gameConst.Colors.BLUE.hex,
		type : this.gameConst.Types.SQUARE.name,
		depth : 9,
		
		colorOn : this.gameConst.Colors.RED.hex,
	};
	
	static pegDefaultValues = {
		x : 0,
		y : 0,
		size : this.boardWSlot / 4 * 3,
		color : this.gameConst.Colors.BLACK.hex,
		type : this.gameConst.Types.CIRCLE.name,
		depth : 8,
		
		colorOn: this.gameConst.Colors.WHITE.hex
	};
	
	static choicesDefaultValues = {
		x : this.boardDefaultValues.x + this.boardDefaultValues.width + 20,
		y : this.boardDefaultValues.y,
		width : this.boardWSlot,
		height : this.boardHSlot * 4 + 4,
		backgroundColor : this.gameConst.Colors.GRAY.hex,
		selectedColor : this.gameConst.Colors.GREEN.hex,
		moveColor : this.gameConst.Colors.YELLOW.hex,
		unselectedColor : this.gameConst.Colors.RED.hex,
		arrowColor : this.gameConst.Colors.BROWN.hex,
		type : this.gameConst.Types.RECTANGLE.name,
		depth : 1,
		selected : 0,
		moveSelect : -1,
		board : null
	};
	
	static gameObjects = [];
	
};
//console.log("gameInitialization ENDED");