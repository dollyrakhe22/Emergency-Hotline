let coin = 100;
let callCount = 0;
let heartCount = 0;

const coinCountElement = document.getElementById("coinCount");
const callCountElement = document.getElementById("callCount");
const heartCountElement = document.getElementById("heartCount");
const history = document.getElementById('call-history');
const clearBtn = document.getElementById('btn-clear');

const callButtons = document.querySelectorAll(".btn-call");
callButtons.forEach(button => {
    button.addEventListener('click', function(event){
        const card = event.target.closest('.card-body');
        const serviceName = card.querySelector('.service-name').innerText;
        const hotline = card.querySelector('.hotline').innerText;

        if(coin < 20){
            alert('You need at least 20 coins to make a call');
            return;
        }

        alert(`Calling ${serviceName} at ${hotline}`);
        coin -= 20;
        callCount++;
        coinCountElement.innerText = coin;
        callCountElement.innerText = callCount;

        const time = new Date().toLocaleTimeString();
        const div = document.createElement('div');
        div.classList.add('flex','justify-between','items-center','bg-[#fafafa]','rounded-lg','p-4','mb-2');
        div.innerHTML = `
            <div>
                <h4 class="font-semibold">${serviceName}</h4>
                <p class="text-gray-500">${hotline}</p>
            </div>
            <p>${time}</p>
        `;
        history.appendChild(div);
    });
});

clearBtn.addEventListener('click', function(){
    history.innerHTML = "";
});

const hearts = document.querySelectorAll(".heart-btn");
hearts.forEach(heart => {
    heart.addEventListener('click', function(){
        heartCount++;
        heartCountElement.innerText = heartCount;
    });
});
