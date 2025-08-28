let heartCount =0;
const heartCountElement = document.getElementById("heartCount")
const hearts = document.querySelectorAll(".heart-btn")
for(const heart of hearts){
    heart.addEventListener('click',function(){
       console.log(heart)
       heartCount++;
       heartCountElement.innerText = heartCount;
    })
}


 let coin = 100; // শুরুতে coin
    let coinCount = document.getElementById("coinCount");

    // সব Call বাটন select করা
    let callButtons = document.querySelectorAll(".call-btn");

    // প্রতিটি বাটনের জন্য কাজ
    callButtons.forEach(button => {
      button.addEventListener("click", () => {
        alert("Calling Emergency Service...");
        coin -= 20; // coin থেকে 20 কমানো
        if (coin < 0) coin = 0; // negative না হয়
        coinCount.textContent = coin;
      });
    });