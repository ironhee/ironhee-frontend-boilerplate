import React, { findDOMNode, Component, PropTypes } from 'react';

export default class AddTodo extends Component {
  handleClick() {
    const node = findDOMNode(this.refs.input);
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = '';
  }

  render() {
    return (
      <div className="row">
        <div className="large-12 columns">
          <div className="row collapse">
            <div className="small-10 columns">
              <input
                type="text"
                ref="input"
                placeholder="Add Todo"
              />
            </div>
            <div className="small-2 columns">
              <button
                className="button postfix"
                onClick={e => this.handleClick(e)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired,
};
