import { Component } from "react";

const style = {
  layout: {
    backgroundColor: "#fff",
    color: "#0A283E",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  container: {
    width: "1200px",
  },
};

class Layout extends Component {
  render() {
    return (
      // este div contenido para centrar con un ancho de 1200px
      <div style={style.layout}>
        <div style={style.container}>{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
