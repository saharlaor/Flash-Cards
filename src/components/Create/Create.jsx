import React, { Component, createRef } from "react";
import { v4 as uuid } from "uuid";

import "./Create.css";

export class Create extends Component {
  state = { question: "", answer: "" };
  formRef = createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(this.state).every((val) => val)) {
      this.props.addCard({ ...this.state, id: uuid() });
    }
    //TODO: Add error display when invalid
  };

  render() {
    return (
      <form action="" ref={this.formRef} className="Create">
        <label htmlFor="question">Question</label>
        <textarea
          name="question"
          id="question"
          cols="30"
          rows="10"
          value={this.state.question}
          onChange={(e) =>
            this.setState({ question: e.target.value })
          }></textarea>
        <br />
        <label htmlFor="answer">Answer</label>
        <textarea
          name="answer"
          id="answer"
          cols="30"
          rows="10"
          value={this.state.answer}
          onChange={(e) =>
            this.setState({ answer: e.target.value })
          }></textarea>
        <input type="submit" onClick={this.handleSubmit} value="Create" />
      </form>
    );
  }
}

export default Create;
