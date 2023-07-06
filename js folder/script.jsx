    // JavaScript code for the number guessing game
    document.getElementById("guessForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
  
        // Generate a random number between low and high
        let low = 1;
        let high = 10;
        let correct_ans = Math.floor(Math.random() * (high - low + 1)) + low;
  
        // Get the user's guess
        let user_ans = parseInt(document.getElementById("guess").value);
  
        // Number of chances
        let chances = 3;
        let won = false;
  
        // Check if the user's guess is correct
        if (user_ans === correct_ans) {
          document.getElementById("result").textContent = "You Win!";
          document.getElementById("result").classList.add("win");
          won = true;
        } else if (user_ans < correct_ans) {
          document.getElementById("result").textContent = "Correct answer is greater!";
        } else {
          document.getElementById("result").textContent = "Correct answer is smaller!";
        }
  
        // Reduce the chances
        chances--;
  
        // Display the result if the user has not won and has no more chances
        if (!won && chances === 0) {
          document.getElementById("result").textContent = "You lose!";
          document.getElementById("result").classList.add("lose");
          document.getElementById("guess").disabled = true;
          document.querySelector("button[type='submit']").disabled = true;
        }
      });