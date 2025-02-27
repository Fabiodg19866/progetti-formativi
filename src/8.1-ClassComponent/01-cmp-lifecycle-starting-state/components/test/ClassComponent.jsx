import { Component } from "react";

import "./ClassComponent.css";

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Prev Button",
      name: "react",
        description: "tech frontend",
        max: 0,
        min: 20,
        click:null
    };
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", color: "red", fontWeight: "bolder" }}>
          {this.state.name}
        </h1>
        <h3
          style={{ textAlign: "center", color: "blue", fontWeight: "lighter" }}
        >
          {this.state.description}
        </h3>
        <button
          className="user"
                onClick={() => this.setState({ value: "Click Button" })}
                
        >
          {this.state.value}
            </button>

            <button className="max" onClick={() => this.setState({ max: this.state.max + 1 })} >Max
            <h2>{this.state.max}</h2> 
            </button>
            <button className="min" onClick={() => this.setState({ min: this.state.min - 1 })} > Min
            <h2>{this.state.min }</h2>
               </button>
           
           
      </div>
    );
  }
}
export default Square;
