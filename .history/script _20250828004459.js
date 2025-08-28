let heartCount = document.getElementById("heartCount");
    let count = 0;

    // Select all heart buttons inside cards
    let heartButtons = document.querySelectorAll(".heart-btn");

    // Add event listener to each button
    heartButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        count++;
        heartCount.textContent = count;
      });
    });