import React from 'react';
import RadioGroup from './RadioGroup'
import {feelingDefault, feelingRadios} from '../feeling'
import './Form.css';



class Form extends React.Component {
  state = {
    name: '',
    memo: '',
    feeling: feelingDefault
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
      feeling: feelingDefault
    })
  }

  handleEnter = (e) => {
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }
  
  render() {
    const {name, memo, feeling} = this.state

    return (
      <div className="form">
        <div> 
          <div>
            이름 <input type='text' name="name" value={name} onChange={this.handleChange} onKeyPress={this.handleEnter}/> 
          </div>
          <div>
            메모 <input name='memo'  value={memo} onChange={this.handleChange} onKeyPress={this.handleEnter}/> <br /> 
          </div>
          <div>
            기분 <RadioGroup radios={feelingRadios} value={feeling} onChange={(key) => this.setState({feeling: key})} />
          </div>
        </div>
      
        <div className="create-button" onClick={this.handleCreate}>
          추가
        </div>
      </div>
    );
  }
}


export default Form;