import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Vinit Sinha"
      img="https://upload.wikimedia.org/wikipedia/tr/thumb/3/30/NarutoUzumaki.jpg/300px-NarutoUzumaki.jpg"
      tel="+91 1234567890"
      email="vinit@mail.com"
    />
    <Card
      name="Vishal Sinha"
      img="https://community.custom-cursor.com/uploads/default/original/3X/a/4/a4ec3bdb0d1a3db93978c977b3e8d87158a8c440.jpeg"
      tel="+91 0123456789"
      email="vishal@mail.com"
    />
  </div>,
  document.getElementById("root")
);
