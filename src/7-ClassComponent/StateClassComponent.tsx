import React from "react";
class StateClassComponent extends React.Component<
  { message: string },
  { count: number }
> {
  state = { count: 0 };
  render() {
    return (
      <div onClick={() => this.increment(1)}>
        {this.props.message} {this.state.count}
      </div>
    );
  }
  increment = (amt: number) => {
    this.setState((state) => ({
      count: state.count + amt,
    }));
  };
}
export default StateClassComponent;
