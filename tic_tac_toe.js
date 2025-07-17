// For experiments
// function tic_tac_toe (board){
//     const score = 0
//     const player_one = []
//     const player_two = []
//     return Game = () => {

//     }
// }

function board(){
    const board = []
    const  player1 = 'X'
    const  player2 = 'O'

        for(let i = 0; i < 3; i++){
        let row = []

        for(let j = 0; j < 3; j++){
            row.push('#')
        }
        board.push(row)
        }    

        // replace aint replacing
        for (row in board){
            board[row].push(`This row's number is ${row}`)
            for (cell in row){

                if (Math.random() < 0.5) {
                board[row][cell].replace('#', player1);
                } else {
                board[row][cell].replace('#', player2);
                }
            }
        }

    console.log(board)
}
board()