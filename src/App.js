import React from "react";
import Lotto from "./Lotto";
import "./global.css";

class App extends React.Component {
  render() {
    return (
      <div className="flex items-center justify-center mt-10">
        <Lotto />
      </div>
    );
  }
}

export default App;
