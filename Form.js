class Form {
  constructor() {
    this.input = createInput("Your name poke trainer !");
    this.button = createButton('Lets fight !');
    this.greeting = createElement('h2');
    this.reset = createButton('Play again !');
    this.choose = createButton('Choose pokemon');
    this.arceus = createButton('Arceus');
    this.mew = createButton('Mew');
    this.darkrai = createButton('Darkrai');
    this.greyninja = createButton('Greyninja');
    this.charizard = createButton('Charizard');
    this.infernape = createButton('Infernape');
    
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    title.destroy();
  }
  
  display(){
    background("orange");
    title=createSprite(displayWidth/2,175);
    title.addImage(pokemonImg);
    title.scale=0.8;
    drawSprites();
    this.input.position(displayWidth/2 - 200 , displayHeight/2);
    this.input.style('width', '400px');
    this.input.style('height', '50px');
    this.input.style('background', 'grey');
    this.reset.position(displayWidth-170,displayHeight/3-200);
    this.reset.style('width', '100px');
    this.reset.style('height', '30px');
    this.reset.style('background', 'red');
    this.choose.position(displayWidth/2 + 200, displayHeight/2+150);
    this.choose.style('width', '200px');
    this.choose.style('height', '40px');
    this.choose.style('background', 'lightpink');
    
    this.choose.mousePressed(()=>{
      this.button.position(displayWidth/2 + 300, displayHeight/2+150);
      this.button.style('width', '200px');
      this.button.style('height', '40px');
      this.button.style('background', 'lightpink');
      this.input.hide();
      this.choose.hide();
      this.arceus.position(1100,440);
      this.arceus.style('width', '180px');
      this.arceus.style('height', '40px');
      this.arceus.style('background', 'grey');
      this.mew.position(900,440);
      this.mew.style('width', '180px');
      this.mew.style('height', '40px');
      this.mew.style('background', 'pink');
      this.darkrai.position(700,440);
      this.darkrai.style('width', '180px');
      this.darkrai.style('height', '40px');
      this.darkrai.style('background', 'white');
      this.greyninja.position(500,440);
      this.greyninja.style('width', '180px');
      this.greyninja.style('height', '40px');
      this.greyninja.style('background', 'lightblue');
      this.charizard.position(300,440);
      this.charizard.style('width', '180px');
      this.charizard.style('height', '40px');
      this.charizard.style('background', 'orange');
      this.infernape.position(100,440);
      this.infernape.style('width', '180px');
      this.infernape.style('height', '40px');
      this.infernape.style('background', 'red');
      
    });
    this.arceus.mousePressed(()=>{
      player.pokemon=1;
      player.update();
    });
    this.mew.mousePressed(()=>{
      player.pokemon=2;
      player.update();
    });
    this.darkrai.mousePressed(()=>{
      player.pokemon=3;
      player.update();
    });
    this.greyninja.mousePressed(()=>{
      player.pokemon=4;
      player.update();
    });
    this.charizard.mousePressed(()=>{
      player.pokemon=5;
      player.update();
    });
    this.infernape.mousePressed(()=>{
      player.pokemon=6;
      player.update();
    });
    
    this.button.mousePressed(()=>{
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name +", waiting for someone as opponent...");
      this.greeting.position(displayWidth/2, displayHeight/1.65);
      this.greeting.style('color', 'red');
      this.greeting.style('font-size', '40px');
      this.button.hide();
      this.arceus.hide();
      this.mew.hide();
      this.darkrai.hide();
      this.greyninja.hide();
      this.charizard.hide();
      this.infernape.hide();
    });
     
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      player.updatePlayer1Attack(0);
      player.updatePlayer2Attack(0);
      player.updatePlayer1Health(1000);
      player.updatePlayer2Health(1000);
      database.ref('players').remove();
      database.ref('carsAtEnd').remove();
    })
  }
}
