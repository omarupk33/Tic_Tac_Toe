function tic_tac_toe(){
    const Gameboard = {
        gameboard: [],

        fillingBoard: ()=>{
        for(let i = 0; i < 3; i++){
        let row = []
        for(let j = 0; j < 3; j++){
            row.push('#')}
        Gameboard.gameboard.push(row)}    
        },

        getDiagonal:(diagonal_cell)=>{
           return Gameboard.gameboard[diagonal_cell][diagonal_cell]
        },
        GetReversedDiagonal:()=>{
            return Gameboard.gameboard.reverse()
        },
        convertCell(row, column, value){
            return Gameboard.gameboard[row][column] = value
        },

        getCell:(row, column)=> {
            return Gameboard.gameboard[row][column]
        }
    }

    const  player1 = {
        mark: 'X',
        score: 0
    }
    const  player2 = {
        mark:'O',
        score: 0
    }
        function random_game(){
        Gameboard.fillingBoard()
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
        Gameboard.fillingBoard()
        for (i in Gameboard.gameboard){
            let location = Gameboard.getDiagonal(i)
            Gameboard.convertCell(i, i, 'hey')
        }

        return Gameboard
}
// A winning condition and a score method are necessary
      
console.log(tic_tac_toe())

        // Winning conditions

function winning_conditions(board){
                // Checking if anyone won in columns! 
                for (row in board.gameboard){
                if (board.getCell(row,0) === board.getCell(row,1)
                &&
                board.getCell(row,1) === board.getCell(row,2))
                {console.log('It worked')}
                else{console.log('It did not work')}
                }

                // Checking if anyone won in rows! 
                for(column in board.gameboard){
                if (board.getCell(0, column) === board.getCell(1, column)
                &&
                board.getCell(1, column) === board.getCell(2, column))
                {console.log('It worked')}
                else{console.log('It did not work')}
                }
                // Checking if anyone won in diagonally! 
                //  Maybe we should use the function getDiagonal instead of this mess
                let diagonal = 0
                if (board.getDiagonal(diagonal) === board.getDiagonal(diagonal + 1)
                    &&
                    board.getDiagonal(diagonal + 1) === board.getDiagonal(diagonal + 2)
                ||
                    board.getDiagonal(diagonal - 1) === board.getDiagonal(diagonal - 2)
                    &&
                    board.getDiagonal(diagonal - 2) === board.getDiagonal(diagonal - 3))
                {console.log('it is diagonal ')}
                else{console.log('It is not diagonal')}
}


        // function winning(board){

        // for (column in board)
            
        // // I should move through the board horizontally first
        //     // I guess the only way to do it is to 
            
        //     {
        //     if (baord[row][cell] === baord[])
        // }
        // }

winning_conditions(tic_tac_toe())