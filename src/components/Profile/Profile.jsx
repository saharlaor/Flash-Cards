import React, { Component } from "react";

import Card from "../Card/Card";
import Create from "../Create/Create";

import "./Profile.css";

export class Profile extends Component {
  state = { cards: [] };

  generateCards = () => {
    return this.state.cards.map(({ card }, i) => {
      return <Card question={card.question} answer={card.answer} key={i} />;
    });
  };

  addCard = (card) => {
    this.setState((state) => {
      return { cards: [...state.cards, card] };
    });
  };

  render() {
    const cards = this.generateCards(this.state.cards);
    return (
      <div className="Profile">
        <h2>Welcome</h2>
        {cards}
        <Create addCard={this.addCard} />
      </div>
    );
  }
}

export default Profile;
