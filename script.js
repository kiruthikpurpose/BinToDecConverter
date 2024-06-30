document.addEventListener('DOMContentLoaded', function() {
    const createBtn = document.getElementById('create-btn');
    const bitInput = document.getElementById('bit-input');
    const binaryBoxes = document.getElementById('binary-boxes');
    const decimalDisplay = document.getElementById('decimal-display');

    let currentBinary = [];
    let currentDecimal = 0;

    // Function to create binary boxes
    function createBinaryBoxes(numBits) {
        binaryBoxes.innerHTML = ''; 

        for (let i = 0; i < numBits; i++) {
            let box = document.createElement('div');
            box.classList.add('binary-box');
            box.textContent = '0';
            box.addEventListener('click', function() {
                currentBinary[i] = (currentBinary[i] === 0) ? 1 : 0;
                currentDecimal = parseInt(currentBinary.join(''), 2);
                updateDisplays();
            });
            binaryBoxes.appendChild(box);
        }
    }

    // Function to update binary and decimal display
    function updateDisplays() {
        binaryBoxes.childNodes.forEach((box, index) => {
            box.textContent = currentBinary[index];
        });
        decimalDisplay.textContent = `Respective Decimal Equivalent: ${currentDecimal}`;
    }

    // Function to handle enter button click
    createBtn.addEventListener('click', function() {
        let numBits = parseInt(bitInput.value);
        if (isNaN(numBits) || numBits <= 0) {
            alert('Please enter a valid number of bits.');
            return;
        }
        currentBinary = Array(numBits).fill(0);
        currentDecimal = parseInt(currentBinary.join(''), 2);
        createBinaryBoxes(numBits);
        updateDisplays();
    });

});
