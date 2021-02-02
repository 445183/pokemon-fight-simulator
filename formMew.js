class Mew{
    constructor(){
        this.chargeBeam = createButton('Charge Beam');
        this.bullDoze = createButton('Bull Doze');
        this.thunder = createButton('Thunder');
        this.darkpulse = createButton('Dark Pulse');
        this.flashCannon = createButton('Flash Cannon');
    }

    hide(){
        this.chargeBeam.hide();
        this.bullDoze.hide();
        this.thunder.hide();
        this.darkpulse.hide();
        this.flashCannon.hide();
    }

    display(){
        Player.getPlayerInfo();
        player.getPlayer1Health();
        player.getPlayer2Health();
        
        this.chargeBeam.position(0,240);
        this.chargeBeam.style('width', '180px');
        this.chargeBeam.style('height', '40px');
        this.chargeBeam.style('background', 'pink');
        this.chargeBeam.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-40;
                player.updatePlayer1Health(player1Health);
                player2Attack=1;
                player.updatePlayer2Attack(player2Attack);
                
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-40;
                player.updatePlayer2Health(player2Health);
                player1Attack=1;
                player.updatePlayer1Attack(player1Attack);
                
            }
            pokemonFly();
        });

        this.bullDoze.position(200,240);
        this.bullDoze.style('width', '180px');
        this.bullDoze.style('height', '40px');
        this.bullDoze.style('background', 'pink');
        this.bullDoze.mousePressed(()=>{
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

        this.thunder.position(400,240);
        this.thunder.style('width', '180px');
        this.thunder.style('height', '40px');
        this.thunder.style('background', 'pink');
        this.thunder.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-60;
                player.updatePlayer1Health(player1Health);
                player2Attack=3;
                player.updatePlayer2Attack(player2Attack);
                
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-60;
                player.updatePlayer2Health(player2Health);
                player1Attack=3;
                player.updatePlayer1Attack(player1Attack);
                
            }
            pokemonFly();
        });

        this.darkpulse.position(600,240);
        this.darkpulse.style('width', '180px');
        this.darkpulse.style('height', '40px');
        this.darkpulse.style('background', 'pink');
        this.darkpulse.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-120;
                player.updatePlayer1Health(player1Health);
                player2Attack=4;
                player.updatePlayer2Attack(player2Attack);
                
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-120;
                player.updatePlayer2Health(player2Health);
                player1Attack=4;
                player.updatePlayer1Attack(player1Attack);
                
            }
            pokemonFly();
        });

        this.flashCannon.position(800,240);
        this.flashCannon.style('width', '180px');
        this.flashCannon.style('height', '40px');
        this.flashCannon.style('background', 'pink');
        this.flashCannon.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-90;
                player.updatePlayer1Health(player1Health);
                player2Attack=5;
                player.updatePlayer2Attack(player2Attack);
               
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-90;
                player.updatePlayer2Health(player2Health);
                player1Attack=5;
                player.updatePlayer1Attack(player1Attack);
               
            }
            pokemonFly();
        });
    }
}