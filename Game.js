class Game {
  constructor(){
     this.finish = createElement('h1');
     this.finish1 = createElement('h1');
     this.attack =createElement('h1');
     this.attack.position(600,20);
     this.attack.style('font-size','30px');
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
      
      player1=createSprite(100,450);
      player2=createSprite(1100,450);
      cars = [player1,player2];
    }
    
  }

  play(){
    form.hide();

    battleSound.play();
        
    Player.getPlayerInfo();
    player.getCarsAtEnd();
    player.getPlayer1Attack();
    player.getPlayer2Attack();

    player.displayHealth(player1Health,1);
    player.displayHealth(player2Health,2);

    if(allPlayers !== undefined){
      background(backgroundImage);     
      
      if(allPlayers.player2.pokemon!==player.pokemon){
          switch(allPlayers.player2.pokemon){
            case 1:player2.addImage(arceusImg);
                   switch(player2Attack){
                        case 1:this.attack.html(allPlayers.player2.name+"'s pokemon used hidden power");
                               this.attack.style('color','white');
                        break;
                        case 2:this.attack.html(allPlayers.player2.name+"'s pokemon used dragon claw");
                               this.attack.style('color','white');
                        break;
                        case 3:this.attack.html(allPlayers.player2.name+"'s pokemon used hyper voice");
                               this.attack.style('color','white');
                        break;
                        case 4:this.attack.html(allPlayers.player2.name+"'s pokemon used refresh");
                               this.attack.style('color','white');
                        break;
                        case 5:this.attack.html(allPlayers.player2.name+"'s pokemon used future sight");
                               this.attack.style('color','white');
                        break;
                   }
            break;
            case 2:player2.addImage(mewImg);
                  player2.scale=0.75;
                  switch(player2Attack){
                        case 1:this.attack.html(allPlayers.player2.name+"'s pokemon used charge beam");
                               this.attack.style('color','white');
                        break;
                        case 2:this.attack.html(allPlayers.player2.name+"'s pokemon used bull doze");
                               this.attack.style('color','white');
                        break;
                        case 3:this.attack.html(allPlayers.player2.name+"'s pokemon used thunder");
                               this.attack.style('color','white');
                        break;
                        case 4:this.attack.html(allPlayers.player2.name+"'s pokemon used dark pulse");
                               this.attack.style('color','white');
                        break;
                        case 5:this.attack.html(allPlayers.player2.name+"'s pokemon used flash cannon");
                               this.attack.style('color','white');
                        break;
                   }
            break;
            case 3:player2.addImage(darkraiImg);
                  switch(player2Attack){
                        case 1:this.attack.html(allPlayers.player2.name+"'s pokemon used faint attack");
                              this.attack.style('color','white');
                        break;
                        case 2:this.attack.html(allPlayers.player2.name+"'s pokemon used dark pulse");
                              this.attack.style('color','white');
                        break;
                        case 3:this.attack.html(allPlayers.player2.name+"'s pokemon used ice beam");
                              this.attack.style('color','white');
                        break;
                        case 4:this.attack.html(allPlayers.player2.name+"'s pokemon used shadow ball");
                              this.attack.style('color','white');
                        break;
                        case 5:this.attack.html(allPlayers.player2.name+"'s pokemon used focus blast");
                              this.attack.style('color','white');
                        break;
                  }
            break;
            case 4:player2.addImage(greyninjaImg);
                  player2.scale=0.45;
                  switch(player2Attack){
                        case 1:this.attack.html(allPlayers.player2.name+"'s pokemon used smack down");
                               this.attack.style('color','white');
                        break;
                        case 2:this.attack.html(allPlayers.player2.name+"'s pokemon used ice beam");
                               this.attack.style('color','white');
                        break;
                        case 3:this.attack.html(allPlayers.player2.name+"'s pokemon used night slash");
                               this.attack.style('color','white');
                        break;
                        case 4:this.attack.html(allPlayers.player2.name+"'s pokemon used hydropump");
                               this.attack.style('color','white');
                        break;
                        case 5:this.attack.html(allPlayers.player2.name+"'s pokemon used quick attack");
                               this.attack.style('color','white');
                        break;
                   }
            break;
            case 5:player2.addImage(charizardImg);
                  player2.scale=0.2;
                  switch(player2Attack){
                        case 1:this.attack.html(allPlayers.player2.name+"'s pokemon used flame thrower");
                               this.attack.style('color','white');
                        break;
                        case 2:this.attack.html(allPlayers.player2.name+"'s pokemon used over heat");
                               this.attack.style('color','white');
                        break;
                        case 3:this.attack.html(allPlayers.player2.name+"'s pokemon used heat wave");
                               this.attack.style('color','white');
                        break;
                        case 4:this.attack.html(allPlayers.player2.name+"'s pokemon used steel wing");
                               this.attack.style('color','white');
                        break;
                        case 5:this.attack.html(allPlayers.player2.name+"'s pokemon used fire spin");
                               this.attack.style('color','white');
                        break;
                   }
            break;
            case 6:player2.addImage(infernapeImg);
                  switch(player2Attack){
                        case 1:this.attack.html(allPlayers.player2.name+"'s pokemon used ember");
                              this.attack.style('color','white');
                        break;
                        case 2:this.attack.html(allPlayers.player2.name+"'s pokemon used flare blitz");
                              this.attack.style('color','white');
                        break;
                        case 3:this.attack.html(allPlayers.player2.name+"'s pokemon used brick break");
                              this.attack.style('color','white');
                        break;
                        case 4:this.attack.html(allPlayers.player2.name+"'s pokemon used flame wheel");
                              this.attack.style('color','white');
                        break;
                        case 5:this.attack.html(allPlayers.player2.name+"'s pokemon used fire charge");
                              this.attack.style('color','white');
                        break;
                  }
            break;
          }
      }
      else{
            switch(allPlayers.player1.pokemon){
                  case 1:player2.addImage(arceusImg);
                        switch(player1Attack){
                              case 1:this.attack.html(allPlayers.player1.name+"'s pokemon used hidden power");
                                    this.attack.style('color','white');
                              break;
                              case 2:this.attack.html(allPlayers.player1.name+"'s pokemon used dragon claw");
                                    this.attack.style('color','white');
                              break;
                              case 3:this.attack.html(allPlayers.player1.name+"'s pokemon used hyper voice");
                                    this.attack.style('color','white');
                              break;
                              case 4:this.attack.html(allPlayers.player1.name+"'s pokemon used refresh");
                                    this.attack.style('color','white');
                              break;
                              case 5:this.attack.html(allPlayers.player1.name+"'s pokemon used future sight");
                                    this.attack.style('color','white');
                              break;
                        }
                  break;
                  case 2:player2.addImage(mewImg);
                        player2.scale=0.75;
                        switch(player1Attack){
                              case 1:this.attack.html(allPlayers.player1.name+"'s pokemon used charge beam");
                                     this.attack.style('color','white');
                              break;
                              case 2:this.attack.html(allPlayers.player1.name+"'s pokemon used bull doze");
                                     this.attack.style('color','white');
                              break;
                              case 3:this.attack.html(allPlayers.player1.name+"'s pokemon used thunder");
                                     this.attack.style('color','white');
                              break;
                              case 4:this.attack.html(allPlayers.player1.name+"'s pokemon used dark pulse");
                                     this.attack.style('color','white');
                              break;
                              case 5:this.attack.html(allPlayers.player1.name+"'s pokemon used flash cannon");
                                     this.attack.style('color','white');
                              break;
                         }
                  break;
                  case 3:player2.addImage(darkraiImg);
                        switch(player1Attack){
                              case 1:this.attack.html(allPlayers.player1.name+"'s pokemon used faint attack");
                                    this.attack.style('color','white');
                              break;
                              case 2:this.attack.html(allPlayers.player1.name+"'s pokemon used dark pulse");
                                    this.attack.style('color','white');
                              break;
                              case 3:this.attack.html(allPlayers.player1.name+"'s pokemon used ice beam");
                                    this.attack.style('color','white');
                              break;
                              case 4:this.attack.html(allPlayers.player1.name+"'s pokemon used shadow ball");
                                    this.attack.style('color','white');
                              break;
                              case 5:this.attack.html(allPlayers.player1.name+"'s pokemon used focus blast");
                                    this.attack.style('color','white');
                              break;
                        }
                  break;
                  case 4:player2.addImage(greyninjaImg);
                        player2.scale=0.45;
                        switch(player1Attack){
                              case 1:this.attack.html(allPlayers.player1.name+"'s pokemon used smack down");
                                     this.attack.style('color','white');
                              break;
                              case 2:this.attack.html(allPlayers.player1.name+"'s pokemon used ice beam");
                                     this.attack.style('color','white');
                              break;
                              case 3:this.attack.html(allPlayers.player1.name+"'s pokemon used night slash");
                                     this.attack.style('color','white');
                              break;
                              case 4:this.attack.html(allPlayers.player1.name+"'s pokemon used hydropump");
                                     this.attack.style('color','white');
                              break;
                              case 5:this.attack.html(allPlayers.player1.name+"'s pokemon used quick attack");
                                     this.attack.style('color','white');
                              break;
                         }
                  break;
                  case 5:player2.addImage(charizardImg);
                        player2.scale=0.2;
                        switch(player1Attack){
                              case 1:this.attack.html(allPlayers.player1.name+"'s pokemon used flame thrower");
                                     this.attack.style('color','white');
                              break;
                              case 2:this.attack.html(allPlayers.player1.name+"'s pokemon used over heat");
                                     this.attack.style('color','white');
                              break;
                              case 3:this.attack.html(allPlayers.player1.name+"'s pokemon used heat wave");
                                     this.attack.style('color','white');
                              break;
                              case 4:this.attack.html(allPlayers.player1.name+"'s pokemon used steel wing");
                                     this.attack.style('color','white');
                              break;
                              case 5:this.attack.html(allPlayers.player1.name+"'s pokemon used fire spin");
                                     this.attack.style('color','white');
                              break;
                         }
                  break;
                  case 6:player2.addImage(infernapeImg);
                        switch(player1Attack){
                              case 1:this.attack.html(allPlayers.player1.name+"'s pokemon used ember");
                                    this.attack.style('color','white');
                              break;
                              case 2:this.attack.html(allPlayers.player1.name+"'s pokemon used flare blitz");
                                    this.attack.style('color','white');
                              break;
                              case 3:this.attack.html(allPlayers.player1.name+"'s pokemon used brick break");
                                    this.attack.style('color','white');
                              break;
                              case 4:this.attack.html(allPlayers.player1.name+"'s pokemon used flame wheel");
                                    this.attack.style('color','white');
                              break;
                              case 5:this.attack.html(allPlayers.player1.name+"'s pokemon used fire charge");
                                    this.attack.style('color','white');
                              break;
                        }
                  break;
                }
      }
      if(allPlayers.player1.pokemon!==player.pokemon){
            switch(allPlayers.player2.pokemon){
              case 1:player1.addImage(arceusImg2);
                     poke1.display();
              break;
              case 2:player1.addImage(mewImg);
                     player1.scale=0.75;
                     poke2.display();
              break;
              case 3:player1.addImage(darkraiImg2);
                     poke3.display();
              break;
              case 4:player1.addImage(greyninjaImg2);
                    player1.scale=0.45;
                    poke4.display();
              break;
              case 5:player1.addImage(charizardImg2);
                    player1.scale=0.2;
                    poke5.display();
              break;
              case 6:player1.addImage(infernapeImg2);
                    poke6.display();
              break;
            }
      }
      else{
            switch(allPlayers.player1.pokemon){
                  case 1:player1.addImage(arceusImg2);
                         poke1.display();
                  break;
                  case 2:player1.addImage(mewImg);
                        player1.scale=0.75;
                        poke2.display();
                  break;
                  case 3:player1.addImage(darkraiImg2);
                         poke3.display();
                  break;
                  case 4:player1.addImage(greyninjaImg2);
                        player1.scale=0.45;
                        poke4.display();
                  break;
                  case 5:player1.addImage(charizardImg2);
                        player1.scale=0.2;
                        poke5.display();
                  break;
                  case 6:player1.addImage(infernapeImg2);
                         poke6.display();
                  break;
                }
      }
      if(allPlayers.player2.pokemon!==player.pokemon){
        switch(allPlayers.player1.pokemon){
          case 1:player1.addImage(arceusImg2);
                 poke1.display();
          break;
          case 2:player1.addImage(mewImg);
                player1.scale=0.75;
                poke2.display();
          break;
          case 3:player1.addImage(darkraiImg2);
                 poke3.display();
          break;
          case 4:player1.addImage(greyninjaImg2);
                player1.scale=0.45;
                poke4.display();
          break;
          case 5:player1.addImage(charizardImg2);
                player1.scale=0.2;
                poke5.display();
          break;
          case 6:player1.addImage(infernapeImg2);
                 poke6.display();
          break;
        }
    }
    else{
      switch(allPlayers.player2.pokemon){
            case 1:player1.addImage(arceusImg2);
                   poke1.display();
            break;
            case 2:player1.addImage(mewImg);
                   player1.scale=0.75;
                   poke2.display();
            break;
            case 3:player1.addImage(darkraiImg2);
                   poke3.display();
            break;
            case 4:player1.addImage(greyninjaImg2);
                  player1.scale=0.45;
                  poke4.display();
            break;
            case 5:player1.addImage(charizardImg2);
                  player1.scale=0.2;
                  poke5.display();
            break;
            case 6:player1.addImage(infernapeImg2);
                  poke6.display();
            break;
          }
    }
    if(allPlayers.player1.pokemon!==player.pokemon){
          switch(allPlayers.player1.pokemon){
            case 1:player2.addImage(arceusImg);
                  switch(player1Attack){
                        case 1:this.attack.html(allPlayers.player1.name+"'s pokemon used hidden power");
                              this.attack.style('color','white');
                        break;
                        case 2:this.attack.html(allPlayers.player1.name+"'s pokemon used dragon claw");
                              this.attack.style('color','white');
                        break;
                        case 3:this.attack.html(allPlayers.player1.name+"'s pokemon used hyper voice");
                              this.attack.style('color','white');
                        break;
                        case 4:this.attack.html(allPlayers.player1.name+"'s pokemon used refresh");
                              this.attack.style('color','white');
                        break;
                        case 5:this.attack.html(allPlayers.player1.name+"'s pokemon used future sight");
                              this.attack.style('color','white');
                        break;
                  }
            break;
            case 2:player2.addImage(mewImg);
                  player2.scale=0.75;
                  switch(player1Attack){
                        case 1:this.attack.html(allPlayers.player1.name+"'s pokemon used charge beam");
                               this.attack.style('color','white');
                        break;
                        case 2:this.attack.html(allPlayers.player1.name+"'s pokemon used bull doze");
                               this.attack.style('color','white');
                        break;
                        case 3:this.attack.html(allPlayers.player1.name+"'s pokemon used thunder");
                               this.attack.style('color','white');
                        break;
                        case 4:this.attack.html(allPlayers.player1.name+"'s pokemon used dark pulse");
                               this.attack.style('color','white');
                        break;
                        case 5:this.attack.html(allPlayers.player1.name+"'s pokemon used flash cannon");
                               this.attack.style('color','white');
                        break;
                   }
            break;
            case 3:player2.addImage(darkraiImg);
                  switch(player1Attack){
                        case 1:this.attack.html(allPlayers.player1.name+"'s pokemon used faint attack");
                              this.attack.style('color','white');
                        break;
                        case 2:this.attack.html(allPlayers.player1.name+"'s pokemon used dark pulse");
                              this.attack.style('color','white');
                        break;
                        case 3:this.attack.html(allPlayers.player1.name+"'s pokemon used ice beam");
                              this.attack.style('color','white');
                        break;
                        case 4:this.attack.html(allPlayers.player1.name+"'s pokemon used shadow ball");
                              this.attack.style('color','white');
                        break;
                        case 5:this.attack.html(allPlayers.player1.name+"'s pokemon used focus blast");
                              this.attack.style('color','white');
                        break;
                  }
            break;
            case 4:player2.addImage(greyninjaImg);
                  player2.scale=0.45;
                  switch(player1Attack){
                        case 1:this.attack.html(allPlayers.player1.name+"'s pokemon used smack down");
                               this.attack.style('color','white');
                        break;
                        case 2:this.attack.html(allPlayers.player1.name+"'s pokemon used ice beam");
                               this.attack.style('color','white');
                        break;
                        case 3:this.attack.html(allPlayers.player1.name+"'s pokemon used night slash");
                               this.attack.style('color','white');
                        break;
                        case 4:this.attack.html(allPlayers.player1.name+"'s pokemon used hydropump");
                               this.attack.style('color','white');
                        break;
                        case 5:this.attack.html(allPlayers.player1.name+"'s pokemon used quick attack");
                               this.attack.style('color','white');
                        break;
                   }
            break;
            case 5:player2.addImage(charizardImg);
                  player2.scale=0.2;
                  switch(player1Attack){
                        case 1:this.attack.html(allPlayers.player1.name+"'s pokemon used flame thrower");
                               this.attack.style('color','white');
                        break;
                        case 2:this.attack.html(allPlayers.player1.name+"'s pokemon used over heat");
                               this.attack.style('color','white');
                        break;
                        case 3:this.attack.html(allPlayers.player1.name+"'s pokemon used heat wave");
                               this.attack.style('color','white');
                        break;
                        case 4:this.attack.html(allPlayers.player1.name+"'s pokemon used steel wing");
                               this.attack.style('color','white');
                        break;
                        case 5:this.attack.html(allPlayers.player1.name+"'s pokemon used fire spin");
                               this.attack.style('color','white');
                        break;
                   }
            break;
            case 6:player2.addImage(infernapeImg);
                  switch(player1Attack){
                        case 1:this.attack.html(allPlayers.player1.name+"'s pokemon used ember");
                              this.attack.style('color','white');
                        break;
                        case 2:this.attack.html(allPlayers.player1.name+"'s pokemon used flare blitz");
                              this.attack.style('color','white');
                        break;
                        case 3:this.attack.html(allPlayers.player1.name+"'s pokemon used brick break");
                              this.attack.style('color','white');
                        break;
                        case 4:this.attack.html(allPlayers.player1.name+"'s pokemon used flame wheel");
                              this.attack.style('color','white');
                        break;
                        case 5:this.attack.html(allPlayers.player1.name+"'s pokemon used fire charge");
                              this.attack.style('color','white');
                        break;
                  }
            break;
          }
    }else{
      switch(allPlayers.player2.pokemon){
            case 1:player2.addImage(arceusImg);
                   switch(player2Attack){
                        case 1:this.attack.html(allPlayers.player2.name+"'s pokemon used hidden power");
                               this.attack.style('color','white');
                        break;
                        case 2:this.attack.html(allPlayers.player2.name+"'s pokemon used dragon claw");
                               this.attack.style('color','white');
                        break;
                        case 3:this.attack.html(allPlayers.player2.name+"'s pokemon used hyper voice");
                               this.attack.style('color','white');
                        break;
                        case 4:this.attack.html(allPlayers.player2.name+"'s pokemon used refresh");
                               this.attack.style('color','white');
                        break;
                        case 5:this.attack.html(allPlayers.player2.name+"'s pokemon used future sight");
                               this.attack.style('color','white');
                        break;
                   }
            break;
            case 2:player2.addImage(mewImg);
                  player2.scale=0.75;
                  switch(player2Attack){
                        case 1:this.attack.html(allPlayers.player2.name+"'s pokemon used charge beam");
                               this.attack.style('color','white');
                        break;
                        case 2:this.attack.html(allPlayers.player2.name+"'s pokemon used bull doze");
                               this.attack.style('color','white');
                        break;
                        case 3:this.attack.html(allPlayers.player2.name+"'s pokemon used thunder");
                               this.attack.style('color','white');
                        break;
                        case 4:this.attack.html(allPlayers.player2.name+"'s pokemon used dark pulse");
                               this.attack.style('color','white');
                        break;
                        case 5:this.attack.html(allPlayers.player2.name+"'s pokemon used flash cannon");
                               this.attack.style('color','white');
                        break;
                   }
            break;
            case 3:player2.addImage(darkraiImg);
                  switch(player2Attack){
                        case 1:this.attack.html(allPlayers.player2.name+"'s pokemon used faint attack");
                              this.attack.style('color','white');
                        break;
                        case 2:this.attack.html(allPlayers.player2.name+"'s pokemon used dark pulse");
                              this.attack.style('color','white');
                        break;
                        case 3:this.attack.html(allPlayers.player2.name+"'s pokemon used ice beam");
                              this.attack.style('color','white');
                        break;
                        case 4:this.attack.html(allPlayers.player2.name+"'s pokemon used shadow ball");
                              this.attack.style('color','white');
                        break;
                        case 5:this.attack.html(allPlayers.player2.name+"'s pokemon used focus blast");
                              this.attack.style('color','white');
                        break;
                  }
            break;
            case 4:player2.addImage(greyninjaImg);
                  player2.scale=0.45;
                  switch(player2Attack){
                        case 1:this.attack.html(allPlayers.player2.name+"'s pokemon used smack down");
                               this.attack.style('color','white');
                        break;
                        case 2:this.attack.html(allPlayers.player2.name+"'s pokemon used ice beam");
                               this.attack.style('color','white');
                        break;
                        case 3:this.attack.html(allPlayers.player2.name+"'s pokemon used night slash");
                               this.attack.style('color','white');
                        break;
                        case 4:this.attack.html(allPlayers.player2.name+"'s pokemon used hydropump");
                               this.attack.style('color','white');
                        break;
                        case 5:this.attack.html(allPlayers.player2.name+"'s pokemon used quick attack");
                               this.attack.style('color','white');
                        break;
                   }
            break;
            case 5:player2.addImage(charizardImg);
                  player2.scale=0.2;
                  switch(player2Attack){
                        case 1:this.attack.html(allPlayers.player2.name+"'s pokemon used flame thrower");
                               this.attack.style('color','white');
                        break;
                        case 2:this.attack.html(allPlayers.player2.name+"'s pokemon used over heat");
                               this.attack.style('color','white');
                        break;
                        case 3:this.attack.html(allPlayers.player2.name+"'s pokemon used heat wave");
                               this.attack.style('color','white');
                        break;
                        case 4:this.attack.html(allPlayers.player2.name+"'s pokemon used steel wing");
                               this.attack.style('color','white');
                        break;
                        case 5:this.attack.html(allPlayers.player2.name+"'s pokemon used fire spin");
                               this.attack.style('color','white');
                        break;
                   }
            break;
            case 6:player2.addImage(infernapeImg);
                  switch(player2Attack){
                        case 1:this.attack.html(allPlayers.player2.name+"'s pokemon used ember");
                              this.attack.style('color','white');
                        break;
                        case 2:this.attack.html(allPlayers.player2.name+"'s pokemon used flare blitz");
                              this.attack.style('color','white');
                        break;
                        case 3:this.attack.html(allPlayers.player2.name+"'s pokemon used brick break");
                              this.attack.style('color','white');
                        break;
                        case 4:this.attack.html(allPlayers.player2.name+"'s pokemon used flame wheel");
                              this.attack.style('color','white');
                        break;
                        case 5:this.attack.html(allPlayers.player2.name+"'s pokemon used fire charge");
                              this.attack.style('color','white');
                        break;
                  }
            break;
          }  
    }
      

      

        textSize(20);
        strokeWeight(5);
        stroke("white");
        fill("red");
        text(allPlayers.player1.name + "'s pokemon's Health: "+player1Health,50,50);
        text(allPlayers.player2.name + "'s pokemon's Health: " +player2Health, 50, 100);

        if(player1Health<=0 || player2Health<=0){
           gameState=2;
           game.update(gameState);
        }
    }  
    drawSprites();
    //fill(255);
    //text(mouseX+","+mouseY,mouseX,mouseY);
    player2.collide(invisibleGnd);
    player2.velocityY+=1;
  }

  end(){
     background(255);
     if(player1Health<=0){
           poke1.hide();
           poke2.hide();
           poke3.hide();
           poke4.hide();
           poke5.hide();
           poke6.hide();
           this.finish.html(allPlayers.player1.name+"'s pokemon fainted .");
           this.finish.position(450,300);
           this.finish.style('color', 'red');
           this.finish.style('font-size', '40px');
           this.finish1.html(allPlayers.player2.name+"'s pokemon won the match.");
           this.finish1.position(450,350);
           this.finish1.style('color', 'red');
           this.finish1.style('font-size', '40px');
        
     }
     if(player2Health<=0){
            poke1.hide();
            poke2.hide();
            poke3.hide();
            poke4.hide();
            poke5.hide();
            poke6.hide();
            this.finish.html(allPlayers.player2.name+"'s pokemon fainted .");
            this.finish.position(450,300);
            this.finish.style('color', 'red');
            this.finish.style('font-size', '40px');
            this.finish1.html(allPlayers.player1.name+"'s pokemon won the match.");
            this.finish1.position(450,350);
            this.finish1.style('color', 'red');
            this.finish1.style('font-size', '40px');
   
      }

  }
}
