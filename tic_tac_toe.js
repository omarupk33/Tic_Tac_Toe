//  Honestly, there is a lot I need to fix up here.
//  I don't like how the get functions are a part of the Gameboard object
const scoreSave= {
    player1_score: 0,
    player2_score: 0}


function tic_tac_toe_settings(){
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

function fillingBoard(filler = ''){
    for(let i = 0; i < 3; i++){
    let row = []
    for(let j = 0; j < 3; j++){
        row.push(filler)}
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
// The board is producing a new table
function finding_a_winner(board){
    // Checking if anyone won in rows! 
    // Should all console.log replaced with booleans
    let winner_mark;
    let winner_found = false
    
    for (row in board.gameboard){
    if (board.getCell(row,0) === board.getCell(row,1)
    &&
    board.getCell(row,1) === board.getCell(row,2)){
        
        console.log(`${board.getCell(row,1)} is winner in rows`)

        winner_mark = board.getCell(row,1) 
        winner_found = true
        break}
    else{console.log('no one won in rows')
    }
    }

    // Checking if anyone won in columns! 
    for(column in board.gameboard){
    if (board.getCell(0, column) === board.getCell(1, column)
    &&
    board.getCell(1, column) === board.getCell(2, column)){
        
        console.log(`${board.getCell(1,column)} is winner in columns`)
        
        winner_mark = board.getCell(1, column)
        winner_found = true
        break}
    else{console.log('no one won in columns')
    }

    }
    // Checking if anyone won diagonally!
    let center = 0
    if (board.getDiagonal(center) === board.getDiagonal(center + 1)
        &&
        board.getDiagonal(center + 1) === board.getDiagonal(center + 2)
        ||
    // For reversed diagonals
        board.getCell(2, 0) === board.getDiagonal(1)
        &&
        board.getDiagonal(1) === board.getCell(0, 2)){
            
        console.log(`${board.getDiagonal(1)} is winner diagonally`)
        winner_mark = board.getDiagonal(1)
        winner_found = true
        }
    else{console.log('It is not diagonal')}

    return {winner_mark, winner_found}
}

//  Should be changed 

function bot(){
    // fillingBoard()
    //     for (row in Gameboard.gameboard){
    //         for (column in Gameboard.gameboard){
    //             if (Math.random() < 0.5) {
    //             Gameboard.convertCell(row, column, player1.mark)
    //             }
    //             else {
    //         Gameboard.convertCell(row, column, player2.mark)
    //             }
    //         }
    //     }
    }

fillingBoard()

    return {Gameboard, finding_a_winner,
         update_score, bot}
}



// Working on DOM and started styling
//  Finally!!
function buttonSettings(){

    const {Gameboard, finding_a_winner,
    update_score, bot} = tic_tac_toe_settings()
    
    let board = Gameboard
    // const {winner_found, winner_mark} = finding_a_winner(board)

        
    const container = document.querySelector('.container')
    let button_locations = {}
    //Making buttons and assigning button's locations on the table
    for(let i = 0; i < 3; i++){
        let row = document.createElement('div')
        let column_location = i

    for (let j = 0; j < 3;j++){
        let row_location = j

    const button = document.createElement('button')
    button.style.height = '165px'
    button.style.width = '165px'
    button.style.fontSize = '80px'

    button_locations[`button${i}${j}`] = ({'row':row_location, 'column':column_location})
    button.setAttribute('data-item-id', `button${i}${j}`)

    row.appendChild(button)
    }
    container.appendChild(row)

    }


const allButtons = document.querySelectorAll('button')
let switcher = true

    allButtons.forEach((button)=>{
        let location = button.dataset.itemId
        let selected_location = button_locations[location] 
        button.addEventListener('click', ()=>{
            if(!button.textContent){
                if (switcher){
                    button.textContent = 'O'
                    switcher = false

                    board.convertCell(selected_location.row,
                         selected_location.column, button.textContent)

                }
                else{
                    button.textContent = 'X'
                    switcher = true

                    board.convertCell(selected_location.row,
                         selected_location.column, button.textContent)
        
                }
            }
            console.log(board.gameboard)  
        })
    })



    // return board.gameboard
}

function main_loop(){

        const {Gameboard, finding_a_winner,
    update_score, bot} = tic_tac_toe_settings()
    
    let board = Gameboard
    const {winner_found, winner_mark} = finding_a_winner(board)

    // let board = buttonSettings()

    //  Should learn what's going wrong here
    while(!winner_found){
        buttonSettings()
    }
    console.log(winner_mark)


}
main_loop()
