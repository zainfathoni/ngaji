import React from 'react';

const AddItem = ({
  onAddClick
}) => {
  let activity, target, unit;

  return (
    <div>
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
      <button
        onClick={e => {
          e.preventDefault();
          if (!activity.value.trim()) {
            return;
          }
          onAddClick(
            activity.value,
            target.value,
            unit.value
          );
          activity.value = "";
          target.value = "";
          unit.value = "";
        }}>
        Add Item
      </button>
    </div>
  )
}

export default AddItem;