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

        // getRow:(numberOfrow)=>{
        //    return Gameboard.gameboard[numberOfrow]
        // },
        convertCell(row, column, value){
            return Gameboard.gameboard[row][column] = value
        },

        getCell:(row, column)=> {
            return Gameboard.gameboard[row][column] = value
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
        // random_game()
        for(let i = 0; i < 3;i++){Gameboard.convertCell(i,0, 'Hello')}

        return Gameboard
}
// A winning condition and a score method are necessary

console.log(tic_tac_toe().gameboard)


        // Winning conditions

        function Winning(board){
            for (row in board){
                if (board.getCell(row,0) === board.getCell(row,1)
                    &&
                    board.getCell(row,1) === board.getCell(row,2))
                    {console.log('Column winner')}
            }

        // for (column in board)
            
        // // I should move through the board horizontally first
        //     // I guess the only way to do it is to 
            
        //     {
        //     if (baord[row][cell] === baord[])
        // }
        }

Winning(tic_tac_toe())