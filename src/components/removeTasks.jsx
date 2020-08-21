import React from 'react';

handleSubmit = (submitEvent) => {
  submitEvent.preventDefault();
};

const RemoveTask = () => {
  return (
    <form onSubmit={this.handleSubmit}>
      <button>Remove checked tasks</button>
    </form>
  );
};
export default RemoveTask;
