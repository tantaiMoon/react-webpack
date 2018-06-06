import React from 'react';

export default class Label extends React.Component {
	constructor(props) {
		super(props)

	}
	render () {
		let labelStyle = {
			padding: 20,
			fontSize: 20,
			margin: 0,
			fontFamily: 'monoscape',
			textAlign: 'center'
		}
		let pStyle = {
			margin: 0
		}
		return (
				<div style={ labelStyle }>
					<p style={ pStyle }> { this.props.bgcolor }</p>
				</div>
			)
	}
}