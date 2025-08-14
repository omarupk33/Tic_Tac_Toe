const scoreSave= {
    player1_score: 0,
    player2_score: 0}


function tic_tac_toe_settings(){
    const Gameboard = {
        gameboard: [['#','#','#'],
                    ['#','#','#'],
                    ['#','#','#']],

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

    const player1 = {
        mark: 'O',
        win_record: 0
    }
    const player2 = {
        mark:'X',
        win_record: 0
    }

    const getWinRecord = (mark)=>{
        if(mark === 'O'){
            return player1.win_record
        }

        else{return player2.win_record}
    }

    return {Gameboard,getWinRecord}
}


function finding_a_winner(board){
    let winner_found = false
    for (row in board.gameboard){
    if (board.getCell(row,0) === board.getCell(row,1)
    &&
    board.getCell(row,1) === board.getCell(row,2)
    &&
    board.getCell(row,0) !== '#' && board.getCell(row,1) !== '#' && board.getCell(row,2) !== '#'
    ){
        
        winner_found = true
       break}
    }

    // Checking if anyone won in columns! 
    for(column in board.gameboard){
    if (board.getCell(0, column) === board.getCell(1, column)
    &&
    board.getCell(1, column) === board.getCell(2, column)
    &&
    board.getCell(0, column) !== '#' && board.getCell(1, column) !== '#' && board.getCell(2, column) !== '#'
    ){
        
        winner_found = true
       break}

    }
    // Checking if anyone won diagonally!
    let center = 0
    if (board.getDiagonal(center) === board.getDiagonal(center + 1)
        &&
        board.getDiagonal(center + 1) === board.getDiagonal(center + 2)
        &&
        board.getDiagonal(center) !== '#' && board.getDiagonal(center + 1) !== '#' && board.getDiagonal(center + 2) !== '#'
        ||
    // For reversed diagonals
        board.getCell(2, 0) === board.getDiagonal(1)
        &&
        board.getDiagonal(1) === board.getCell(0, 2)
        &&
        board.getCell(2, 0) !== '#' && board.getDiagonal(1) !== '#' && board.getCell(0, 2) !== '#'
        ){
            
        winner_found = true
    }

    return winner_found
    }


  
function attach_to_dom(board, stopGame){
        
    const container = document.querySelector('.container')
    let button_locations = {}

    for(let i = 0; i < 3; i++){
        let row = document.createElement('div')
        let column_location = i

    for (let j = 0; j < 3;j++){
        let row_location = j

    const button = document.createElement('button')
    button.style.height = '165px'
    button.style.width = '165px'
    button.style.fontSize = '80px'
    button.className = 'box'

    button_locations[`button${i}${j}`] = ({'row':row_location, 'column':column_location})
    button.setAttribute('data-item-id', `button${i}${j}`)

    row.appendChild(button)
    }
    container.appendChild(row)

    }


function update_score(mark){
    switch(mark){
        case 'O':
        const player1 = document.querySelector('.player_score')
        scoreSave.player1_score += 1
        player1.textContent = `Score: ${scoreSave.player1_score}`
    break
 
        case 'X':
            const player2 = document.querySelector('.opponent_score')
            scoreSave.player2_score += 1
            player2.textContent = `Score: ${scoreSave.player2_score}`

        break

        default:
        console.log('It ended with a tie');
            }
        }

    const allButtons = document.querySelectorAll('.box')
    let switcher = true     
    let winner_mark; 
    let found;
    if(!stopGame){
    allButtons.forEach((button)=>{
        let location = button.dataset.itemId
        let selected_location = button_locations[location]
        button.addEventListener('click', ()=>{
            const winner_found = finding_a_winner(board)

            //  I don't know what to do exactly. I feel like I have been spinning in a circle for a week
            if (winner_found){
                stopGame = true
                found = winner_found
            }

             if(!button.textContent && !winner_found){
                if (switcher){
                    button.textContent = 'O'
                    winner_mark = 'O'
                    switcher = false
                    board.convertCell(selected_location.row,
                    selected_location.column, button.textContent)
                }
                else{
                    button.textContent = 'X'
                    winner_mark = 'X'
                    switcher = true
                    board.convertCell(selected_location.row,
                    selected_location.column, button.textContent)
                }
            }
        })
    })
    }
    else{

        update_score(winner_mark)
    
    }


    return allButtons
}

function main_loop(){

    const {Gameboard} = tic_tac_toe_settings()
    let board = Gameboard
    let stopGame = false
    let allButtons = attach_to_dom(board, stopGame)

    const new_round = document.querySelector('.reset')
    const new_game = document.querySelector('.new_game')

    new_round.addEventListener('click', ()=>{
        board.gameboard = [['#','#','#'],
                           ['#','#','#'],
                           ['#','#','#']]

        allButtons.forEach((button)=>{
            button.textContent = ''
        })
            console.log(board)
        stopGame = false
    })

    new_game.addEventListener('click', ()=>{

        board.gameboard = [['#','#','#'],
                           ['#','#','#'],
                           ['#','#','#']]
        allButtons.forEach((button)=>{ 
            button.textContent = ''
        })
        scoreSave.player1_score, scoreSave.player2_score = 0, 0
        console.log(board)
        stopGame = false
    })
}

main_loop()