document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board');
    const drawButton = document.getElementById('drawButton');
    const cells = [];

    // Create the Tombola board
    for (let i = 1; i <= 76; i++) {
      const cell = document.createElement('td');
      cell.innerText = i;
      board.appendChild(cell);
      cells.push(cell);
    }

    // Function to generate a random number from 1 to 76
    function generateRandomNumber() {
      return Math.floor(Math.random() * 76) + 1;
    }

    // Function to highlight a cell
    function highlightCell(cell) {
      cell.classList.add('highlight');
    }

    // Function to clear the highlighting of all cells
    function clearHighlight() {
      cells.forEach(function(cell) {
        cell.classList.remove('highlight');
      });
    }

    // Function to handle the button click event
    function handleButtonClick() {
      clearHighlight();

      const randomNumber = generateRandomNumber();
      const selectedCell = cells[randomNumber - 1];
      highlightCell(selectedCell);
    }

    // Add event listener to the draw button
    drawButton.addEventListener('click', handleButtonClick);
  });