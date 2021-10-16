import React from "react";
import StartScreen from "./StartScreen"
import Board from "./Board"
import "./App.css"
export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			mode: 0,
			ai_game: false,
			ai_turn: null,
		};
	this.setMode=this.setMode.bind(this);
	this.setupAI=this.setupAI.bind(this);
	this.setupTwoPlayers=this.setupTwoPlayers.bind(this);
	}

	setMode(mode){
		this.setState({
			mode: mode
		});

	}

	setupAI(turn){
		this.setState({
			ai_game:true,
			ai_turn:turn,
			mode: 1,
		});
	}
	setupTwoPlayers(){
		this.setState({
			ai_game:false,
			ai_turn:'X',
			mode: 1,
		});

	}

	render(){
		if(this.state.mode!==1){
			return(

						<StartScreen clickHandler={this.setupTwoPlayers} ai_clickHandler={this.setupAI}></StartScreen>

			);
		}
		else{
			return(
				
				<div>
						<Board ai_game={this.state.ai_game} ai_turn={this.state.ai_turn} reset={()=>this.setMode(0)}></Board>
				</div>
			
			);
		}
	}
}
