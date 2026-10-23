const pages = Array.from(document.querySelectorAll(".page"));

function showPage(pageId) {
const target = document.getElementById(pageId);

```
if (!target || !target.classList.contains("page")) {
    return;
}

pages.forEach(page => {
    page.classList.remove("active");
});

target.classList.add("active");
window.scrollTo(0, 0);
```

}

document.getElementById("beginButton").addEventListener("click", () => {
showPage("memories");
});

document.querySelectorAll("[data-next]").forEach(button => {
button.addEventListener("click", () => {
showPage(button.dataset.next);
});
});

document.getElementById("restartButton").addEventListener("click", () => {
showPage("welcome");
});

const quizResponses = [
"Haha! Someone's definitely taking the blame for this one. 😂",
"We might need to investigate that answer! 🌿",
"Correct! Two dramatic souls, one beautiful story. 😂🌼"
];

document.querySelectorAll(".answer-button").forEach((button, index) => {
button.addEventListener("click", () => {
const feedback = document.getElementById("quizFeedback");
feedback.textContent = quizResponses[index];
});
});
