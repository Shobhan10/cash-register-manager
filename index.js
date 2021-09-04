const billAmount = document.getElementById('bill-amount');
const cashGiven = document.getElementById('cash-given');
const checkButton = document.querySelector('.btn-check');
const message = document.getElementById('message');
const noOfNotes = document.querySelectorAll('.noOfNotes');
const returnChangeTable = document.querySelector('#return-change-table');

const notesAvailable = [2000, 500, 100, 50, 20, 10, 5, 1];

returnChangeTable.style.display = 'none';

checkButton.addEventListener("click", () => {
    
    hideMessage();

    if (billAmount.value > 0) {
        if (Number(cashGiven.value) >= Number(billAmount.value)) {
            const returnChange = cashGiven.value - billAmount.value;
            
            returnChangeTable.style.display = 'inline-table';
            
            checkAvailability(returnChange);
            
        } else {
            showMessage("The amount of Cash Given should be atleast equal to the Bill Amount.");
            returnChangeTable.style.display = 'none';
        }
    } else {
        showMessage("Invalid Bill Amount.");
        returnChangeTable.style.display = 'none';
    }
});

function checkAvailability(returnChange) {
    for (let i = 0; i < notesAvailable.length; i++) {
        const numberOfNotes = Math.trunc(returnChange / notesAvailable[i]);
            returnChange %= notesAvailable[i];
        if (numberOfNotes != 0) {
            noOfNotes[i].innerText = numberOfNotes;
        }
    }
}

function hideMessage() {
    message.style.display = 'none';
}

function showMessage(msg) {
    message.style.display = 'block';
    message.innerText = msg;
}