import React from "react";

export default class Header extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
			<header> {this.props.title} </header>
		)
	}
}
