// write your code here
document.addEventListener('DOMContetLoaded', getRamen)

function getRamen() {
    fetch ('http://localhost:3000/ramens')
    .then (response => response.json())
    .then(ramenData => ramenData.forEach(eachRamen => ramenMenu(eachRamen)))
    // .then(ramenData => ramenData.forEach(ramen => renderRamenDetail(ramen)))
    // .then(ramenData => ramenData.forEach(console.log(ramenData)))
    // .then (ramenData => ramenData.forEach(renderRamenDetail))
    // .then (ramenMenuData => ramenMenuData.forEach(ramenMenu))
}

getRamen()

// need to put images under the ramen menu div 


function ramenMenu(ramenData){
    console.log(ramenData)
    const ramenMenu = document.querySelector("#ramen-menu")
    const ramenDiv = document.createElement("div")
    const ramenPic = document.createElement("img");
    
    ramenPic.src = ramenData.image
    ramenDiv.appendChild(ramenPic)
    ramenMenu.appendChild(ramenDiv)
    
    ramenPic.addEventListener("click", renderRamenDetail(ramenData))
}

(ramenData => ramenData.forEach(ramenMenu))



function renderRamenDetail(ramenData){
    const ramenDetails = document.querySelector("#ramen-detail");
    const ramenImg = document.querySelector("#ramen-detail > img")
    ramenImg.src = ramenData.image
    
    const h2 = document.querySelector("#ramen-detail > h2")
    h2.textContent =  ramenData.name

    const h3 = document.querySelector("#ramen-detail > h3")
    h3.textContent = ramenData.restaurant
      
    ramenDetails.appendChild(h2)
    ramenDetails.appendChild(h3)
    ramenDetails.appendChild(ramenImg)
       
}