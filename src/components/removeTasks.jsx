import React from 'react';


class RemoveTask extends React.Component {


handleSubmit = (submitEvent) => {
  submitEvent.preventDefault();
  console.log("button pressed ====>")
};
  render = () => {
  return (
    <form onSubmit={this.handleSubmit}>
      <button>Remove checked tasks</button>
    </form>
  );
};
}
export default RemoveTask;
