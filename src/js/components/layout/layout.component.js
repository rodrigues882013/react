import React from "react";

//Internal components
import Header from "../header/header.component";
import Footer from "../footer/footer.component";
import Content from "../content/content.component";

export default class Layout extends React.Component {

	render(){
		return (
			<div>
				<Header title="Main Page"/>
				<Content />
				<Footer />
			</div>
		)
	}
}
