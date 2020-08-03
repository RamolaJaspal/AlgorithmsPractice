
const goalX=2
const goalY=1

function reached(x,y) {
   
    return goalX==x && y==goalY;
}

let input = [[1, 0, 1], [1, 1, 0], [0, 1, 0]]



let track = []

for (let i = 0; i < input.length; i++) {
    track[i] = []
    for (let j = 0; j < input[i].length; j++) {
        track[i][j] = 0;
    }
}

function isVisited(i, j, track) {
    if (track[i][j] == -1) {
        return true;
    }
    return false;
}

function AllVisited(track) {

    for (let i = 0; i < track.length; i++) {
        for (let j = 0; j < track[i].length; j++) {
            if (track[i][j] == 0) {
                return false;
            }
        }
    }
    return true;

}

function isValidBox(x, y, input) {
    let allowedRow = input.length;
    let allowedColumn = input[0].length;
    return (x < allowedRow && x > -1) && (y < allowedColumn && y > -1) && input[x][y]==1;
}

function RatInMaze(row, column,path,input, track) {
 if (reached(row,column)) {
        console.log(path)
    }
    rows = [0, 0, 1, -1, 1, -1, -1, 1]
    columns = [1, -1, 0, 0, 1, 1, -1, -1]

    for (let i = 0; i < 8; i++) {
       let newrow = rows[i] + row;
       let newcol = columns[i] + column
        if (isValidBox(newrow, newcol, input) && !isVisited(newrow, newcol, track)) {
            track[newrow][newcol] = -1;
            RatInMaze(newrow, newcol,path+`{${newrow},${newcol} }`, input, track)
            track[newrow][newcol] = 0;
        }
    }
    
}

track[0][0]=-1
RatInMaze(0, 0, `{0,0}`, input, track);



