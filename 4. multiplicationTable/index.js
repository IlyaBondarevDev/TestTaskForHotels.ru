const showMultiplicationTable = (size) => {
    multiplicationTable = getMultiplicationTable(size);
    showMultiplicationTableHeader(size);

    for (let i = 0; i < multiplicationTable.length; i++) {
        showMultiplicationTableRows(multiplicationTable[i]);
    }
}

const showMultiplicationTableHeader = (size) => {
    let header = ' '

    for (let i = 1; i <= size; i++) header += `\t${i}`

    console.log(header);
}

showMultiplicationTableRows = (tableRow) => {
    let row = tableRow[0];

    for (let i = 0; i < tableRow.length; i++) {
        row += `\t${tableRow[i]}`;
    }

    console.log(row);
}

const getMultiplicationTable = (size) => {
    let multiplicationTable = new Array(size);
    for (let i = 0; i < size; i++) 
        multiplicationTable[i] = new Array(size);
    
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            multiplicationTable[i][j] = (i + 1) * (j + 1);
        }
    }

    return multiplicationTable;
}

showMultiplicationTable(10);
