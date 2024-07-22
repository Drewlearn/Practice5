// DICE ROLLER PROGRAM

function rollDice(){

   const numofDice = document.getElementById("numofDice").value;
   const diceResult = document.getElementById("diceResult");
   const diceImgs = document.getElementById("diceImgs");
   const values = [];
   const images = [];

   for(let i = 0; i < numofDice; i++){
       const value = Math.floor(Math.random() * 6) + 1;
       values.push(value);
       images.push(`<img src ="dice_images/${value}.png">`);
   }

   diceResult.textContent = `dice: ${values.join(', ')}`;
   diceImgs.innerHTML = images.join('');
}
