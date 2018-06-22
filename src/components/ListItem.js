import React, { Component } from 'react';
import RadioGroup from './RadioGroup'
import {feelingRadios} from '../feeling'
import './WritingFormItem.css';


class ItemEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.data.name,
      memo: this.props.data.memo,
      feeling: this.props.data.feeling,
    }
  }

  handleSave = () => {
    this.props.onEditSave(this.state)
  }

  handleChange = (e) => {
    if(["name", "memo", "feeling"].includes(e.target.name)){
      this.setState({[e.target.name]: e.target.value})
    }
  }

  render() {
    const {onEditCancel} = this.props
    const {name, memo, feeling} = this.state

    return (
      <div>
        <div>
          이름 : <input name='name' value={name} onChange={this.handleChange} /> <br />
          메모 :  <input name='memo' value={memo} onChange={this.handleChange} /> <br />
          기분 : <RadioGroup radios={feelingRadios} value={feeling} onChange={(key) => this.setState({feeling: key})} /> <br />
        </div>
        <div className="update-button" onClick={onEditCancel}>취소</div>
        <div className="update-button" onClick={this.handleSave}>저장</div>
      </div>
    );
  }
}

class ListItem extends Component {
  render() {
    const { 
      data: {name, memo, feeling, checked, id}, 
      edit, onEditClick, onEditCancel, onEditSave, onRemove
    } = this.props;

    return (
      <div className="writing-form-item">
        {edit ? (
          <ItemEdit
            data={{name, memo, feeling}}
            onEditCancel={onEditCancel}
            onEditSave={(data) => onEditSave(id, data)}
          />
        ):(
          <div className={`writing-form-text ${checked && 'checked'}`}>
            <div>
              이름 : {name} <br />
              메모 : {memo} <br />
              기분 : {feeling} <br />
            </div>
            <div className="update-button" onClick={()=>onEditClick(id)}>
              수정
            </div>
            <div className="update-button" onClick={onRemove}>
              삭제
            </div>
            <div>
              {checked && <div className="check-mark">✓</div>}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ListItem;