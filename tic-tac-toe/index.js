let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
        } else {
            box.innerText = "X";
        }
        box.disabled = true;
        turnO = !turnO;
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (boxes[a].innerText && boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText) {
            displayMessage(`Congratulations!!! Player ${boxes[a].innerText} wins!`);
            disableAllBoxes();
            return;
        }
    }
    if ([...boxes].every(box => box.innerText !== "")) {
        displayMessage("Oooopppssss !!! It's a draw!");
    }
};

const disableAllBoxes = () => {
    boxes.forEach(box => box.disabled = true);
};

const displayMessage = (message) => {
    const messageDiv = document.createElement("div");
    messageDiv.id = "message";
    messageDiv.innerText = message;
    messageDiv.style.position = "absolute";
    messageDiv.style.top = "50%";
    messageDiv.style.left = "50%";
    messageDiv.style.transform = "translate(-50%, -50%)";
    messageDiv.style.backgroundColor = "#002324";
    messageDiv.style.color ="white";
    messageDiv.style.padding = "20px";
    messageDiv.style.borderRadius = "15px";
    messageDiv.style.boxShadow = "0 0 10px rgba(0, 0, 0, 1)";
    document.body.appendChild(messageDiv);
};

resetBtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
    const messageDiv = document.getElementById("message");
    if (messageDiv) {
        messageDiv.remove();
    }
});
