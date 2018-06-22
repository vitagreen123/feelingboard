import React, { Component } from 'react';
import Form from './components/Form';
import WritingFormItemList from './components/WritingFormItemList';
import './components/WritingFormTemplate.css';


let id = 1

class App extends Component {
  state = {
    writings: [
      {id : 0, name: ' 정병권', memo: ' 메모', 기분: ' 기분 좋음', checked: false }
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

  handleRemove = (id) => {
    this.setState({
      writings: this.state.writings.filter(w => w.id !== id)
    })
  }


  render() {
    const {writings} = this.state

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
          <WritingFormItemList 
            writings={writings} 
            onToggle={this.handleToggle} 
            onRemove={this.handleRemove} 
          />
        </section>
      </main>
    );
  }
}

export default App;
