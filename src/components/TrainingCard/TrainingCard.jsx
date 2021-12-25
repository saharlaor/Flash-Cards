import React, { Component } from "react";

import "./TrainingCard.css";

class TrainingCard extends Component {
  state = { answerMode: false };

  // handleUpdate = (newDetails) => {
  //   this.props.editHandler(this.props.id, newDetails);
  //   this.handleEditVis();
  // };

  handleAnswerVis = () => {
    this.setState({ answerMode: !this.state.answerMode });
  };

  render() {
    return (
      <div className="TrainingCard">
        {this.state.answerMode ? (
          <>
            <p>{this.props.question}</p>
            <button onClick={this.handleAnswerVis}>Reveal Answer</button>
          </>
        ) : (
          <>
            <p>{this.props.answer}</p>
            <button onClick={this.handleAnswerVis}>Show Question</button>
          </>
        )}
        <button onClick={this.props.incrementCard}>Next Card</button>
      </div>
    );
  }
}

export default TrainingCard;
