enchant();//1

var picNumber = 12; //2
window.onload = function() { //3
	var game = new Game(320, 480); //4
	game.preload('http://enchantjs.com/assets/images/chara3.gif'); //5
	game.onload = function() { //6
		var bear = new Sprite(32, 32); //7
        bear.x = 160;
        bear.y = 240;
		bear.image = //8
			game.assets['http://enchantjs.com/assets/images/chara3.gif'];
		bear.frame = 12; //9
        
		bear.addEventListener(Event.ENTER_FRAME, function() { //10
			picNumber++; //11
			if (picNumber > 14) { //12
				picNumber = 12;
			}
			bear.frame = picNumber; //13
			bear.onenterframe = function(){
				if(game.input.right){
					this.scaleX =1
                	this.x +=2;
				}
                if(game.input.left){
                	this.scaleX =-1
	                this.x -=2;
          		}
                if(game.input.up){
                	this.y -=2;
                }
                if(game.input.down){
                    this.y +=2;
                }
}
		});
        game.rootScene.addChild(bear); //15
	};
	game.start(); //16
};