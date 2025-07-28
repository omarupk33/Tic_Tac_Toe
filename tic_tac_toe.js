//  Honestly, there is a lot I need to fix up here.
//  I don't like how the get functions are a part of the Gameboard object
const scoreSave= {
    player1_score: 0,
    player2_score: 0}


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
    // I want to way to update the score without losing my track of the game
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

function update_score(mark){
    switch(mark){
        case 'X':
            scoreSave.player1_score += 1
            player1.score = scoreSave.player1_score

            console.log(`The score is ${player1.score} for the player who plays ${player1.mark}`)
        break

        case 'O':
            scoreSave.player2_score += 1
            player2.score = scoreSave.player2_score
            console.log(`The score is ${player2.score} for the player who plays ${player2.mark}`)
            break
        default:
        console.log('It ended with a tie');
            }
        }

// A winning condition and a score method are necessary
// Winning conditions
function finding_a_winner(board){
    // Checking if anyone won in rows! 
    // Should all console.log replaced with booleans
    let winner_mark;
    
    for (row in board.gameboard){
    if (board.getCell(row,0) === board.getCell(row,1)
    &&
    board.getCell(row,1) === board.getCell(row,2))
    {console.log(`${board.getCell(row,1)} is winner in rows`)
        winner_mark = board.getCell(row,1) 
        break}
    else{console.log('no on won in rows')
    }
    }

    // Checking if anyone won in columns! 
    for(column in board.gameboard){
    if (board.getCell(0, column) === board.getCell(1, column)
    &&
    board.getCell(1, column) === board.getCell(2, column))
    {console.log(`${board.getCell(1,column)} is winner in columns`)
        winner_mark = board.getCell(1, column)
        break}
    else{console.log('no on won in columns')
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
    {console.log(`${board.getDiagonal(1)} is winner diagonally`)
        winner_mark = board.getDiagonal(1)
        return winner_mark}
    else{console.log('It is not diagonal')}

    return winner_mark
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
        // Just return Gameboard to solve most issues
    return {Gameboard, finding_a_winner,
         update_score, random_game}
}

// Start game
function startGame(){
    const {Gameboard, finding_a_winner, 
    update_score, random_game} = tic_tac_toe()

    // random game (Should be changed to play_game())
        random_game()
    // check if there is a winner
    // finding_a_winner(gameboard.gameboard)
    console.log(Gameboard.gameboard)
    let theWinnerMark = finding_a_winner(Gameboard)
    update_score(theWinnerMark)
    
}

for(let k = 0; k < 2; k++){startGame()}


// I don't know what to do honestly
// function main_loop(){

//     // Gameboard.gameboard
// }

// main_loop()