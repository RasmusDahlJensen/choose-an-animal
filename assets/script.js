//Get elements
const myApp = document.getElementById('app');
const body = document.getElementsByName('body')
const galleryContainer = document.createElement("div")
const buttonContainer = document.createElement("div")


//Selection menu
const dropdownMenu = document.createElement("select")
const selectContainer = document.createElement("div")

//Select append
myApp.appendChild(buttonContainer)
buttonContainer.appendChild(dropdownMenu)
myApp.appendChild(galleryContainer)


//Classes
galleryContainer.classList ="galleryFlex"
dropdownMenu.classList = "selectionStyle"
buttonContainer.classList = "buttonFlex"


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


//Function run
dropdownMenu.addEventListener("change", animalSwitch)

function animalSwitch() {
switch (dropdownMenu.value) {
    case "cat":
            buildCard("You've chosen a cat", "https://pbs.twimg.com/media/FQAeg_1WQAsoqos?format=jpg&name=900x900", "Kinda looks like Adam driver")
        break;

    case "dog":
            buildCard("You've chosen a dog", "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "A dog's nose print is unique, much like a person's fingerprint.")
        break;

    case "bunny":
            buildCard("You've chosen a bunny", "https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Baby rabbits are called 'kittens'")
        break;

    default:
        console.log("Error with selecting an animal")
        buildCard()
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