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
        },
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

// Gameboard.finding_a_winner = finding_a_winner


fillingBoard()

    return {Gameboard,
         update_score, bot}
}



//  Should be given a complete table so it can check if there was a winner, if no, returns false
function finding_a_winner(board){
    let winner_mark;
    let winner_found = false
    for (row in board.gameboard){
    if (board.getCell(row,0) === board.getCell(row,1)
    &&
    board.getCell(row,1) === board.getCell(row,2)){
        
        winner_mark = board.getCell(row,1) 
        winner_found = true
        break}
    }

    // Checking if anyone won in columns! 
    for(column in board.gameboard){
    if (board.getCell(0, column) === board.getCell(1, column)
    &&
    board.getCell(1, column) === board.getCell(2, column)){
        
        winner_mark = board.getCell(1, column)
        winner_found = true
        break}

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
            
        winner_mark = board.getDiagonal(1)
        winner_found = true
        }

        if(!winner_found){
            alert('A tie')
            }

        return {winner_mark, winner_found}
    }


  
function attach_to_dom(board){
        
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
                // Should move this logic inside finding_a_winner
            if(!board.gameboard.flatMap(innerarray => innerarray).includes('#')){
                console.log(finding_a_winner(board).winner_found)
                }
            }
 
        })
    })

}

function main_loop(){

        const {Gameboard,
    update_score, bot} = tic_tac_toe_settings()
    let board = Gameboard

    attach_to_dom(board)
}
main_loop()

//  Should update score everytime somone wins

// Should work on the page version by providing user name inputs

// Should add buttons to restart games without adding scores to no one