let userScore = 0;
let computerScore = 0 ;

const choices = document.querySelectorAll(".choice");
const msg =  document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const usercomppara = document.querySelector("#computer-score");

const genComputerChoice = () =>{
    const options = ["rocks","paper","scissors"];
    const ranidx = Math.floor(Math.random() * 3);
    return options[ranidx];
    //rock,paper,scissors
};

const drawgame = ()=>{
    
    msg.innerText = `Game Draw. Play Again!`
    msg.style.backgroundColor = "#080a0c";
};

const ShowWinner = (userwin, userChoice, compChoice) => {
    if(userwin){
        userScore++;
        userscorepara.innerText = userScore;
        
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }else {
        computerScore++;
        usercomppara.innerText = computerScore;
        
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
};

const playgame = (userChoice)=>{
    console.log("user choice = ", userChoice);
    //Generate computer choice ---> Modula =r way of programming
    const compChoice = genComputerChoice();
    console.log("computer Choice = ",compChoice);

    if(userChoice === compChoice){
     drawgame();
    }else{
        let userwin = true;
        if(userChoice === "rock"){
            userwin = compChoice === "paper"? false : true;
        }else if (userChoice === "paper") {
            userwin = compChoice === "scissors" ? false :true;
        }else{
            userwin =  compChoice === "rock" ? false : true ;
        }
        ShowWinner(userwin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
      //  console.log("Choices was yours.!!", userChoice);
        playgame(userChoice);
    });
});