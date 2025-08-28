
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
    
    // যদি coin 20 এর কম হয়, alert দিয়ে বন্ধ করে দাও
    if (coin < 20) {
      alert("Not enough coins.You need at least 20 coin to make a call");
      return; 
    }

    // কার্ড থেকে নাম্বার আর নাম বের করা
    let card = e.target.closest(".card");
    

    // Alert দেখাও
    alert(`Calling ${serviceName }...`);

    // coin কমাও
    coin -= 20; 
    coinCount.textContent = coin;




 });
    });


