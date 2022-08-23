console.log('start js')

const playerNames = document.querySelectorAll(".player-name");
const playerInput = document.getElementById("player");
const managerInput = document.getElementById('manager');
const coachInput = document.getElementById('coach');
const calculateBtn = document.getElementById('calculate');
const calculateTotalBtn = document.getElementById('calculate-total');
const playerExpense = document.getElementById('player-expense');
const totalExpense = document.getElementById('total-expense');
const playerContainer = document.getElementById('players');
const selectedPlayerList = document.getElementById('selected-players');


let selectedPlayerCount = 0;

calculateBtn.addEventListener('click', (event) => {
    if (selectedPlayerCount === 0) {
        alert("Select at least one player...")
    } else if (playerInput.value == "") {
        alert("Enter Player Expense...");
    } else if (playerInput.value < 0) {
        alert("Enter positive amount...");
    } else {
        perPlayerExpense = +playerInput.value;

        let expense = selectedPlayerCount > 5
            ? 5 * perPlayerExpense
            : selectedPlayerCount * perPlayerExpense;
        playerExpense.innerText = `$${expense}`;

    }
})

calculateTotalBtn.addEventListener('click', (event) => {
    if (selectedPlayerCount === 0) {
        alert("Select at least one player...");
    } else if (playerInput.value == "") {
        alert("Enter player expense...");
    } else if (managerInput.value == "" || coachInput.value == "") {
        alert("Enter manager's & coach's salary...");
    } else if (managerInput.value < 0 || coachInput.value < 0) {
        alert("Enter positive amount...");
    }
    else {
        let perPlayerExpense = +playerInput.value;
        let playerExpense =
            selectedPlayerCount > 5
                ? 5 * perPlayerExpense
                : selectedPlayerCount * perPlayerExpense;
        let coachExpense = +coachInput.value;
        let managerExpense = +managerInput.value;
        let totalExpenses = playerExpense + managerExpense + coachExpense;
        totalExpense.innerText = `$${totalExpenses}`;
    }
});

function getSelectedPlayerName(event) {
    return event.target.parentElement.firstElementChild.innerText;
}

function getSelectedPlayer(event) {
    const playerName = getSelectedPlayerName(event);
    let player = document.createElement("li");
    player.classList.add("text-orange-300", "font-semibold");
    player.innerText = playerName;
    return player;
}

playerContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        selectedPlayerCount++;
        if (selectedPlayerCount > 5) {
            alert(`You Can't Add More Than 5 Players...`);
        } else {
            const selectedPlayer = getSelectedPlayer(event);
            selectedPlayerList.appendChild(selectedPlayer);
            event.target.style.backgroundColor = "#ecf0f1";
            event.target.style.color = "black";
            event.target.disabled = true;
        }
    }
    event.stopPropagation();
});

