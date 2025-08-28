let coin = 100; // শুরুতে coin
    let coinCount = document.getElementById("coinCount");
    let historyList = document.getElementById("historyList");
    let clearHistoryBtn = document.getElementById("clearHistory");

    // সব Call বাটন select করা
    let callButtons = document.querySelectorAll(".call-btn");

    callButtons.forEach(button => {
      button.addEventListener("click", (e) => {
        let card = e.target.closest(".card");
        let serviceName = card.querySelector(".service-name").innerText;
        let serviceNumber = card.querySelector(".service-number").innerText;

        // যদি coin < 20 হয় → alert দিয়ে return
        if (coin < 20) {
          alert("Not enough coins to make a call!");
          return;
        }

        // Alert দেখানো
        alert(`Calling ${serviceName} (${serviceNumber})...`);

        // Coin থেকে 20 কমানো
        coin -= 20;
        coinCount.textContent = coin;

        // Call history তে add করা
        let li = document.createElement("li");
        li.textContent = `${serviceName} - ${serviceNumber}`;
        historyList.appendChild(li);
      });
    });

    // Clear History Button
    clearHistoryBtn.addEventListener("click", () => {
      historyList.innerHTML = ""; // সব history মুছে ফেলা
    });