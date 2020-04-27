
//Pick Fighter Alert
alert("Pick your Fighter");

//Define Functional Variables

function Fighter(
    name,
    image, 
    health,
    engagePower,
    startengagePower,
    counterengagePower
  ) {
    this.name = name;
    this.image = image;
    this.health = health;
    this.engagePower = engagePower;
    this.startengagePower = startengagePower;
    this.counterengagePower = counterengagePower;
  }
  
  fighters = [];
  let selectedFighterIndex;
  let defenderIndex;
  let index;
  
  // Fighter attributes defined

  function initAllFighters() {
    fighters.push(
      new Fighter("Jabba The Hut", "./Assets/images/jabba.jpg", 250, 32, 32, 10)
    );
    fighters.push(
      new Fighter("Baby Yoda", "./Assets/images/yoda.jpg", 220, 10, 10, 30)
    );
    fighters.push(
      new Fighter("Rey", "./Assets/images/Rey.jpg", 160, 18, 9, 30)
    );
    fighters.push(
      new Fighter("Jar Jar Binks", "./Assets/images/jarjar.jpg", 140, 12, 12, 25)
    );
  }


const newLocal = `" alt="" class="fighterImg">`;
  function renderYourFighterBox(fighter) {
    let name =  fighter.name;
    let img = `<img src="` + fighter.image + newLocal;
    let health = fighter.health
    if (!selectedFighterIndex) {
      $("#fighterSelect").append(
        `<div class="col s3"><div class="card">
        <div class="card-content charCard" id="char` +
          index +
          `">` +
          name +
          img +
          health +
          `</div></div></div>`
      );
    } else {
      $("#fighterSelect").html(
        `<div class="col s3"><div class="card">
      <div class="card-content charCard" id="char` +
          index +
          `">` +
          name +
          img +
          health +
          `</div></div></div>`
      );
          if (fighters[selectedFighterIndex].health <= 0) {
            $("#defender").empty();
            $("#attackMessage").html(
              `<p>You have been defeated...GAME OVER!!!</p><a class="waves-effect waves-light red darken-1 btn-small " id="restartBtn">Restart</a>`
            );
            defenderIndex = null;
            resetButtonListen();
            }
    }
  }
  

  function renderOpponentBox(fighter) {
    alert
      if(fighter.health > 0) {
      let name = fighter.name; 
      let img = `<img src="` + fighter.image + `" alt="" class="fighterImg">`;
      let health = "<p class='center-align'>" + fighter.health + "</p>";
      $("#opponent").append(
        `<div class="col s3"><div class="card">
        <div class="card-content charCard" id="char` +
          index +
          `">` +
          name +
          img +
          health +
          `</div></div></div>`
      );
    }
  }
  
  function renderDefenderBox(fighter) {
    if (fighter) {
      $("#engageMessage").empty();
      let name = fighter.name;
      let img = `<img src="` + fighter.image + `" alt="" class="fighterImg">`;
      let health = "<p class='center-align'>" + fighter.health + "</p>";
      $("#defender").html(
        `<div class="col s10"><div class="card">
          <div class="card-content charCard"` +
          defenderIndex +
          //Refactor
          `">` +
          name +
          img +
          health +
          `</div></div></div>`
      );
    }
  }
  
 
  function renderMultipleYourCharOptions(char) {
    if (!selectedFighterIndex) {
      $("#fighterSelect").empty();
      index = 0;
      char.forEach(fighter => {
        renderYourFighterBox(fighter);
        index++;
      });
    }
    listenForInput();
  }

   //Fighter Selection
  function listenForInput() {
    $(".charCard").on("click", function() {
      // Choose Fighter
      if (!selectedFighterIndex) {
        selectedFighterIndex = this.id.substring(4);
        renderYourFighterBox(fighters[selectedFighterIndex]);
  
        // Choose Opponent
        index = 0;
        fighters.forEach(fighter => {
          if (fighter.name != fighters[selectedFighterIndex].name) {
            renderOpponentBox(fighter);
          }
          index++;
        });
        listenForInput();
      }
  
      else {
        if (!defenderIndex && fighters[selectedFighterIndex].health > 0) {
          defenderIndex = this.id.substring(4);
  
          renderDefenderBox(fighters[defenderIndex]);
          index = 0;
          $("#opponent").empty();
          fighters.forEach(fighter => {
            let enemyIndex = 0;
            if (
              fighter.name != fighters[selectedFighterIndex].name &&
              fighter.name != fighters[defenderIndex].name &&
              enemyIndex === 0
            ) {
              renderOpponentBox(fighter);
            }
            index++;
            enemyIndex++;
          });

          listenForInput();
        }
      }
    });
  }
  
  initAllFighters();
  renderMultipleYourCharOptions(fighters);
  
    //Engagement Funtion
  $("#engageBtn").on("click", function() {
    if (selectedFighterIndex && defenderIndex) {
      if (fighters[selectedFighterIndex].health > 0) {
        
        let health = document.getElementById("health")
        health.value -= 10;
        //Attack
        fighters[defenderIndex].health -=
          fighters[selectedFighterIndex].engagePower;
        
        // Counter
        fighters[selectedFighterIndex].health -=
          fighters[defenderIndex].counterengagePower;

     //Damage dilemenation section
        if (fighters[defenderIndex].health <= 0) {
          $("#defender").empty();
          $("#engageMessage").html(
            "<p>You win"
            
            );
        } 
        
        
        
     //////////// Missing Next Fight Selection Option
   
          
      } 
    }  
  });
  

    
    
    
    
    
    
  
 
