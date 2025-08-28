
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
const coinCount = document.getElementById("coinCount");
const history = document.getElementById('call-history');
const clearBtn = document.getElementById('btn-clear');

const callButtons = document.querySelectorAll(".call-btn");

callButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (coin < 20) {
            alert("Not enough coins. You need at least 20 coins to make a call!");
            return; 
        }

        const card = e.target.closest(".card-body");
        const serviceName = card.querySelector(".service-name").innerText;
        const serviceNumber = card.querySelector(".hotline").innerText;

        alert(`Calling ${serviceName} ${serviceNumber}...`);

        coin -= 20;
        coinCount.textContent = coin;

        // Add to Call History
        const time = new Date().toLocaleTimeString();
        const div = document.createElement('div');
        div.classList.add('flex', 'gap-4', 'justify-between', 'items-center', 'bg-[#fafafa]', 'rounded-sm', 'p-2','text-xs', 'm-2');
        div.innerHTML = `
            <div>
                <h4 class="font-semibold text-lg">${serviceName}</h4>
                <p class="text-gray-600">${serviceNumber}</p>
            </div>
            <p class="text-gray-800">${time}</p>
        `
        ;

        history.appendChild(div);
    });
});

// Clear History
clearBtn.addEventListener('click', () => {
    history.innerHTML = "";
});


// copy button count
    let copyCount = 0;

    // from navbar
    const copyCountElement = document.getElementById('copyCount');
    
    const copies = document.querySelectorAll('.btn-copy');
    for (const copy of copies) {}
        copy.addEventListener('click', function(event) {
            // console.log(copy);
            const hotlineElement = event.target.parentNode.parentNode.querySelector('.hotline').innerText;
                
                navigator.clipboard.writeText(hotlineElement);
                // console.log(hotlineElement);

            alert(${hotlineElement} copied);
            copyCount++;
            copyCountElement.innerText = copyCount;
        });
    
