
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
      button.addEventListener("click", () => {
        alert("Calling Emergency Service...");
        coin -= 20; 
        if (coin < 0) coin = 0; 
        coinCount.textContent = coin;





        
 });
    });


