let compScore = 0;
let userScore = 0;

let userScoreBoard = document.querySelector('.user-score');
let compScoreBoard = document.querySelector('.comp-score');

let stone = document.querySelector("#stone > img");
let paper = document.querySelector("#paper > img");
let scissor = document.querySelector("#scissor > img");

let result = document.querySelector(".result");

function getUserChoice(choice)
{
    let userChoice = '';

    if(choice === 'stone')
    {
        userChoice = 'St';
    }
    else if(choice === 'paper')
    {
        userChoice = 'P';
    }
    else
    {
        userChoice = 'Sc';
    }

    return userChoice;
}

function getCompChoice()
{
    let randomChoice = Math.floor(Math.random() * 3);
    let compChoice = '';
    if( randomChoice == 0 )
    {
        compChoice = 'St';
        setTimeout(function(){
            computerSelected(stone);
        },1010);
    }
    else if( randomChoice == 1)
    {
        compChoice = 'P';
        setTimeout(function(){
            computerSelected(paper);
        },1010);
    }
    else
    {
        compChoice = 'Sc';
        setTimeout(function(){
            computerSelected(scissor);
        },1010);
    }

    return compChoice;
}

function playGame(choice)
{
    let user = getUserChoice(choice);
    let comp = getCompChoice();

    console.log(user);
    console.log(comp);

    if( user === 'St' && comp === 'Sc' )
    {
        win();
    }
    else if( user === 'Sc' && comp === 'P')
    {
        win();
    }
    else if( user === 'P' && comp === 'St')
    {
        win();
    }
    else if( user === comp )
    {
        draw();
    }
    else
    {
       lose();
    }
}

function win()
{
    userScore++;
    userScoreBoard.innerText = userScore;

    result.innerText = 'You Win !!';

    userScoreBoard.classList.remove('lose');
    compScoreBoard.classList.remove('win');
    userScoreBoard.classList.add('win');
    compScoreBoard.classList.add('lose');
}

function lose()
{
    compScore++;
    compScoreBoard.innerText = compScore;

    result.innerText = 'You Lose !!';
    userScoreBoard.classList.add('lose');
    compScoreBoard.classList.add('win');
    userScoreBoard.classList.remove('win');
    compScoreBoard.classList.remove('lose');
}

function draw()
{
    result.innerText = "It's Draw ..";
}

stone.addEventListener('click', function(){
    playGame('stone');
    userSelected(stone);
    setTimeout(function(){
        setDefault(stone);
    },1000);

});
paper.addEventListener('click',function(){
    playGame('paper');
    userSelected(paper);
    setTimeout(function(){
        setDefault(paper);
    },1000);
});
scissor.addEventListener('click',function(){
    playGame('scissor');
    userSelected(scissor);
    
});

function userSelected(choice)
{
    choice.parentElement.style.backgroundColor = 'green';
    setTimeout(function(){
        setDefault(choice);
    },1000);
}

function computerSelected(choice)
{
    choice.parentElement.style.backgroundColor = 'cyan';
    setTimeout(function(){
        setDefault(choice);
    },1000);
}

function setDefault(choice)
{
    choice.parentElement.style.backgroundColor = 'black';
}