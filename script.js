// define refences
let button = document.querySelector("#Click-btn");
let dogDiv = document.querySelector("#dog-div")

button.onclick = function(event){
    event.preventDefault();
    const URL = "https://dog.ceo/api/breeds/image/random"
    
    fetch(URL)
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(dogJSON){
        console.log(dogJSON);

        let dogContainer = document.createElement("div");
        dogDiv.appendChild(dogContainer);

        let dogImg = document.createElement("img");
        dogImg.src =  dogJSON.message;
        dogContainer.appendChild(dogImg);
        dogImg.setAttribute("width", "200px")
    })

}