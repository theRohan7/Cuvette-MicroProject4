

let userScore = 0;
let computerScore = 0;


const pickkUserHand = (hand)=>{

    //hide current hands page
    let options = document.querySelector(".hands");
    options.style.display = "none"; 

    //show the contest page
    let contest = document.querySelector(".contest");
    contest.style.display= "flex";

    //set the user Pick
    document.getElementById("userPickImg").src = `/assets/${hand}.png`

    let cpHand =  pickComputerHand();
    gameOn(hand, cpHand)
    // setScore(hand, cpHand, scores )


}

const pickComputerHand = () =>{

    let hands = ["Rock" , "Paper", "Scissors"]

    let cpHand = hands[Math.floor(Math.random() * 3)]


    //set comp pick 
    document.getElementById("compPickImg").src = `/assets/${cpHand}.png`;

    return cpHand ;
}

const gameOn = (userHand, cpHand) =>{

    if (userHand == 'Paper' && cpHand == 'Scissors') {
        setDecision("YOU LOOSE!")
    
    } else if( userHand == 'Paper' && cpHand == "Rock"){
        setDecision("YOU WIN!")
       
        
    } else if(userHand == "Paper" && cpHand== "Paper"){
        setDecision("ITS A TIE!")
        
    }else if( userHand == 'Rock' && cpHand == "Rock"){
        setDecision("ITS A TIE!")
        
    } else if(userHand == "Rock" && cpHand== "Paper"){
        setDecision("YOU LOOSE!")
        
    }else if( userHand == 'Rock' && cpHand == "Scissors"){
        setDecision("YOU WIN!")
      
    } else if(userHand == "Scissors" && cpHand== "Paper"){
        setDecision("YOU WIN!")
      
    }else if( userHand == 'Scissors' && cpHand == "Rock"){
        setDecision("YOU LOOSE!")
        
    } else if(userHand == "Scissors" && cpHand== "Scissors"){
        setDecision("ITS A TIE") 
    }

}



const setDecision = (decision) =>{
 
    console.log(decision);
   
    document.querySelector(".resultHeading").innerText = decision;
    if(decision == "YOU WIN!"){
        document.querySelector(".userScore h1").innerText = ++userScore;
    }
    if (decision == "YOU LOOSE!") {
        document.querySelector(".compScore h1").innerText = ++computerScore;
    }
        
    
    return decision
}




const restartGame = () =>{
    //hide current hands page
    let options = document.querySelector(".hands");
    options.style.display = "flex"; 

    //show the contest page
    let contest = document.querySelector(".contest");
    contest.style.display= "none";

}

function toggleRules() {
    const rulesContainer = document.querySelector(".rulecard");
    if (rulesContainer.style.display === 'none' || rulesContainer.style.display === '') {
        rulesContainer.style.display = 'block';
    } else {
        rulesContainer.style.display = 'none';
    }
}

