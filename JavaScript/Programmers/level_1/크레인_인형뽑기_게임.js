function solution(board, moves) {
    const newBoard = [...board];
    const newMoves = [...moves];
    const stack = new Array();
    let count = 0;

    newMoves.forEach(move => {
        for (let i = 0; i < newBoard.length; i++) {
            if (newBoard[i][move - 1]) {
                if (stack[stack.length - 1] === newBoard[i][move - 1]) {
                    stack.pop();
                    count += 2;
                    newBoard[i].splice(move - 1, 1, 0);
                    break;
                }

                stack.push(newBoard[i][move - 1]);
                newBoard[i].splice(move - 1, 1, 0);
                break;
            }
        }
    });

    return count;
}
