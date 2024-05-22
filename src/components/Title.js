import { Component } from "react";

const style = {
  titulo: {
    marginBotton: "30px",
  },
};

class Title extends Component {
  render() {
    return <h1 style={style.titulo}>Tienda</h1>;
  }
}

export default Title;
