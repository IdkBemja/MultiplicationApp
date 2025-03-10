let correctAnswer;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 * num2;

    document.getElementById("question").textContent = `¿Cuánto es ${num1} × ${num2}?`;
    document.getElementById("result").textContent = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const answerInput = document.getElementById("answer");
    const userAnswer = answerInput.value.trim(); // Recorta espacios en blanco
    const result = document.getElementById("result");
    const log = document.getElementById("log-list");
    const questionText = document.getElementById("question").textContent;

    // Validar si el campo está vacío
    if (userAnswer === "") {
        result.textContent = "El campo de respuesta no puede estar vacío.";
        result.style.color = "red";
        return; // Detener ejecución si el input está vacío
    }

    // Convertir la respuesta a número entero
    const parsedAnswer = parseInt(userAnswer);

    // Verificar si la respuesta es correcta
    if (parsedAnswer === correctAnswer) {
        result.textContent = "¡Correcto!, Generando una nueva pregunta...";
        result.style.color = "green";

        log.innerHTML += `<li class="correct">${questionText} = ${parsedAnswer}</li>`;

        setTimeout(generateQuestion, 1000);
    } else {
        result.textContent = `Incorrecto. La respuesta correcta es ${correctAnswer}.`;
        result.style.color = "red";

        log.innerHTML += `<li class="incorrect">${questionText} = ${parsedAnswer}</li>`;

        setTimeout(generateQuestion, 1000);
    }
}

function restartGame() {
    const result = document.getElementById("result");
    const log = document.getElementById("log-list");

    result.textContent = "";
    log.innerHTML = "";
    generateQuestion();
}

window.onload = generateQuestion;
