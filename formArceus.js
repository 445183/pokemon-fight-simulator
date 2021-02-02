class Arceus{
    constructor(){
        this.hiddenPower = createButton('Hidden Power');
        this.dragonClaw = createButton('Dragon Claw');
        this.hyperVoice = createButton('Hyper Voice');
        this.refresh = createButton(' Refresh ');
        this.futureSight = createButton('Future Sight');
    }

    hide(){
        this.hiddenPower.hide();
        this.dragonClaw.hide();
        this.hyperVoice.hide();
        this.refresh.hide();
        this.futureSight.hide();
    }

    display(){
        Player.getPlayerInfo();
        player.getPlayer1Health();
        player.getPlayer2Health();
        player.getPlayer1Attack();
        player.getPlayer2Attack();
   
        this.hiddenPower.position(0,240);
        this.hiddenPower.style('width', '180px');
        this.hiddenPower.style('height', '40px');
        this.hiddenPower.style('background', 'white');
        this.hiddenPower.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-50;
                player.updatePlayer1Health(player1Health);
                player2Attack=1;
                player.updatePlayer2Attack(player2Attack);
           }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-50;
                player.updatePlayer2Health(player2Health);
                player1Attack=1;
                player.updatePlayer1Attack(player1Attack);
            }
            pokemonFly();
        });

        this.dragonClaw.position(200,240);
        this.dragonClaw.style('width', '180px');
        this.dragonClaw.style('height', '40px');
        this.dragonClaw.style('background', 'white');
        this.dragonClaw.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-75;
                player.updatePlayer1Health(player1Health);
                player2Attack=2;
                player.updatePlayer2Attack(player2Attack);
                 
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-75;
                player.updatePlayer2Health(player2Health);
                player1Attack=2;
                player.updatePlayer1Attack(player1Attack);
                 
            }
            pokemonFly();
        });

        this.hyperVoice.position(400,240);
        this.hyperVoice.style('width', '180px');
        this.hyperVoice.style('height', '40px');
        this.hyperVoice.style('background', 'white');
        this.hyperVoice.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-65;
                player.updatePlayer1Health(player1Health);
                player2Attack=3;
                player.updatePlayer2Attack(player2Attack);
                 
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-65;
                player.updatePlayer2Health(player2Health);
                player1Attack=3;
                player.updatePlayer1Attack(player1Attack);
                
            }
            pokemonFly();
        });

        this.refresh.position(600,240);
        this.refresh.style('width', '180px');
        this.refresh.style('height', '40px');
        this.refresh.style('background', 'white');
        this.refresh.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player2Health=player2Health+75;
                player.updatePlayer2Health(player2Health);
                player2Attack=4;
                player.updatePlayer2Attack(player2Attack);
                
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player1Health=player1Health+75;
                player.updatePlayer1Health(player1Health);
                player1Attack=4;
                player.updatePlayer1Attack(player1Attack);
                
            }
            pokemonFly();
        });

        this.futureSight.position(800,240);
        this.futureSight.style('width', '180px');
        this.futureSight.style('height', '40px');
        this.futureSight.style('background', 'white');
        this.futureSight.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-200;
                player.updatePlayer1Health(player1Health);
                player2Attack=5;
                player.updatePlayer1Attack(player2Attack);
                
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-200;
                player.updatePlayer2Health(player2Health);
                player1Attack=5;
                player.updatePlayer1Attack(player1Attack);
                 
            }
            pokemonFly();
        });
        
        
    }
}