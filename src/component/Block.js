import React from 'react';
import './Block.css';
export default class Block extends React.Component{
	constructor(props){
		super(props);
		this.state={
			index: props.index,
			value: null,
		};
		this.handleClick=this.handleClick.bind(this)
	}

	handleClick(){
		console.log(this.props);
		if (this.props.disable || (this.props.ai_game && (this.props.current_turn===this.props.ai_turn)))
			return;
		this.props.handleClick(this.state.index);
	}

	render(){
		let buttonClass="block-button";
		if(this.props.value==="X")
			{
				buttonClass="block-button X";
		}
		if(this.props.value==='O')
			buttonClass+=" O";
		return(
			<div>
				<button className={buttonClass} onClick={()=>this.handleClick()}>{this.props.value}</button>
			</div>
		)
	}
}
