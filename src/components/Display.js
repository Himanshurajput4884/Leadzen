import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardie from "./Cardie";

export default function Display(props) {
  const [name, setname] = useState(false);
  const details = (name) ? "Hide Details" : "Show Details";
  if (props.loading) {
    return <h2>Loading...</h2>;
  }
  let data = props.item;
  console.log(data);
  return (
    <div
      style={{
        backgroundColor: "rgb(209 123 123)",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      {data.map((v, i) => (
        <div>
        <Card
          className="align-items justify-content-space-between"
          key={i}
        >
          <Card.Body className="d-flex" style={{ justifyContent: "space-between"}}>
            <Card.Title>{v.username}</Card.Title>
            <Card.Text>
              <h6>Contact</h6>  
              {v.name}
            </Card.Text>
            <Card.Text><h6>City</h6> {v.address.city}</Card.Text>
            <Button variant="primary" onClick={() => {
              setname(!name)
            }}>{details}</Button>
          </Card.Body>
            {name && <Cardie info={v}/> }
        </Card>
        </div>
      ))}
    </div>
  );
}
