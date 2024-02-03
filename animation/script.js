const words = "Ekene is super cool";

const ANIMATION_DURATION= 4000;

//seprate character into its own div
const characters = words.split("").forEach((char,i) => {
    function createElement(offset) {
        const div =document.createElement("div")
        div.innerText = char;
        div.classList.add("character");
        div.style.animationDelay =`${i * (ANIMATION_DURATION /16) -offset}`
        return div;
    }
    document.getElementById("Zimba").append(createElement(0));
});