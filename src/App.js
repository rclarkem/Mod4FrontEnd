import React, { Component } from 'react';
import AgendaInput from './components/AgendaInput';
import Header from './components/Header';
import AgendaList from './components/AgendaList';

export default class App extends Component {
	state = {
		agendas: [],
	};

	componentDidMount() {
		fetch('http://localhost:3000/agendas')
			.then((response) => response.json())
			.then((response) => {
				this.setState({
					agendas: response,
				});
			});
	}

	userInput = (e) => {
		e.preventDefault();
		this.setState({
			agendas: [...this.state.agendas, { list: e.target.name.value }],
		});
	};

	render() {
		console.log(this.state.messages);
		return (
			<div>
				<Header />
				<AgendaInput userInput={this.userInput} />
				<AgendaList agendaArr={this.state.agendas} />
			</div>
		);
	}
}
