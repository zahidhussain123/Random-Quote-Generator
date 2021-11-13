import axios from "axios";
import React from "react";
import "./App.css";
class App extends React.Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="main">{this.state.advice}</h1>
          <button className="btn" onClick={this.fetchData}>GIVE ADVICE</button>
        </div>
      </div>
    );
  }
}

export default App;
