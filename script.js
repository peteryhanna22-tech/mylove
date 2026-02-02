const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const question = document.getElementById("question");
const gif = document.getElementById("gif");

// When the user clicks "Yes"
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Bhebik ktir! 🎉";
    // Change the GIF to a celebration one
    gif.src = "Marita.jpeg"; 
    
    // Hide the buttons
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

// When the user hovers over "No"
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".container");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure button stays within view
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "fixed"; // Change to fixed to allow free movement
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

});
