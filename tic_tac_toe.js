//  Honestly, there is a lot I need to fix up here.
//  I don't like how the get functions are a part of the Gameboard object
function tic_tac_toe(){
    const Gameboard = {
        gameboard: [],
        getDiagonal:(diagonal_cell)=>{
            return Gameboard.gameboard[diagonal_cell][diagonal_cell]
        },

        convertCell:(row, column, value)=>{
            return Gameboard.gameboard[row][column] = value
            },

        getCell:(row, column)=>{
            return Gameboard.gameboard[row][column]
        }
    }
    const player1 = {
        mark: 'X',
        score: 0
    }
    const player2 = {
        mark:'O',
        score: 0
    }

function fillingBoard(){
    for(let i = 0; i < 3; i++){
    let row = []
    for(let j = 0; j < 3; j++){
        row.push('#')}
    Gameboard.gameboard.push(row)}    
    }

function round_winner(player){

    const {player1, player2} = tic_tac_toe()
    switch(player){
        case 'X':
            player1.score++
            console.log(`The score is ${player1.score} for the player who plays ${player1.mark}`)
        break

        case 'O':
            player2.score++
            console.log(`The score is ${player2.score} for the player who plays ${player2.mark}`)
            break
            }
        }

// A winning condition and a score method are necessary
// Winning conditions
function winning_conditions(board){
    // Checking if anyone won in rows! 
    // Should all console.log replaced with booleans
    for (row in board.gameboard){
    if (board.getCell(row,0) === board.getCell(row,1)
    &&
    board.getCell(row,1) === board.getCell(row,2))
    {console.log('Win in rows')}
    else{console.log('Did not win in rows')
    }
    }

    // Checking if anyone won in columns! 
    for(column in board.gameboard){
    if (board.getCell(0, column) === board.getCell(1, column)
    &&
    board.getCell(1, column) === board.getCell(2, column))
    {console.log('Win in columns')}
    else{console.log('Did not win in columns')
    }

    }
    // Checking if anyone won diagonally!
    let diagonal = 0
    if (board.getDiagonal(diagonal) === board.getDiagonal(diagonal + 1)
        &&
        board.getDiagonal(diagonal + 1) === board.getDiagonal(diagonal + 2)
    ||
    // For reversed diagonals
        board.getCell(2, 0) === board.getDiagonal(1)
        &&
        board.getDiagonal(1) === board.getCell(0, 2))
    {console.log('it is a diagonal win')}
    else{console.log('It is not diagonal')}

    console.log(board.gameboard)
}

function random_game(){
    fillingBoard()
        for (row in Gameboard.gameboard){
            for (column in Gameboard.gameboard){
                if (Math.random() < 0.5) {
                Gameboard.convertCell(row, column, player1.mark)
                }
                else {
            Gameboard.convertCell(row, column, player2.mark)
                }
            }
        }
    }
    random_game()
        // Just return Gameboard to solve most issues
    return {Gameboard, player1, player2,
            winning_conditions, round_winner, fillingBoard}
}

// I don't know what to do honestly
function main_loop(){
    const {Gameboard, player1, player2, winning_conditions, 
           round_winner, fillingBoard} = tic_tac_toe()
    console.log(Gameboard.gameboard)
}

main_loop()