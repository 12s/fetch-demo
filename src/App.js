import React from "react";
import "./styles.css";

export default function App() {
  // const [data, setData] = React.useState({});

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://fetch-hiring.s3.amazonaws.com/hiring.json`
      );
      const stuff = (await response).json();
      console.log(stuff);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start!</h2>
    </div>
  );
}
