import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="Card">
      <h3>Question</h3>
      <p>{props.question}</p>
      <h3>Answer</h3>
      <p>{props.answer}</p>
      <button onClick={props.handleDelete}>Delete</button>
      <button onClick={props.handleEdit}>Edit</button>
    </div>
  );
}

export default Card;
