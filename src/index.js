// write your code here
document.addEventListener('DOMContetLoaded', getRamen)

function getRamen() {
    fetch ('http://localhost:3000/ramens')
    .then (response => response.json())
    .then (ramenData => ramenData.forEach(renderRamen));
   }

getRamen()

// need to put images under the ramen menu div 
function renderRamen (ramenData) {
    const ramenMenu = document.querySelector("#ramen-menu")   //where to append to 
    const detailImage = document.querySelector("#ramen-detail > img")
    const ramenPic = document.createElement("img");
    const h2 = document.querySelector("#ramen-detail > h2")
    const h3 = document.querySelector("#ramen-detail > h3")
    const rating = document.querySelector("#rating-display")
    const comment = document.querySelector("#comment-display")
    ramenPic.src = ramenData.image
// What changes when you click?
    ramenPic.addEventListener("click",(e) => {
        detailImage.src = ramenPic.src;
        h2.textContent = ramenData.name
        h3.textContent = ramenData.restaurant
        rating.textContent = ramenData.rating
        comment.textContent = ramenData.comment
    })
    ramenMenu.appendChild(ramenPic)
    // console.log(ramenData)
}

form = document.querySelector("#new-ramen")
form.addEventListener("submit", (e) => {
        e.preventDefault();
        const newRamen = {
          name: e.target.name.value,
          restaurant: e.target.restaurant.value,
          image: e.target.image.value,
          rating: e.target.rating.value,
          comment: e.target['new-comment'].value
        }
        renderRamen(newRamen);
    })





// handleSubmit(submit){
//     e.preventDefault();
//     const newRamen = {
//       name: e.target.name.value,
//       restaurant: e.target.restaurant.value,
//       image: e.target.restaurant.value,
//       rating: e.target.rating.value,
//       comment: e.target.comment.value,
//     }
// }