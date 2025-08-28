
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


   // call history
   


    // from navbar
    const callCountElement = document.getElementById('callCount');
    const coinCountElement = document.getElementById('coinCount');
    
    const history = document.getElementById('call-history');
    const clearBtn = document.getElementById('btn-clear');

    const calls = document.querySelectorAll('.btn-call');
    for (const call of calls) {
        call.addEventListener('click', function(event) {
            const serviceName = event.target.parentNode.parentNode.querySelector('.service-name').innerText;
            // console.log(serviceName);
            const hotline = event.target.parentNode.parentNode.querySelector('.hotline').innerText;
            // console.log(hotline);

            if(coin<20){
                alert('to make a call you need at least 20 coins');
                return;
            }
            else{
                alert(Calling ${serviceName} at ${hotline});
                
                coin -= 20;
                coinCountElement.innerText = coin;
                
                const time = new Date().toLocaleTimeString();
                const div = document.createElement('div');
                div.classList.add('flex', 'gap-4', 'justify-between', 'items-center', 'bg-[#fafafa]', 'rounded-lg', 'p-4', 'mb-2');
                div.innerHTML = `<div>
                                <h4 class="inter-semibold text-lg text-[#111111]">${serviceName}</h4>
                                <p class="hind-madurai-regular text-lg text-[#5c5c5c]">${hotline}</p>
                            </div>
                            <p class="hind-madurai-regular text-lg text-[#111111]" id="time">${time}</p>`;
                history.appendChild(div);
                
                return;
            }
        });
    }
    
    clearBtn.addEventListener('click', function(){
        history.innerHTML ="";
    })






   

 });
    });


