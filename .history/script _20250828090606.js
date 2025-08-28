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

