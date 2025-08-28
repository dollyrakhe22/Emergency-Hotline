
  
  let heartCount = document.getElementById("heartCount");
  let count = 0; 


  let heartButtons = document.querySelectorAll(".heart-btn");

 
  heartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      count++; 
      heartCount.textContent = count; // Navbar এ দেখাবে
    });
  });

