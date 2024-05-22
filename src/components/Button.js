import { Component } from "react";

const style = {
  button: {
    padding: "10px",
    display: "flex",
    background: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

class Button extends Component {
  render() {
    return <button style={style.button} {...this.props}></button>;
  }
}

export default Button;
