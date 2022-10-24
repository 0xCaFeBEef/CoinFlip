import React, { Component } from "react";
import Coin from "./Coin";

class CoinContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      side: "heads",
      headCount: 0,
      tailCount: 0
    };
    this.flip = this.flip.bind(this);
    this.getSide = this.getSide.bind(this);
  }
  getSide = () => {
    let side = Math.floor(Math.random() * 2);
    side
      ? this.setState((cur) => ({
          headCount: (cur.headCount += 1),
          side: "heads"
        }))
      : this.setState((cur) => ({
          tailCount: (cur.tailCount += 1),
          side: ""
        }));
    return side;
  };
  flip = () => {
    this.getSide();
  };
  render() {
    //let side = Math.floor(Math.random() * 2);
    return (
      <div>
        <Coin side={this.state.side && "heads"} />
        <button onClick={this.flip}>Flip it!</button>
        <h3>
          Out of {this.state.headCount + this.state.tailCount} flips, there have
          been {this.state.headCount} heads and {this.state.tailCount} tails.
        </h3>
      </div>
    );
  }
}

export default CoinContainer;
