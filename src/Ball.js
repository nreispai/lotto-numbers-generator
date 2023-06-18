import React from "react";
import "./global.css";

class Ball extends React.Component {
  render() {
    return (
      <div className="bg-slate-500 p-5 w-20 h-20 border rounded-full flex items-center justify-center">
        <p className="text-white text-2xl">{this.props.num}</p>
      </div>
    );
  }
}

export default Ball;
