import React, { Component } from 'react';

export default class TodoCon extends Component {
	render() {
		return (
			<div key>
				<ul>
					<li>{this.props.item.list}</li>
				</ul>
			</div>
		);
	}
}
