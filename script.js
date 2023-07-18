var playerScore=0;
var computerScore = 0;
var winner = '';

function getComputerChoice()
    const choices =['Rock', 'Paper', 'Scissors'];

if (playerSlection==getComputerChoice())
{

    return('Its a tie');
}
else if (playerSlection=='Rock' && getComputerChoice=='Paper'||
         playerSlection=='Scissors' && getComputerChoice=='Paper' ||
         playerSlection=='Paper' && getComputerChoice=='Rock')
         
    {
    
        return 'playerScore wins';
    }
else 
{

    return 'getComputerChoice wins';
}