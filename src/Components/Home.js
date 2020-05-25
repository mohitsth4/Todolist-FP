import React, { Component } from "react";
import Todoinput from './Todoinput';
import Todolist from './Todolist';
import { v4 as uuidv4 } from 'uuid';

class Home extends Component {
	state={
		items:[],
		id:uuidv4(),
		item:'',
		editItem:false
	}

	handleChange = (e) => {
		this.setState({
			item:e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		if (this.state.item && this.state.item.trim()) {
			const newItem = {
				id:this.state.id,
				title:this.state.item
			}
				const updatedItems = [...this.state.items, newItem];
				this.setState({
					items:updatedItems,
					item:'',
					id:uuidv4(),
					editItem:false
				});

		}

	};

	clearList = () => {
		this.setState({
			items:[]
		});
	};

handelDelete = (id) => {
	const filteredItems = this.state.items.filter(item => item.id !== id)
	this.setState({
		items:filteredItems
	});
};

handelEdit = (id) => {
	const filteredItems = this.state.items.filter(item => item.id !== id);

	const selectedItem = this.state.items.find(item => item.id === id)

	this.setState({
		items:filteredItems,
		item: selectedItem.title.trim(),
		editItem:false,
		id:id
	});
}

componentWillMount() {
    let items = localStorage.getItem('items')
    if (items) {
      this.setState({
        items: JSON.parse(localStorage.getItem('items'))
      })
    }
  }
  componentDidUpdate() {
    localStorage.setItem('items', JSON.stringify(this.state.items))
  };


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center my-3">
            <h2>ToDo List Project</h2>
          </div>
					<Todoinput 
						item={this.state.item} 
						handleChange={this.handleChange} 
						handleSubmit={this.handleSubmit} 
						editItem={this.state.editItem}
					/>
        </div>
				<Todolist 
					items={this.state.items} 
					clearList={this.clearList} 
					handelDelete={this.handelDelete} 
					handelEdit={this.handelEdit} 
				/>
      </div>
    );
  }
}

export default Home;
