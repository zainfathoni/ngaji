import React from 'react';
import { connect } from 'react-redux';
let nextItemId = 0;

let AddItem = ({ dispatch }) => {
  let activity, target, unit;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!activity.value.trim()) {
          return;
        }
        dispatch({
          type: 'ADD_ITEM',
          id: nextItemId++,
          activity: activity.value,
          target: target.value,
          unit: unit.value
        });
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
      <button type="submit">
        Add Item
      </button>
    </form>
  )
}

AddItem = connect(
  state => {
    return {};
  },
  dispatch => {
    return { dispatch };
  }
)(AddItem);

export default AddItem;