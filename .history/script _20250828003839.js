
  
  let heartCount = document.getElementById("heartCount");
  let count = 0; // শুরুতে কাউন্ট = 0

  // সব card এর heart button ধরছি
  let heartButtons = document.querySelectorAll(".heart-btn");

  // প্রতিটি heart button এ click event যোগ করছি
  heartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      count++; // কাউন্ট বাড়াবে
      heartCount.textContent = count; // Navbar এ দেখাবে
    });
  });

