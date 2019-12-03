import React, { Component } from 'react';

export default class Input extends Component {
	render() {
		return (
			<div>
				<form onSubmit={this.props.userInput}>
					<label>
						Todo Item:
                        <br/>
						<input style={{width:'50%', height: '50px'}} type='text' name='name' />
					</label>
					<input type='submit' value='Submit' />
				</form>
			</div>
		);
	}
}
