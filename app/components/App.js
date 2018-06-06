import React from 'react';
import Label from './Label';
import Letter from './Letter';

export default class App extends React.Component {
	constructor(props, context) {
    super(props)
    this.state = {
      data: {},
    }
    // this.getUserInfo = this.getUserInfo.bind(this)
  }
	render () {
		let cardStyle = {
			width: 150,
			height: 200,
			backgroundColor: '#fff',
			boxShadow: '0 0 8px #666',
			margin: 10,
			display: 'inline-block'
		}
		return (
			<div style={ cardStyle }>
				<Letter bgcolor={this.props.bgcolor}/>
				<Label bgcolor={this.props.bgcolor}/>
			</div>
			)
	}
}