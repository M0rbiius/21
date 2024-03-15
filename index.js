
let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""


let messageEl = document.getElementById("message-el")


let sumEl= document.getElementById("sum-el")
//let sumEl = document.querySelector("body")

let cardEl = document.getElementById("card-el")

function startGame(){
rendertGame()
}
function rendertGame() {

    cardEl.textContent = "Cards:" + randomNumber1 +" " + randomNumber2;

    sumEl.textContent = "Sum:" + ranSum;

    if (ranSum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (ranSum === 21) {
        message = "You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
   
     messageEl.textContent = message;
}


function newCard() {
   console.log("Drawing a new card from the deck!")

   
   ranSum += randomNumber3;
  rendertGame()
}




// Генерация случайного числа в диапазоне от min (включительно) до max (включительно)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Получение двух разных случайных чисел
let randomNumber1 = getRandomNumber(1, 10); 
let randomNumber2 = getRandomNumber(1, 10); 
let randomNumber3 = getRandomNumber(1, 10);
console.log(randomNumber3)
ranSum = randomNumber1 + randomNumber2;
