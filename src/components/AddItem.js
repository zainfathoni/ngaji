import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';
import { Button } from 'semantic-ui-react';

let AddItem = ({ dispatch }) => {
  let activity, target, unit;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!activity.value.trim()) {
          return;
        }
        dispatch(
          addItem(
            activity.value,
            target.value,
            unit.value
          )
        );
        activity.value = "";
        target.value = "";
        unit.value = "";
      }}
    >
      <input
        type="text"
        placeholder="Activity"
        ref={node => {activity = node}}
      />
      <input
        type="number"
        placeholder="Target"
        ref={node => {target = node}}
      />
      <input
        type="text"
        placeholder="Unit"
        ref={node => {unit = node}}
      />
      <Button type="submit">
        Add Item
      </Button>
    </form>
  )
}

AddItem = connect()(AddItem);

export default AddItem;