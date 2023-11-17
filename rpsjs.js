var rand;
var wins=0;
var draws=0;
var losses=0;
rock.addEventListener('click', function(e){
    rand1 = Math.floor(Math.random()*3+1)
    if(rand1==1)
    {    
      document.getElementById("result").innerHTML = "You have chosen rock. The computer has chosen scissors. You have won";
      wins++
      document.getElementById("wins").innerHTML = "wins: "+wins.toString();
    }
    else if(rand1==2)
    {
      document.getElementById("result").innerHTML = "You have chosen rock. The computer has also chosen rock. It's a draw";
      draws++
      document.getElementById("draws").innerHTML = "draws: "+draws.toString();
    }
    else if(rand1==3)
    {
      document.getElementById("result").innerHTML = "You have chosen rock. The computer has chosen paper. You have lost";
      losses++
      document.getElementById("losses").innerHTML = "losses: "+losses.toString();
    }
  })
  paper.addEventListener('click', function(e){
    rand1 = Math.floor(Math.random()*3+1)
    if(rand1==1)
    {    
      document.getElementById("result").innerHTML = "You have chosen paper. The computer has chosen rock. You have won.";
      wins++
      document.getElementById("wins").innerHTML = "wins: "+wins.toString();
    }
    else if(rand1==2)
    {
      document.getElementById("result").innerHTML =  "You have chosen paper. The computer has also chosen paper. It's a draw.";
      draws++
      document.getElementById("draws").innerHTML = "draws: "+draws.toString();
    }
    else if(rand1==3)
    {
      document.getElementById("result").innerHTML =  "You have chosen paper. The computer has chosen scissors. You have lost.";
      losses++
      document.getElementById("losses").innerHTML = "losses: "+losses.toString();
    }
  })
  scissors.addEventListener('click', function(e){
    rand1 = Math.floor(Math.random()*3+1)
    if(rand1==1)
    {    
      document.getElementById("result").innerHTML = "You have chosen scissors. The computer has chosen paper. You have won.";
      wins++
      document.getElementById("wins").innerHTML = "wins: "+wins.toString();
    }
    else if(rand1==2)
    {
      document.getElementById("result").innerHTML = "You have chosen scissors. The computer has also chosen scissors. It's a draw.";
      draws++
      document.getElementById("draws").innerHTML = "draws: "+draws.toString();
    }
    else if(rand1==3)
    {
      document.getElementById("result").innerHTML = "You have chosen scissors. The computer has chosen rock. You have lost.";
      losses++
      document.getElementById("losses").innerHTML = "losses: "+losses.toString();
    }
  })