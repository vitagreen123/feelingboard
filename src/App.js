import React, { Component } from 'react';
import Form from './components/Form';
import WritingFormItem from './components/WritingFormItem'
import './components/WritingFormTemplate.css';


let id = 5

class App extends Component {
  state = {
    editId: undefined,
    writings: [
      {id : 2, name: 'John', memo: 'test', feeling: 'SOSO', checked: true},
      {id : 3, name: 'Jack', memo: 'hello', feeling: 'GOOD', checked: false},
      {id : 4, name: 'Jim', memo: 'world', feeling: 'GREAT', checked: true},
    ]
  }

  handleCreate = ({ name, memo, feeling}) => {
    const newItem = {
      id: id++,
      name: name,
      memo: memo,
      feeling: feeling,
      checked: false
    }
    
    this.setState(state=> ({
        writings: [...state.writings, newItem]
      })
    )
  }

  handleToggle = (id) => {
    const { writings } = this.state;

    const index = writings.findIndex(w => w.id === id);
    const selected = writings[index];

    const nextWritings = [...writings];

    nextWritings[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    this.setState({
      todos: nextWritings
    });
  }

  updateListItem = (id, {name, memo, feeling}) => {
    const newList = this.state.writings.slice()
    const item = newList.find(item=>item.id===id)
    item.name = name
    item.memo = memo
    item.feeling = feeling

    this.setState({writings: newList, editId: undefined})
  }

  handleRemove = (id) => {
    this.setState({
      writings: this.state.writings.filter(w => w.id !== id)
    })
  }


  render() {
    const {writings, editId} = this.state

    return (
      <main className="writing-form-template">
        <div className="title">
          작성 폼
        </div>
        <section className="form-wrapper">
          <Form
            onSubmit={this.handleCreate}
          />
        </section>
        <section className="writings-wrapper">
          {writings.map((data) => (
            <WritingFormItem
              key={data.id}
              data={data}
              edit={data.id === editId}
              onEditClick={(id)=> this.setState({editId: id})}
              onEditSave={this.updateListItem}
              onEditCancel={() => this.setState({editId: null})}
              onRemove={()=>this.handleRemove(data.id)}
            />
          ))}
        </section>
      </main>
    );
  }
}

export default App;
