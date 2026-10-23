document.addEventListener("DOMContentLoaded", function () {
"use strict";

```
// Find all website pages
const pages = document.querySelectorAll(".page");

// Function to switch between full-screen pages
function showPage(pageId) {
    const targetPage = document.getElementById(pageId);

    if (!targetPage) {
        console.error("Cannot find page:", pageId);
        return;
    }

    // Hide all pages
    pages.forEach(function (page) {
        page.classList.remove("active");
    });

    // Show the selected page
    targetPage.classList.add("active");

    // Start at the top of the new page
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// PAGE 1: Open Our Story
const beginButton = document.getElementById("beginButton");

if (beginButton) {
    beginButton.addEventListener("click", function (event) {
        event.preventDefault();
        showPage("memories");
    });
}

// NEXT buttons throughout the website
const nextButtons = document.querySelectorAll("[data-next]");

nextButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();

        const nextPageId = button.getAttribute("data-next");
        showPage(nextPageId);
    });
});

// Restart the experience
const restartButton = document.getElementById("restartButton");

if (restartButton) {
    restartButton.addEventListener("click", function (event) {
        event.preventDefault();
        showPage("welcome");
    });
}

// QUIZ: Playful answer responses
const quizFeedback = document.getElementById("quizFeedback");

const quizResponses = [
    "Haha! Someone's definitely taking the blame for this one! 😂🌿",
    "We might need to investigate that answer! 🌼",
    "Correct! Two dramatic souls, one beautiful story! 😂🍃"
];

const answerButtons = document.querySelectorAll(".answer-button");

answerButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        if (!quizFeedback) {
            return;
        }

        // Highlight the selected answer
        answerButtons.forEach(function (answerButton) {
            answerButton.style.backgroundColor = "";
            answerButton.style.fontWeight = "";
        });

        button.style.backgroundColor = "#DDE8D5";
        button.style.fontWeight = "700";

        // Display the response
        quizFeedback.textContent =
            quizResponses[index] ||
            "Every answer is special when it's about us! 🌿";
    });
});

// Keyboard accessibility: activate buttons with Enter or Space
document.querySelectorAll("button").forEach(function (button) {
    button.addEventListener("keydown", function (event) {
        if (
            (event.key === "Enter" || event.key === " ") &&
            document.activeElement === button
        ) {
            event.preventDefault();
            button.click();
        }
    });
});

// Show the opening page when the website loads
showPage("welcome");

console.log("🌿 A Garden Called Us is ready!");
```

});
