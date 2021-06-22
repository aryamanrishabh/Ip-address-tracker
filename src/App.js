import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import Head from "./Head";
import Location from "./Location";

const App = () => {
  return (
    <div>
      <Head />
      <Search />
      {/* <Location /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
