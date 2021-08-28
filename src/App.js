import React, { Component } from "react";
// first, import connext from react-redux
import { connect } from "react-redux";
//Second, import the action
import { fetchSmurfs } from "./actions";

import AddForm from "./components/AddForm";
import SmurfList from "./components/SmurfList";
import Header from "./components/Header";

import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();

    // axios
    //   .get("http://localhost:3333/smurfs")
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log("Axios Error", err));
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList />
          <AddForm />
        </main>
      </div>
    );
  }
}

export default connect(null, { fetchSmurfs })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.
