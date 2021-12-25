import React, { Component } from "react";

import "./Update.css";

class Update extends Component {
  constructor(props) {
    super(props);
    const { question, answer } = this.props;
    this.state = { question, answer };
  }

  handleUpdate = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.handleUpdate(this.state);
  };

  render() {
    return (
      <form action="" ref={this.formRef} className="Update">
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
        <button type="submit" onClick={this.handleUpdate}>
          Update
        </button>
        <button onClick={this.props.handleCancel}>Cancel</button>
      </form>
    );
  }
}
export default Update;
