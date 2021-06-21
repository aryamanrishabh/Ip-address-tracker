import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import Head from "./Head";

const App = () => {
  return (
    <div>
      <Head />
      <Search />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
