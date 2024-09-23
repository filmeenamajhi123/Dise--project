document.getElementById("startBtn").addEventListener("click", diceGame);

function diceGame(){
    let randomDice = Math.floor((Math.random() * 6) + 1);
    let diceLocation = "dice" + randomDice + ".webp";
    let img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", diceLocation);

    let randomDice2 = Math.floor((Math.random() * 6) + 1);
    let diceLocation2 = "dice" + randomDice2 + ".webp";
    let img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", diceLocation2);

    if (randomDice > randomDice2) {
        document.querySelector("h1").innerHTML = "🏆 Filmeena 🤵‍♀️ Wins!🎈";
    } else if (randomDice < randomDice2) {
        document.querySelector("h1").innerHTML = "🏆 Gangotri 👩‍💼 Wins!🎈";
    } else {
        document.querySelector("h1").innerHTML = "🏆 Match Draw 🏆";
    }
}