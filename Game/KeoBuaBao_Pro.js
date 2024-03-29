const score = JSON.parse(localStorage.getItem('sc')) || {
    wins: 0,
    losses: 0,
    ties: 0
}

function randomNumber()
{
    let rd = Math.random();
    if(rd >= 0 && rd < 1/3)
    {
        return 'rock';
    }else if(rd >= 1/3 && rd < 2/3)
    {
        return 'paper';
    }
    return 'scissors';
}

function playGame(movePlayer)
{
    let moveComputer = randomNumber();
    let result = '';
    if(movePlayer === 'rock')
    {
        if(moveComputer === 'rock')
        {
           result = 'Tie.';
        }else if(moveComputer === 'paper')
        {
            result = 'Loss.'
        }else{
            result = 'Win.';
        }
    }
    else if(movePlayer === 'paper')
    {
        if(moveComputer === 'rock')
        {
           result = 'Win.';
        }else if(moveComputer === 'paper')
        {
            result = 'Tie.'
        }else{
            result = 'Loss.';
        }
    }
    else if(movePlayer === 'scissors')
    {
        if(moveComputer === 'rock')
        {
           result = 'Loss.';
        }else if(moveComputer === 'paper')
        {
            result = 'Win.'
        }else{
            result = 'Tie.';
        }
    }

    if(result === 'Win.')
    {
        score.wins +=1;
        document.querySelector('.kq').innerHTML = 'You win.';
    }else if(result === 'Loss.')
    {
        score.losses +=1;
        document.querySelector('.kq').innerHTML = 'You lose.';

    }
    else{
        score.ties +=1;
        document.querySelector('.kq').innerHTML = 'Tie.';

    }
    localStorage.setItem('sc',JSON.stringify(score));
    document.querySelector('.player-computer').innerHTML = `You
    <img class="rps" src="${movePlayer}-emoji.png" alt="">
    <img class="rps" src="${moveComputer}-emoji.png" alt="">
    Computer`;
    output();
}
function output()
{
    document.querySelector('.results').innerHTML = `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
}
function resetScore()
{
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.setItem('sc',JSON.stringify(score));
    output();
}
function reLoad()
{
    output();
}