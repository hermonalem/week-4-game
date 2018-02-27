
var computerNumber;
var crystal1Number;
var crystal2Number;
var crystal3Number;
var crystal4Number;
var userCount=0
var Wins=0
var losses=0


$("#crystal1").on("click", function(events) {
    userCount+=crystal1Number;
    score();
   console.log(crystal1Number)
  });
  $("#crystal2").on("click", function(events) {
    userCount+=crystal2Number;
    score();
   console.log(crystal2Number)
});
$("#crystal3").on("click", function(events) {
    userCount+=crystal3Number;
    score();
   console.log(crystal3Number)
});
$("#crystal4").on("click", function(events) {
    userCount+=crystal4Number; 
    score();
   console.log(crystal4Number)
});

  startGame()
  
  //function game start//
  function startGame () {
      userCount=0;
      computerNumber=Math.floor(Math.random()*101)+19;
      crystal1Number=Math.floor(Math.random()*12)+1;
      crystal2Number=Math.floor(Math.random()*12)+1;
      crystal3Number=Math.floor(Math.random()*12)+1;
      crystal4Number=Math.floor(Math.random()*12)+1;
      $("#computernumber").html(computerNumber);
      
  }
 
   function score(){
       if (userCount===computerNumber){
           Wins++
           startGame()
           alert("You win!")
           $("#wins_counter").html(Wins)
        
       }
       else if (userCount>computerNumber){
           losses++
           startGame()
           alert("you lost!")
           $("#losses_counter").html(losses)
       }
   }