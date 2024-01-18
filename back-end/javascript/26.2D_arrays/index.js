// 2D array = muilti-dimensional array that stores a matrix of data in rows and columns
//            Useful for games, spreadsheets, or representing images

//            [[X, O, X]
//            [O, X, O]
//            [X, O, X]]

const matrix = [[1, 2, 3], 
                [4, 5, 6], 
                [7, 8, 9]];

matrix[0][0] = 'X';
matrix[0][1] = 'O';
matrix[0][2] = 'X';

matrix[1][0] = 'O';
matrix[1][1] = 'X';
matrix[1][2] = 'O';

matrix[2][0] = 'X';
matrix[2][1] = 'O';
matrix[2][2] = 'X';

for(let row of matrix){
    console.log(row);
}

for(let row of matrix){
    const rowString = row.join(" ");
    console.log(rowString);
}

const scrambleMatrix = [[0, "#0oPk13", 9, 'C'], // doesn't need to be organized or the same number for each column or row
                        [1, 2, 7],
                        [5, 10],
                        ["-"]];

for(let row of scrambleMatrix){
    console.log(row.join(" "));
}

const keyPad = [[1, 2, 3], 
                [4, 5, 6], 
                [7, 8, 9],
                ["*", 0, "#"]];

for(let row of keyPad){
    console.log(row.join(" "));
}