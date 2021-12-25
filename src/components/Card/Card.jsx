import React, { Component } from "react";

import Update from "../Update/Update";

import "./Card.css";

class Card extends Component {
  state = { editMode: false };

  handleUpdate = (newDetails) => {
    this.props.editHandler(this.props.id, newDetails);
    this.handleEditVis();
  };

  handleEditVis = () => {
    this.setState({ editMode: !this.state.editMode });
  };

  render() {
    return (
      <div className="Card">
        {this.state.editMode ? (
          <Update
            question={this.props.question}
            answer={this.props.answer}
            handleUpdate={this.handleUpdate}
            handleCancel={this.handleEditVis}
          />
        ) : (
          <>
            <h3>Question</h3>
            <p>{this.props.question}</p>
            <h3>Answer</h3>
            <p>{this.props.answer}</p>
            <button onClick={() => this.props.deleteHandler(this.props.id)}>
              Delete
            </button>
            <button onClick={this.handleEditVis}>Edit</button>
          </>
        )}
      </div>
    );
  }
}

export default Card;
