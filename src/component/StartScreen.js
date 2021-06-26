import React from 'react';
import './StartScreen.css';
export default class StartScreen extends React.Component{
	constructor(props){
		super(props);
		this.state={
			ai_screen:false
		};
	}

	render(){

		if(!this.state.ai_screen)
		return(
			<div className="container">
				<button className="StartButton" onClick={()=>this.setState({ai_screen:true})}>Play Against AI</button>
				<button className="StartButton" onClick={()=>this.props.clickHandler()}>Two Players</button>
			</div>
		);
		else return(
			<div className="container">
				<button className="StartButton" onClick={()=>this.props.ai_clickHandler('O')}>Play as X</button>
				<button className="StartButton" onClick={()=>this.props.ai_clickHandler('X')}>Play as O</button>
			</div>
		);
	}
}
