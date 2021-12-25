import React from "react";
import TrainingCard from "../TrainingCard/TrainingCard";
import "./Training.css";

class Training extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: JSON.parse(localStorage.cards)
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value),
      index: 0,
    };
  }

  incrementIndex = () => {
    this.setState((prevState) => {
      return { index: prevState.index + 1 };
    });
  };

  render() {
    const card = this.state.cards[this.state.index];
    if (!card) return <>No cards left</>;
    return (
      <div className="Training">
        <TrainingCard
          question={card.question}
          answer={card.answer}
          incrementCard={this.incrementIndex}
        />
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue",
    });
  }
}

export default Training;
