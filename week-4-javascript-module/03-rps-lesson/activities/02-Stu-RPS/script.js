//RPS

// Player vs Computer

    // how do I play rps


    // Way to keep track of wins losses and ties
        // make variable for wins losses amd ties
        
    // For keeping track of the user's choice 0 = p 1 = r 2 = 5
        // I coud use a prompt() and store this in a variable
            //https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

    // How would I get the computer choice
        // How can I get the computer choice in a string
        // The computer has to pick from "rock", "paper" or "scissors"

        // let choice = [ 'p', 'r', 's']
        // choices [0]
        // choices [1]
        // choices [2]
        // Math.random()

        //http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

        // http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

        // let randomuser = Math.floor(Math.random() * 3))
    
        // how do i get this number to be an actual choice from the choices array?
            // store the string into a variable
                // let computerChoice = string that I want
        
        // CONDITIONALS
            // 9 possible combinations
                // 3 ties
                // 3 losses
                // 3 wins
            // if (p)
        
            let playerScore = 0;
            let computerScore = 0;
            let draws = 0;
            const RPS = [ 'r', 'p', 's']

            for (let round = 1; round < 11; round++) {

              do {
                  playerChoice = window.prompt("Choose Rock, Paper or Scissors:");
              }
            }
