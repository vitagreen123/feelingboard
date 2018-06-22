import React from 'react';
import './Form.css';
import Radio from './components/Radio';

class Form extends React.Component {
  state = {
    name: '',
    memo: '',
    feeling: ''
  }

  handleChange = (e) => {
    if(["name", "memo", "feeling"].includes(e.target.name)){
      this.setState({[e.target.name]: e.target.value})
    }
  }

  handleCreate = () => {
    const { name, memo, feeling } = this.state;
    
    // validation

    this.props.onSubmit({name, memo, feeling})

    this.setState({
      name: '',
      memo: '',
      feeling: ''
    })
  }

  handleEnter = (e) => {
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }

  handleUpdate = () => {
    const { name, memo, feeling } = this.state;

  }

  render() {
    const {name, memo, feeling} = this.state

    return (
      <div className="form">
        <div> 이름 <input type='text' name="name" value={name} onChange={this.handleChange} onKeyPress={this.handleEnter}/> 
        <br />
        메모 <input name='memo'  value={memo} onChange={this.handleChange} onKeyPress={this.handleEnter}/> <br /> 
        기분 <input name='feeling' value={feeling} onChange={this.handleChange} onKeyPress={this.handleEnter}/> 
        <Radio />




        </div>
      
        <div className="create-button" onClick={this.handleCreate}>
          추가
        </div>
      </div>
    );
  }
}


export default Form;