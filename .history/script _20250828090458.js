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

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Call Service</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="p-5">

  <!-- Navbar -->
  <div class="flex justify-between items-center p-3 bg-green-100 rounded">
    <h1 class="text-xl font-bold">Emergency Service</h1>
    <div>
      Coins: <span id="coinCount">100</span>
    </div>
  </div>

  <!-- Cards -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
    <div class="card p-4 bg-white shadow rounded">
      <h2 class="font-bold">Hospital 1</h2>
      <p>Number: 999</p>
      <button class="call-btn mt-2 bg-green-500 text-white px-3 py-1 rounded">Call</button>
    </div>
    <div class="card p-4 bg-white shadow rounded">
      <h2 class="font-bold">Hospital 2</h2>
      <p>Number: 888</p>
      <button class="call-btn mt-2 bg-green-500 text-white px-3 py-1 rounded">Call</button>
    </div>
    <div class="card p-4 bg-white shadow rounded">
      <h2 class="font-bold">Hospital 3</h2>
      <p>Number: 777</p>
      <button class="call-btn mt-2 bg-green-500 text-white px-3 py-1 rounded">Call</button>
    </div>
  </div>

  <!-- JavaScript -->
  <script>
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
  </script>

</body>
</html>
