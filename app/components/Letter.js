import React from 'react';

export default class Letter extends React.Component {
	constructor (props) {
		super(props)
	}
	render () {
		let letterStyle = {
			width: 150,
			height: 150,
			backgroundColor: this.props.bgcolor
		}
		return (
			<div style={ letterStyle }>
				{ this.props.children }
			</div>
			)
	}
}