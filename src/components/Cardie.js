import React from "react";
import Card from "react-bootstrap/Card";

export default function Cardie(props) {
  let v = props.info;
  // console.log(v);
  return (
    <div>
      <Card style={{
        backgroundColor: "rgb(194 237 198)",
        borderRadius: "10px",
        padding: "20px",
        margin: "2% 5%"
      }}>
        <Card.Body className="d-flex" style={{ justifyContent: "space-around"}}>
          <Card.Text><h6>Username</h6> {v.username}</Card.Text>
          <Card.Text><h6>Name</h6> {v.name}</Card.Text>
        </Card.Body>
        <Card.Body className="d-flex" style={{ justifyContent: "space-around"}}>
          <Card.Text><h6>Address</h6> {v.address.street}, {v.address.suite}, {v.address.city}</Card.Text>
          <Card.Text><h6>Phone</h6> {v.phone}</Card.Text>
        </Card.Body>
        <Card.Body className="d-flex" style={{ justifyContent: "space-around"}}>
          <Card.Text><h6>Website</h6> {v.website}</Card.Text>
          <Card.Text><h6>Email</h6> {v.email}</Card.Text>
        </Card.Body>
        <Card.Body className="d-flex" style={{ justifyContent: "space-around"}}>
          <Card.Text><h6>Company Name</h6> {v.company.name}</Card.Text>
          <Card.Text><h6>Catch Phrase</h6> {v.company.catchPhrase}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
