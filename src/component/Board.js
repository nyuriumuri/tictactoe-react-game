import React from 'react';
import Block from './Block';
import getAIMove from "./AI";
import "./Board.css";
import { HiHome } from "react-icons/hi";
import { VscDebugRestart } from "react-icons/vsc";
export default class Board extends React.Component{
	constructor(props){
		super(props);
		if(this.props.ai_game && this.props.ai_turn==='X')
		{
			let board = Array(9).fill(null);
			board[0]='X';
			this.state={
					player:'O',
					board:board,
					gameOver:false,
					winner: null,
					ai_turn: this.props.ai_turn,
					ai_game:this.props.ai_game,
					ai_is_playing:false,
				};
		}
		else this.state={
				player:'X',
				board:Array(9).fill(null),
				gameOver:false,
				winner: null,
				ai_turn: this.props.ai_turn,
				ai_game:this.props.ai_game,
				ai_is_playing:false,
			};
		this.blockClick=this.blockClick.bind(this);
		this.checkGameOver=this.checkGameOver.bind(this);
		this.resetGame=this.resetGame.bind(this);
		this.makeAIMove=this.makeAIMove.bind(this);
	}

	blockClick(index){
		console.log(this.state);
		if(this.state.gameOver) return;
		let board_copy = this.state.board.slice();
		board_copy[index] = this.state.player;
		this.checkGameOver(board_copy);
		this.setState({board:board_copy});
		this.state.player === 'X'? this.setState({player:'O'}) : this.setState({player:'X'});
		console.log("-----------");
		console.log(board_copy.slice(0,3).toString());
		console.log(board_copy.slice(3,6).toString());
		console.log(board_copy.slice(6,9).toString());
		console.log("-----------");
		if(this.state.ai_game) this.makeAIMove(board_copy);
	}

	makeAIMove=(board=null, change_state=true)=>{
		let board_copy=[]
		if(board) board_copy=board.slice();
		else board_copy=this.state.board.slice();
		if(this.state.ai_game){
			let aimove = getAIMove(board_copy,this.state.ai_turn);
			console.log(aimove);
			if(aimove!=null)
			board_copy[aimove]=this.state.ai_turn;
			if(aimove!=null && !this.state.gameOver && change_state)
			{
				this.setState({
					board:board_copy,
					player:(this.state.ai_turn==='X'? 'O' : 'X'),
				});
			}
		}
		this.checkGameOver(board_copy);
		return board_copy;
	}
	resetGame=()=>{
		let new_board=Array(9).fill(null)
		let ai_reset='X';
		if(this.state.ai_game && this.state.ai_turn==='X') {
			new_board=this.makeAIMove(Array(9).fill(null), false );
			ai_reset='O';
		}
		this.setState({
			player:ai_reset,
			board:new_board,
			gameOver:false,
			winner: null,
		})
	}
	checkGameOver=(board)=>{

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
		let winner_found=false;
		wincons.forEach(
			(wincon)=>{
				if(board[wincon[0]]!=null && board[wincon[1]]===board[wincon[0]] && board[wincon[2]]===board[wincon[0]]){
					console.log(board[wincon[0]], board[wincon[1]], board[wincon[2]]);
					this.setState(
						{	winner: board[wincon[0]],
							gameOver:true
						});
					winner_found=true;
				}
			}
		);

		if (winner_found) return true;
		let empty=false;
		board.forEach((item) => {
			if(item===null){
				empty=true;
			}
		});

		if(empty)
		{
			return false;
		}
		this.setState(
			{	winner: 'D',
				gameOver:true
			});
			return true;
	}

	render()
	{
		let wintext = "";
		if(this.state.gameOver)
		{
			if(this.state.winner==='D') wintext = "It's a Draw!";
			if(this.state.winner==='X') wintext = "X Won!";
			if(this.state.winner==='O') wintext = "O Won!";
		}
		return(
			// <div class="d-flex align-items-center justify-content-around">
			<div className="Board">
			<div class="d-flex align-items-center align-content-around flex-row w-100 justify-content-around flex-wrap">
			<div class="d-flex align-items-startflex-row">
	   			 		<button type="button" class="btn btn-secondary m-4 p-4 h-100" onClick={()=>this.resetGame()}>
								<VscDebugRestart></VscDebugRestart>
							</button>
						<button type="button" class="btn btn-secondary m-4 p-4" onClick={()=>this.props.reset()}>
							<HiHome></HiHome>
						</button>
	   		</div>
				<div class="d-flex align-items-center flex-column margins">
				 	<div class="d-flex align-items-center flex-row">
				 		<Block index="0" handleClick={this.blockClick} ai_game={this.state.ai_game} current_turn={this.state.player} ai_turn={this.state.ai_turn} value={this.state.board[0]} disable={this.state.gameOver  || this.state.ai_is_playing || this.state.board[0]}></Block>
			 			<Block index="1" handleClick={this.blockClick} ai_game={this.state.ai_game} current_turn={this.state.player} ai_turn={this.state.ai_turn} value={this.state.board[1]} disable={this.state.gameOver  || this.state.ai_is_playing || this.state.board[1]}></Block>
			 			<Block index="2" handleClick={this.blockClick} ai_game={this.state.ai_game} current_turn={this.state.player} ai_turn={this.state.ai_turn} value={this.state.board[2]} disable={this.state.gameOver  || this.state.ai_is_playing || this.state.board[2]}></Block>
				 	</div>
				 	<div class="d-flex align-items-center flex-row">
						<Block index="3" handleClick={this.blockClick} ai_game={this.state.ai_game} current_turn={this.state.player} ai_turn={this.state.ai_turn} value={this.state.board[3]} disable={this.state.gameOver  || this.state.ai_is_playing || this.state.board[3]}></Block>
						<Block index="4" handleClick={this.blockClick} ai_game={this.state.ai_game} current_turn={this.state.player} ai_turn={this.state.ai_turn} value={this.state.board[4]} disable={this.state.gameOver  || this.state.ai_is_playing || this.state.board[4]}></Block>
						<Block index="5" handleClick={this.blockClick} ai_game={this.state.ai_game} current_turn={this.state.player} ai_turn={this.state.ai_turn} value={this.state.board[5]} disable={this.state.gameOver  || this.state.ai_is_playing || this.state.board[5]}></Block>
				 	</div>
				 	<div class="d-flex align-items-center flex-row">
						<Block index="6" handleClick={this.blockClick} ai_game={this.state.ai_game} current_turn={this.state.player} ai_turn={this.state.ai_turn} value={this.state.board[6]} disable={this.state.gameOver  || this.state.ai_is_playing || this.state.board[6]}></Block>
						<Block index="7" handleClick={this.blockClick} ai_game={this.state.ai_game} current_turn={this.state.player} ai_turn={this.state.ai_turn} value={this.state.board[7]} disable={this.state.gameOver  || this.state.ai_is_playing || this.state.board[7]}></Block>
						<Block index="8" handleClick={this.blockClick} ai_game={this.state.ai_game} current_turn={this.state.player} ai_turn={this.state.ai_turn} value={this.state.board[8]} disable={this.state.gameOver  || this.state.ai_is_playing || this.state.board[8]}></Block>
				 	</div>
					
				</div>
				<div  class="margins winner">
   			 		<h1>{wintext}</h1>
   			 	</div>
				</div>
			 </div>

		)
	}
}
