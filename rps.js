let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScore();

function playGame(playerMove){

    const computerMove = pickComputerMove();

    let result = '';

    if(playerMove === 'rock'){

        if(computerMove === 'rock'){
            result = 'Tie';
        }
        else if(computerMove === 'paper'){
            result = 'You Lose';
        }
        else{
            result = 'You Win';
        }

    }

    else if(playerMove === 'paper'){

        if(computerMove === 'rock'){
            result = 'You Win';
        }
        else if(computerMove === 'paper'){
            result = 'Tie';
        }
        else{
            result = 'You Lose';
        }

    }

    else if(playerMove === 'scissors'){

        if(computerMove === 'rock'){
            result = 'You Lose';
        }
        else if(computerMove === 'paper'){
            result = 'You Win';
        }
        else{
            result = 'Tie';
        }

    }

    if(result === 'You Win'){
        score.wins++;
    }
    else if(result === 'You Lose'){
        score.losses++;
    }
    else{
        score.ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.result').innerHTML = result;

    document.querySelector('.move-display').innerHTML =
        `You
        <img src="${playerMove}.png" class="moves">
        <img src="${computerMove}.png" class="moves">
        Computer`;

    updateScore();
}

function updateScore(){
    document.querySelector('.score').innerHTML =
        `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function resetScore(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    localStorage.removeItem('score');

    updateScore();
}

function pickComputerMove(){

    const randomNumber = Math.random();

    if(randomNumber < 1/3){
        return 'rock';
    }
    else if(randomNumber < 2/3){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}