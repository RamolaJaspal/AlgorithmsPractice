

function isValidWord(word) {
    dict = ["cat", "bat", "to", "binpute"]

    return dict.includes(word);
}

let input = [["c", "b", "t"], ["a", "z", "x"], ["t", "m", "n"]]



let track = []

for (let i = 0; i < input.length; i++) {
    track[i] = []
    for (let j = 0; j < input[i].length; j++) {
        track[i][j] = 0;
    }
}

function isVisited(i, j, track) {
    if (track[i][j] == 1) {
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
    return (x < allowedRow && x > -1) && (y < allowedColumn && y > -1);
}

function Boggle(row, column, word, input, track) {
    console.log(word)

 if (isValidWord(word)) {
        console.log(word)
    }
    rows = [0, 0, 1, -1, 1, -1, -1, 1]
    columns = [1, -1, 0, 0, 1, 1, -1, -1]

    for (let i = 0; i < 8; i++) {
       let newrow = rows[i] + row;
       let newcol = columns[i] + column
        if (isValidBox(newrow, newcol, input) && !isVisited(newrow, newcol, track)) {
            track[newrow][newcol] = 1;
            Boggle(newrow, newcol, word + input[newrow][newcol], input, track)
            track[newrow][newcol] = 0;
        }
    }
    
}


for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
        track[i][j] = 1
        Boggle(0, 0, input[i][j], input, track);
        track[i][j] = 0
    }
}
