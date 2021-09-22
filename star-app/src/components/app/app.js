import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";

import PeoplePage from "../peple-page/people-page";

import "./app.css";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-services";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    selectedPerson: 5,
    hasError: false,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  componentDidCatch() {
    console.log("Component did Catch");
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="container">
        <Header />
        <RandomPlanet />

        <PeoplePage />

      </div>
    );
  }
}
