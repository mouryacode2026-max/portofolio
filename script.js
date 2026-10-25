// =========================
// PAGE LOADED MESSAGE
// =========================

console.log("Portfolio loaded successfully!");


// =========================
// PROJECT BUTTON
// =========================

const projectButton = document.querySelector("#home a");
projectButton.addEventListener("click", function () {
    console.log("User clicked View My Projects");
});


// =========================
// CONTACT BUTTON
// =========================

const contactButton = document.querySelectorAll("#home a")[1];

contactButton.addEventListener("click", function () {
    console.log("User clicked Contact Me");
});


// =========================
// CURRENT YEAR
// =========================

const footer = document.querySelector("footer p");

const currentYear = new Date().getFullYear();



footer.textContent = `© ${currentYear} Mourya. All rights reserved.`;