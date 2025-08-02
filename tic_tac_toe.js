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

function fillingBoard(filler = '#'){
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
    else{console.log('no on won in rows')
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
    else{console.log('no on won in columns')
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

function bot(){
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
    return {Gameboard, finding_a_winner, fillingBoard,
         update_score, bot}
}

// Start game
// function startGame(){
//     const {Gameboard, finding_a_winner, 
//     update_score, bot} = tic_tac_toe_settings()

//     // random game (Should be changed to play_game())
//         bot()
//     // check if there is a winner
//     // finding_a_winner(gameboard.gameboard)
//     console.log(Gameboard.gameboard)
//     let theWinnerMark = finding_a_winner(Gameboard).winner_mark
//     update_score(theWinnerMark)
//     console.log(finding_a_winner(Gameboard).winner_found)
    
// }

// for(let k = 0; k < 3; ++k){startGame()}


// Working on DOM and started styling
//  Confused a lot with what I should do!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
function creating_dom_elements(){

    const {Gameboard, finding_a_winner, fillingBoard,
    update_score, bot} = tic_tac_toe_settings()

        
    const container = document.querySelector('.container')
    let button_locations = {}
    //Making buttons and assigning button's locations on the table
        button_number = 0
    for(let i = 0; i < 3; i++){
        let row = document.createElement('div')
        let row_location = i

    for (let j = 0; j < 3;j++){
        let column_location = j

    const button = document.createElement('button')
    button.style.height = '165px'
    button.style.width = '165px'
    button.style.fontSize = '80px'

    button_locations[`button${button_number}`] = ({'row':row_location, 'column':column_location})
    button.setAttribute('data-object-id', `button${button_number}`)
    row.appendChild(button)

        console.log(button.dataset)
        button_number++
    }
    container.appendChild(row)

    }


const allButtons = document.querySelectorAll('button')
let switcher = true
    new_game = Gameboard.gameboard
    allButtons.forEach((button)=>{
        button.addEventListener('click', ()=>{
            if(!button.textContent ){
                if (switcher){
                    button.textContent = 'O'
                    switcher = false

                    new_game.push(button.textContent)

                }
                else{
                    button.textContent = 'X'
                    switcher = true

                    new_game.push(button.textContent)
        
                }
                console.log(Gameboard.gameboard)
            }
    
        })
    })



    return button_locations
}
button_location = creating_dom_elements()

// let button_location = creating_with_dom()



console.table(button_location)
