
export default function getAIMove(board, turn, a = -2, b = 2, first=true){
	if (gameEnded(board)){
		if(first) console.log("getAIMove: gameEnded is true");
		if(first) return null;
		return utility(board);
	}
	if(first) console.log("turn: "+turn);
	let moves = possibleMoves(board).slice();
	let best=2;
	let best_move=1;
	if(turn==='X') best=-2;
	if(first){
		console.log("getAIMove: best = ", best);
		console.log("getAIMove: moves = ", moves);
	}
	for(let i =0; i<moves.length; i++) {
		let move=moves[i];
		let next_board= board.slice();
		next_board[move]=turn;
		let next_turn='X';
		if(turn==='X') next_turn='O';
		let score = getAIMove(next_board, next_turn, a, b, false);
		if (turn==='X' && best < score)
		 	{
				best=score;
				best_move=move;
			}

		if (turn==='O' && best > score)
			{
				best=score;
				best_move=move;
			}

		if (turn==='X'){
			if(best>a) a=best;
			if(a>b) return false;
		}
		if(first)
		console.log("At move "+move+" a= "+a+" b= "+b+" best= "+best);
		if (turn==='O'){
			b=Math.min(best,b);
			if(b<a) return false;
		}

	}
	if(first) {
		console.log("getAIMove: Best Move: ", best_move);
		return best_move;
	}

	return best;
	}




function utility(board){
	let winner = getWinner(board);
	if(winner === null) return 0;
	else if(winner === 'X') return 1;
	else return -1;
}

function getWinner(board){
	const wincons = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	for(let i=0; i<wincons.length; i++)
	{
		if(board[wincons[i][0]]!=null && board[wincons[i][0]] === board[wincons[i][1]] && board[wincons[i][0]] === board[wincons[i][2]])
		return(board[wincons[i][0]]);
	}
	return null;
}

function gameEnded(board){

	if(getWinner(board)) return true;
	for(let i=0; i< board.length; i++)
	{
		if(board[i]===null) return false;
	}
	return true;
}

function possibleMoves(board){
	let moves=[];
	for(let i=0; i<board.length; i++){
		if(board[i]===null) moves.push(i)
	}
	return moves;
}
