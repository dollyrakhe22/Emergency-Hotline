
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


 let coin = 100; 
    let coinCount = document.getElementById("coinCount");

    let callButtons = document.querySelectorAll(".call-btn");

  

callButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    
    
    if (coin < 20) {
      alert("Not enough coins.You need at least 20 coin to make a call!");
      return; 
    }

    
    let card = e.target.closest(".card");
    let serviceName = card.querySelector(".service-name").innerText;
let serviceNumber = card.querySelector(".service-number").innerText;

   alert(`Calling ${serviceName} ${serviceNumber}...`);
   
    coin -= 20; 
    coinCount.textContent = coin;


    


 });
    });


