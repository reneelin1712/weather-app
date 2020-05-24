import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";

const Search = ({ search }) => {
  const [city, setCity] = useState("");

  //useState is async, need to check the latest here
  useEffect(() => {
    console.log("Search message inside useEffect: ", city);
  }, [city]);

  const handleOnChange = (e) => {
    setCity(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    search(city);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Row>
        <Col>
          <Form.Group controlId="formGroupEmail">
            <Form.Control
              type="text"
              placeholder="Search City"
              value={city}
              onChange={handleOnChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Search;
