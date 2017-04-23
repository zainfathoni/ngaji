import React, { Component } from 'react';

let nextItemId = 0;
class Ngaji extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Activity"
          ref={node => {this.activity = node}}
        />
        <input
          type="number"
          placeholder="Target"
          ref={node => {this.target = node}}
        />
        <input
          type="text"
          placeholder="Unit"
          ref={node => {this.unit = node}}
        />
        <button
          onClick={() => {
            this.props.store.dispatch({
              id: nextItemId++,
              type: 'ADD_ITEM',
              activity: this.activity.value,
              target: this.target.value,
              unit: this.unit.value,
            });
            this.activity.value = "";
            this.target.value = "";
            this.unit.value = "";
          }}
          >
          Add Item
        </button>
        <ul>
          {this.props.items.map(item =>
            <li key={item.id}>
              {item.activity} {item.target} {item.unit}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default Ngaji;