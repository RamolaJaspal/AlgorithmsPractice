const N = 4

let board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]




function isSafe(board, x, y) {

    NumberOfZeros = 0
    for (let i = 0; i < board.length; i++) {
        if (board[x][i] == 1) {
            return false;
        }
        if (board[i][y] == 1) {
            return false
        }
        
    }

    sum=x+y;
    diff=x-y
    for(let i=0;i<board.length;i++)
    {
        for(let j=0;j<board[0].length;j++)
        {
            if(i-j==diff)
            {
                if(board[i][j]==1)
                {
                    return false;
                }
            }
            if(i+j==sum)
            {
                if(board[i][j]==1)
                {
                    return false;
                }

            }
        }
    }

    return true;


}


    function isValidBox(x, y, board) {
        let allowedRow = board.length;
        let allowedColumn = board[0].length;
        return (x < allowedRow && x > -1) && (y < allowedColumn && y > -1);
    } 

function placenQueen(board,row=0)
{   
    

    if(row==board.length)
    {
        console.log(board)
        return;
    }
    else{
        for(let i=0;i<board.length;i++)
        {   
            if(isValidBox(row,i,board) && isSafe(board,row,i))
            {   
                board[row][i]=1;
                placenQueen(board,row+1);
                board[row][i]=0;
            }
        }
              
        
    }
}

placenQueen(board)