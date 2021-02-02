class Greyninja{
    constructor(){
        this.smackDown = createButton('Smack Down');
        this.iceBeam = createButton('Ice Beam');
        this.nightSlash = createButton('Night Slash');
        this.hydroPump = createButton(' Hydropump ');
        this.quickAttack = createButton('Quick Attack');
    }

    hide(){
        this.smackDown.hide();
        this.iceBeam.hide();
        this.nightSlash.hide();
        this.hydroPump.hide();
        this.quickAttack.hide();
    }

    display(){
        Player.getPlayerInfo();
        player.getPlayer1Health();
        player.getPlayer2Health();
        
        this.smackDown.position(0,240);
        this.smackDown.style('width', '180px');
        this.smackDown.style('height', '40px');
        this.smackDown.style('background', 'lightblue');
        this.smackDown.mousePressed(()=>{
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

        this.iceBeam.position(200,240);
        this.iceBeam.style('width', '180px');
        this.iceBeam.style('height', '40px');
        this.iceBeam.style('background', 'lightblue');
        this.iceBeam.mousePressed(()=>{
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

        this.nightSlash.position(400,240);
        this.nightSlash.style('width', '180px');
        this.nightSlash.style('height', '40px');
        this.nightSlash.style('background', 'lightblue');
        this.nightSlash.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-90;
                player.updatePlayer1Health(player1Health);
                player2Attack=3;
                player.updatePlayer2Attack(player2Attack);
                
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-90;
                player.updatePlayer2Health(player2Health);
                player1Attack=3;
                player.updatePlayer1Attack(player1Attack);
                
            }
            pokemonFly();
        });

        this.hydroPump.position(600,240);
        this.hydroPump.style('width', '180px');
        this.hydroPump.style('height', '40px');
        this.hydroPump.style('background', 'lightblue');
        this.hydroPump.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-170;
                player.updatePlayer1Health(player1Health);
                player2Attack=4;
                player.updatePlayer2Attack(player2Attack);
                
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-170;
                player.updatePlayer2Health(player2Health);
                player1Attack=4;
                player.updatePlayer1Attack(player1Attack);
                
            }
            pokemonFly();
        });

        this.quickAttack.position(800,240);
        this.quickAttack.style('width', '180px');
        this.quickAttack.style('height', '40px');
        this.quickAttack.style('background', 'lightblue');
        this.quickAttack.mousePressed(()=>{
            if(allPlayers.player1.pokemon!==player.pokemon){
                player1Health=player1Health-40;
                player.updatePlayer1Health(player1Health);
                player2Attack=5;
                player.updatePlayer2Attack(player2Attack);
                
            }
            if(allPlayers.player2.pokemon!==player.pokemon){
                player2Health=player2Health-40;
                player.updatePlayer2Health(player2Health);
                player1Attack=5;
                player.updatePlayer1Attack(player1Attack);
                
            }
            pokemonFly();
        });
        
    }
}