let name = "";
let cat = "lost";
let location = "B2";
let gameStarted = false;

const locdict = {
    "A1": "House on Cliff",
    "A2": "Neighborhood",
    "A3": "Park",
    "B1": "Cliff Base",
    "B2": "Bus Stop",
    "B3": "Forest",
    "C1": "Beach",
    "C2": "Town",
    "C3": "Mountain"
};

// Initial Text Display
function setGameText(text) {
    document.getElementById("gameText").innerText = text;
}

function move() {
    if (gameStarted) {
        setGameText("Where do you want to go? (Use 'up', 'down', 'left', 'right')");
        document.getElementById("inputContainer").style.display = "block";
    }
}

function investigate() {
    if (gameStarted) {
        setGameText("What would you like to investigate? (e.g., 'waterfall', 'people', 'trees')");
        document.getElementById("inputContainer").style.display = "block";
    }
}

function processInput() {
    const userInput = document.getElementById("userInput").value.toLowerCase();
    document.getElementById("inputContainer").style.display = "none";
    
    if (cat === "lost") {
        if (userInput === "up" || userInput === "down" || userInput === "left" || userInput === "right") {
            movePlayer(userInput);
        } else if (userInput === "waterfall" && location === "B3") {
            cat = "found";
            setGameText("You found Mr. Sprinkles at the waterfall! Now return him to Charlotte.");
            document.getElementById("status").innerText = "Cat Status: Found!";
        } else {
            setGameText("Sorry, I didn't understand that. Try again.");
        }
    } else {
        setGameText("The cat is already found! Return to Charlotte!");
    }
}

function movePlayer(direction) {
    const locationAbet = "ABC";
    let newLocation = location;
    
    if (direction === "up" && location.charAt(0) !== "A") {
        newLocation = String.fromCharCode(location.charCodeAt(0) - 1) + location.charAt(1);
    } else if (direction === "down" && location.charAt(0) !== "C") {
        newLocation = String.fromCharCode(location.charCodeAt(0) + 1) + location.charAt(1);
    } else if (direction === "left" && location.charAt(1) !== "1") {
        newLocation = location.charAt(0) + String.fromCharCode(location.charCodeAt(1) - 1);
    } else if (direction === "right" && location.charAt(1) !== "3") {
        newLocation = location.charAt(0) + String.fromCharCode(location.charCodeAt(1) + 1);
    }

    location = newLocation;
    setGameText(`You moved to ${locdict[location]}.`);
}

function startGame() {
    gameStarted = true;
    name = prompt("Enter your name:");
    setGameText(`Welcome, ${name}! The little girl Charlotte needs your help to find her lost cat, Mr. Sprinkles.`);
    document.getElementById("status").innerText = "Cat Status: Lost!";
}

window.onload = startGame;
