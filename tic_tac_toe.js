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

        function fill_loaction_with(row, column, value){
            return   board[row][column] = value
        }

        // Playing the game randomly
        function random_game(){
            for (row in board){
                for (column in board){

                    if (Math.random() < 0.5) {
                    fill_loaction_with(row, column, player1)
                    }
                    else {
                    fill_loaction_with(row, column, player2)
                    }
                }
            }
        }

        random_game()


        // Winning conditions
        // function Winning(){
        // for (i in board){}
        // }

        return board
}
// A winning condition and a score method are necessary


console.log(board())