let mailBox = document.querySelector('.mail');
let boxmail = document.querySelector('.boxMail');
let close = document.querySelector('.fa-xmark');
let birthdayMusic = document.getElementById('birthdayMusic');

let datetxt = "7 Jan";
let datatxtletter = `Happy Birthday, Siddhi! 🌟💖

Today is your day, a day to celebrate YOU—the bright, wonderful soul who lights up every room! May your year ahead overflow with laughter, adventure, and all the dreams your heart has been wishing for. 💫

Remember to dance like nobody’s watching, smile like the world is yours, and hug every little moment that makes life magical. You are loved more than words can say, cherished beyond measure, and truly unforgettable. 🌸💝

So, here’s to cake, confetti, balloons, and endless happiness. Keep shining, keep smiling, and never stop being your amazing, unique self! 🎉🎂💛`;
let titleLetter = "To you";

let charArrDate = datetxt.split('');
let charArrDateLetter = datatxtletter.split('');
let charArrTitle = titleLetter.split('');

let currentIndex = 0;
let currentIndexLetter = 0;
let currentIndexTitle = 0;

let date__of__birth = document.querySelector(".date__of__birth span");
let text__letter = document.querySelector(".text__letter p");

setTimeout(function () {
    let timeDatetxt = setInterval(function () {
        if (currentIndex < charArrDate.length) {
            date__of__birth.textContent += charArrDate[currentIndex];
            currentIndex++;
        } else {
            let i = document.createElement("i");
            i.className = "fa-solid fa-star";
            document.querySelector(".date__of__birth").prepend(i);
            document.querySelector(".date__of__birth").appendChild(i.cloneNode(true));
            clearInterval(timeDatetxt);
        }
    }, 100)
}, 12000);

let intervalContent;
let intervalTitle;

function isBirthday() {
    let today = new Date();
    let birthday = new Date(today.getFullYear(), 0, 7);
    return today.getDate() === birthday.getDate() && today.getMonth() === birthday.getMonth();
}

function teleportButtonNearOriginal(button) {
    let wrapper = document.getElementById("wrapper");
    let origX = wrapper.clientWidth / 2 - button.offsetWidth / 2;
    let origY = wrapper.clientHeight / 2 - button.offsetHeight / 2;

    let offsetX = (Math.random() - 0.5) * 200;
    let offsetY = (Math.random() - 0.5) * 200;

    let newX = Math.min(Math.max(origX + offsetX, 0), wrapper.clientWidth - button.offsetWidth);
    let newY = Math.min(Math.max(origY + offsetY, 0), wrapper.clientHeight - button.offsetHeight);

    button.style.position = "absolute";
    button.style.left = newX + "px";
    button.style.top = newY + "px";

    createParticles(newX + button.offsetWidth / 2, newY + button.offsetHeight / 2);
}

function createParticles(x, y) {
    const colors = ["#FF6EC7", "#FFD37E", "#B19CD9"];
    for (let i = 0; i < 20; i++) {
        let particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = x + "px";
        particle.style.top = y + "px";
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(particle);
        let angle = Math.random() * 2 * Math.PI;
        let distance = Math.random() * 80 + 20;
        let dx = Math.cos(angle) * distance;
        let dy = Math.sin(angle) * distance;
        particle.animate([
            { transform: "translate(0,0) scale(1)", opacity: 1 },
            { transform: `translate(${dx}px, ${dy}px) scale(0.3)`, opacity: 0 }
        ], { duration: 800, easing: "ease-out" });
        setTimeout(() => particle.remove(), 800);
    }
}

let btnLetter = document.getElementById("btn__letter");

btnLetter.addEventListener("mouseenter", function () {
    if (!isBirthday()) teleportButtonNearOriginal(this);
});

$(".boxMail").addClass("active");
birthdayMusic.play().catch(e => console.log("Autoplay blocked"));

setTimeout(function () {
    intervalTitle = setInterval(function () {
        if (currentIndexTitle < charArrTitle.length) {
            document.querySelector(".title__letter").textContent += charArrTitle[currentIndexTitle];
            currentIndexTitle++;
        } else clearInterval(intervalTitle);
    }, 100)
}, 500);

setTimeout(function () {
    let mewmew = document.getElementById("mewmew");
    mewmew.style.opacity = 1;
}, 1500);

setTimeout(function () {
    intervalContent = setInterval(function () {
        if (currentIndexLetter < charArrDateLetter.length) {
            text__letter.textContent += charArrDateLetter[currentIndexLetter];
            currentIndexLetter++;
        } else clearInterval(intervalContent);
    }, 50)
}, 2000);
});

close.addEventListener('click', function () {
    boxmail.classList.remove('active');
    birthdayMusic.pause();
    birthdayMusic.currentTime = 0;

    document.querySelector(".title__letter").textContent = "";
    text__letter.textContent = "";
    currentIndexLetter = 0;
    currentIndexTitle = 0;
    document.getElementById("mewmew").style.opacity = 0;
});

let countdownDiv = document.createElement("div");
countdownDiv.className = "countdown";
document.getElementById("wrapper").appendChild(countdownDiv);

function updateCountdown() {
    let today = new Date();
    let nextBirthday = new Date(today.getFullYear(), 0, 7);
    if (today > nextBirthday) nextBirthday.setFullYear(today.getFullYear() + 1);
    let diff = nextBirthday - today;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((diff / (1000 * 60)) % 60);
    let seconds = Math.floor((diff / 1000) % 60);
    countdownDiv.textContent = `Time until birthday: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
