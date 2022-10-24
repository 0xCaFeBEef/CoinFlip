import React, { Component } from "react";
import "./Coin.css";
class Coin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let tailsImage =
      "https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg";
    let headsImage =
      "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg";

    return (
      <div>
        <img
          className="Coin-image"
          src={this.props.side === "heads" ? headsImage : tailsImage}
          alt={this.props.side}
        ></img>
      </div>
    );
  }
}

export default Coin;
