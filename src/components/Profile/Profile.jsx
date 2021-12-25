import React, { Component } from "react";

import Card from "../Card/Card";
import Create from "../Create/Create";

import "./Profile.css";

export class Profile extends Component {
  constructor(props) {
    super(props);
    const cards = localStorage.cards;
    this.state = { cards: cards ? JSON.parse(cards) : [] };
  }

  handleDelete = (id) => {
    return;
  };

  handleEdit = (id, obj) => {
    return;
  };

  generateCards = () => {
    return this.state.cards.map((card, i) => {
      return <Card question={card.question} answer={card.answer} key={i} />;
    });
  };

  addCard = (card) => {
    const cards = [...this.state.cards, card];
    localStorage.setItem("cards", JSON.stringify(cards));
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
