import React, { Component } from 'react';
import TodoCon from './TodoCon'
export default class ListContainer extends Component {
    render() {
        const items = this.props.todoItems.map((item) => <TodoCon item={item} key={item.id}/>)
		return (
			<div>
				<ul>
                    {items}
				</ul>
			</div>
		);
	}
}
