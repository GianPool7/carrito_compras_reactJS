import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetallesCarro from "./DetallesCarro";

const style = {
  carro: {
    border: "none",
    padding: "15px",
    background: "#359A2C",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "15px",
  },
  bubble: {
    position: "relative",
    left: 12,
    top: 20,
  },
};

class Carro extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props;
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);
    return (
      <div>
        <span style={style.bubble}>
          {cantidad !== 0 ? <BubbleAlert value={cantidad}></BubbleAlert> : null}
        </span>
        <button onClick={mostrarCarro} style={style.carro}>
          carro
        </button>
        {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
      </div>
    );
  }
}

export default Carro;
