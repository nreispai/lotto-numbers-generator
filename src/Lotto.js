import "./global.css";
import React from "react";
import Ball from "./Ball";

class Lotto extends React.Component {
  static defaultProps = {
    maxNum: 60,
  };

  constructor(props) {
    super(props);
    this.state = { nums: [0, 0, 0, 0, 0, 0] };
    this.genNums = this.genNums.bind(this);
  }

  genNums() {
    let newNums = this.state.nums.map((num) => {
      return Math.floor(Math.random() * this.props.maxNum) + 1;
    });
    console.log(newNums);
    this.setState({ nums: newNums });
  }

  render() {
    return (
      <div className="bg-white flex flex-col gap-10 items-center justify-center w-1/2 rounded-2xl p-10 shadow-2xl">
        <h1 className="text-4xl">Lottery Numbers Generator</h1>
        <div className="flex gap-5">
          {this.state.nums.map((i) => {
            return <Ball num={i} />;
          })}
        </div>
        <button
          className="bg-blue-600 text-white text-xl py-3 px-6 rounded-2xl hover:bg-blue-400"
          onClick={this.genNums}
        >
          Generate
        </button>
      </div>
    );
  }
}

export default Lotto;
