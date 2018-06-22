import React, { Component } from 'react';
import './WritingFormItem.css';

class WritingFormItem extends Component {
  render() {
    const { name, memo, feeling, checked, id, onToggle, onRemove } = this.props;

    return (
      <div className="writing-form-item" onClick={() => onToggle(id)}>
        <div className="remove" onClick={(e) => {
          e.stopPropagation(); // onToggle 이 실행되지 않도록 함
          onRemove(id)}
        }>&times;</div>
        <div className={`writing-form-text ${checked && 'checked'}`}>
          <div>
          이름 : {name} <br />
          메모 : {memo} <br />
          기분 : {feeling} <br />
          </div>
          <div className="update-button" onClick={this.handleUpdate}>
          수정
        </div>
        </div>
        {
          checked && (<div className="check-mark">✓</div>)
        }
      </div>
    );
  }
}

export default WritingFormItem;