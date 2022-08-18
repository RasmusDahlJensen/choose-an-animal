//Get elements
const myApp = document.getElementById('app');
const body = document.getElementsByName('body')
const galleryContainer = document.createElement("div")

//Selection menu
const dropdownMenu = document.createElement("select")
dropdownMenu.id= "animalSelect"
const selectContainer = document.createElement("div")

//Select append
myApp.appendChild(selectContainer)
myApp.appendChild(dropdownMenu)


//Option loop
for ( i = 0; i < 4; i++ ) {
    option = document.createElement('option');
    dropdownMenu.add( option );
    if (i == 0) {
        option.text = "Select animal";
        option.value = "";
    } else if(i == 1){
        option.text = "Cat";
        option.value = "cat";
    } else if(i == 2) {
        option.text = "Dog";
        option.value = "dog";
    } else{
        option.text = "Bunny";
        option.value = "bunny"; 
    }
}

//style
dropdownMenu.style.width = "110px"


//Function run
dropdownMenu.addEventListener("change", animalSwitch)

function animalSwitch() {
switch (dropdownMenu.value) {
    case "cat":
            console.log("You selected cat");
            buildCard("You've selected cat", "https://pbs.twimg.com/media/FQAeg_1WQAsoqos?format=jpg&name=900x900", "Kinda looks like Adam driver")
        break;

    case "dog":
            console.log("You selected dog");
            buildCard("You've selected dog", "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "this is a dog")
        break;

    case "bunny":
            console.log("You selected bunny");
            buildCard("You've selected bunny", "https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "This is a bunny")
        break;

    default:
        console.log("Error with selecting animal")
        break;
}

}

function buildCard(cardHeadline, cardUrl, cardDescription) {
    //Create elements
galleryContainer.innerHTML = ""
const newH1 = document.createElement('h1');
const firstFigure = document.createElement("figure")
const galleryTitle = document.createElement("h2")
const galleryImg = document.createElement("img")
galleryImg.src = cardUrl
const imgDescription = document.createElement("p")




//Add text
galleryTitle.textContent = cardHeadline
imgDescription.textContent = cardDescription

//Img style
galleryImg.style.maxWidth = "400px"

//Appends
myApp.appendChild(galleryContainer)
galleryContainer.appendChild(newH1)
galleryContainer.appendChild(firstFigure)
firstFigure.appendChild(galleryTitle)
firstFigure.appendChild(galleryImg)
firstFigure.appendChild(imgDescription)   
}