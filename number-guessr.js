let number = randomNumber = Math.floor(Math.random() * 10) + 1;

let play = confirm("Do you want to try and guess my number");



let run = true;

while (run = true){
    let guess = prompt("Guess my number between 1 and 10");

    if (guess == number){
        alert("You guessed my number");
        const run = false
        break
    }
    else if(guess < number){
        alert("guess higher ");
    }

    else if (guess > number){
        alert("guess lower");
    }
}

