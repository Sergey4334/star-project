import React, { Component } from "react";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-services";

import './people-page.css';

const Row = ({ left, right }) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">{ left }</div>
      <div className="col-md-6">{ right }</div>
    </div>
  );
};

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 5,
  };

  render() {

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderList={(item) => item.name}
      />
    );
    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );

    return (
      <div>
        <Row left={ itemList } right={personDetails} />
      </div>
    );
  };
};