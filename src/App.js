import React, { Component } from 'react';
import Form from './components/Form';
import ListItem from './components/ListItem'
import service from './service'
import './components/WritingFormTemplate.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editId: undefined,
      items: [],
    }
    service.getList()
      .then(items=> this.setState({items: items}))
  }

  handleCreate = async ({name, memo, feeling}) => {
    await service.addItem({name, memo, feeling})
    this.setState({items: await service.getList()})
  }

  handleItem = async (id, {name, memo, feeling}) => {
    await service.editItem(id, {name, memo, feeling})
    this.setState({items: await service.getList(), editId: undefined})
  }

  handleRemove = async (id) => {
    await service.deleteItem(id)
    this.setState({items: await service.getList()})
  }


  render() {
    const {items, editId} = this.state

    return (
      <main className="writing-form-template">
        <div className="title">
          Feeling Logs
        </div>
        <section className="form-wrapper">
          <Form
            onSubmit={this.handleCreate}
          />
        </section>
        <section className="writing-wrapper">
          {items.map((data) => (
            <ListItem
              key={data.id}
              data={data}
              edit={data.id === editId}
              onEditClick={(id)=> this.setState({editId: id})}
              onEditSave={this.handleItem}
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
