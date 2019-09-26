//console.log("dataTypes LOADED");
var dataTypes = class{
	
	static position = class{
		constructor(x, y){
			this.x = x;
			this.y = y;
		}
	};

	static move = class{
		constructor(pos1, pos2){
			this.pos1 = pos1;
			this.pos2 = pos2;
		}
	};

	static map = class{
		constructor(width, height){
			this.defaultParameters();
			this.create(width, height);
		}
		
		copyThis(that){
			this.setParameters(that.map);
		}
		
		defaultParameters(){
			this.create(7, 7);
		}
		
		setParameters(map){
			if(map != null){
				var size = map.length;
				if(size > 0){
					this.map = new Array(size);
					for(var i = 0; i < size; i++) {
						var size = map[i].length;
						if(size > 0){
							this.map[i] = new Array(size);
							for(var j = 0; j < size; j++){
								if(map[i][j] != null){
									this.map[i][j] = new map[i][j].constructor;
									this.map[i][j].copyThis(map[i][j]);
								}
							}
						}
					}
				}
			}
		}
		
		create(width, height){
			if(height > 0){
				this.map = new Array(height);
				for(var i = 0; i < this.map.length; i++){
					if(width > 0){
						this.map[i] = new Array(width);
					}
				}
			}
		}
	};
	
}
//console.log("dataTypes ENDED");