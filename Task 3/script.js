// Quiz Questions
const quizQuestions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "High Text Machine Language", "Home Tool Markup Language"],
        answer: 0
    },
    {
        question: "Which CSS property controls the text size?",
        choices: ["font-style", "text-size", "font-size"],
        answer: 2
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<script>", "<javascript>", "<js>"],
        answer: 0
    },
    {
        question: "What does CSS stand for?",
        choices: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System"],
        answer: 0
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image?",
        choices: ["src", "alt", "title"],
        answer: 1
    },
    {
        question: "Which is the correct JavaScript syntax to change the content of an HTML element?",
        choices: ["document.getElement('id').innerHTML", "document.getElementById('id').innerHTML", "document.getId('id').innerHTML"],
        answer: 1
    },
    {
        question: "How do you add a comment in JavaScript?",
        choices: ["<!-- This is a comment -->", "// This is a comment", "' This is a comment"],
        answer: 1
    },
    {
        question: "Which property is used to change the background color in CSS?",
        choices: ["background-color", "bg-color", "color"],
        answer: 0
    },
    {
        question: "Which HTML element is used to specify a footer for a document?",
        choices: ["<footer>", "<bottom>", "<section>"],
        answer: 0
    },
    {
        question: "What is the correct syntax for referring to an external JavaScript file?",
        choices: ["<script href='filename.js'>", "<script name='filename.js'>", "<script src='filename.js'>"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    const questionElem = document.getElementById("question");
    const choicesElem = document.getElementById("choices");
    const nextButton = document.getElementById("nextButton");

    // Update question and choices
    questionElem.textContent = quizQuestions[currentQuestion].question;
    choicesElem.innerHTML = "";
    nextButton.disabled = true;

    quizQuestions[currentQuestion].choices.forEach((choice, index) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = choice;

        button.addEventListener("click", () => {
            if (index === quizQuestions[currentQuestion].answer) {
                score++;
                alert("Correct!");
            } else {
                alert("Wrong!");
            }
            nextButton.disabled = false;
        });

        li.appendChild(button);
        choicesElem.appendChild(li);
    });
}

document.getElementById("nextButton").addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        loadQuiz();
    } else {
        showScore();
    }
});

function showScore() {
    const quizElem = document.getElementById("quiz");
    quizElem.innerHTML = `
        <h3>Quiz Completed!</h3>
        <p>Your Score: ${score} / ${quizQuestions.length}</p>
        <button onclick="restartQuiz()">Restart Quiz</button>
    `;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuiz();
}

loadQuiz();
document.getElementById("fetchData").addEventListener("click", () => {
    const apiResult = document.getElementById("apiResult");
    apiResult.textContent = "Loading joke..."; // Show a loading message

    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Display the joke
            apiResult.textContent = `${data.setup} - ${data.punchline}`;
        })
        .catch(error => {
            // Handle errors
            apiResult.textContent = "Failed to fetch joke. Please try again.";
            console.error("Error fetching the joke:", error);
        });
});
