import React, { Component } from 'react';
import WritingFormItem from './WritingFormItem';

class WritingFormItemList extends Component {
  render() {
    const { writings, onToggle, onRemove } = this.props;
    const writingList = writings.map(
        ({id, name, memo, feeling, checked}) => (
            <WritingFormItem
                id = {id}
                name = {name}
                memo = {memo}
                feeling = {feeling}
                checked = {checked}
                onToggle = {onToggle}
                onRemove = {()=>onRemove(id)}
                key = {id}
            />
        )
    );

    return (
      <div>
          {writingList}
      </div>
    );
  }
}

export default WritingFormItemList;