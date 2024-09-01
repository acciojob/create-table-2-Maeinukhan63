function createTable() {
    // Get the number of rows from the user
    const rn = prompt("Input number of rows");

    // Get the number of columns from the user
    const cn = prompt("Input number of columns");

    // Find the table with the id 'myTable'
    const myTable = document.getElementById('myTable');

    // Clear any existing content in the table
    myTable.innerHTML = '';

    // Loop through to create rows
    for (let i = 0; i < rn; i++) {
        // Insert a new row
        const row = myTable.insertRow();

        // Loop through to create cells within the current row
        for (let j = 0; j < cn; j++) {
            // Insert a new cell
            const cell = row.insertCell();

            // Set the cell's text to indicate its row and column
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
