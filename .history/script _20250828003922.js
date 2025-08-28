
  
  let heartCount = document.getElementById("heartCount");
  let count = 0; 


  let heartButtons = document.querySelectorAll(".heart-btn");

 
  heartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      count++; // কাউন্ট বাড়াবে
      heartCount.textContent = count; // Navbar এ দেখাবে
    });
  });

