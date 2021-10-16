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
			<div className="StartScreen">
				<div className="StartButton L" onClick={()=>this.setState({ai_screen:true})}>Play Against AI</div>
				<div className="StartButton R" onClick={()=>this.props.clickHandler()}>Two Players</div>
			</div>
		);
		else return(
			<div className="StartScreen">
				<div className="StartButton L" onClick={()=>this.props.ai_clickHandler('O')}>Play as X</div>
				<div className="StartButton R" onClick={()=>this.props.ai_clickHandler('X')}>Play as O</div>
			</div>
		);
	}
}
