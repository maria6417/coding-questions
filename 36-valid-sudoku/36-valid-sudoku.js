/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const box = {};
    for (let i = 0; i < 9; i++) { 
        const row = {};
        const col = {};
        for (let j = 0; j < 9; j++) { 
            // check if row[board[i][j]] is true
            if (row[board[i][j]] && board[i][j] !== '.') return false;
            if (col[board[j][i]] && board[j][i] !== '.') return false;
            
            let boxIdx = [Math.floor(i / 3), Math.floor(j / 3)];
            if (board[i][j] !== '.' && box[boxIdx] && box[boxIdx][board[i][j]]) return false;
            
            row[board[i][j]] = 1;
            col[board[j][i]] = 1;
            box[boxIdx] ? box[boxIdx][board[i][j]] = 1 : box[boxIdx] = { [board[i][j]] : 1 };
            
        }
    }
    return true;
};
