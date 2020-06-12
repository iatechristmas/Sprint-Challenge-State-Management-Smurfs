import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { useDispatch } from "react-redux";

import { getData, addSmurf } from "../actions/index";

import { ButtonContainer } from "../styles/buttonStyle";

const initialFormValues = {
  name: "",
  age: "",
  height: "",
};

const SmurfForm = (props) => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(initialFormValues);

  const onInputChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addSmurf(formValues));
    dispatch(getData());
    setFormValues(initialFormValues);
  };

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <FormContainer>
      <Form onSubmit={onSubmit}>
        <Container>
          <div className="form-container">
            <StyledInput>
              <input
                type="text"
                placeholder="Enter a Name"
                maxLength="30"
                name="name"
                value={formValues.name}
                onChange={onInputChange}
              />
            </StyledInput>
            <StyledInput>
              <input
                type="text"
                placeholder="Enter an Age"
                maxLength="30"
                name="age"
                value={formValues.age}
                onChange={onInputChange}
              />
            </StyledInput>
            <StyledInput>
              <input
                type="text"
                placeholder="Enter a Height"
                maxLength="30"
                name="height"
                value={formValues.height}
                onChange={onInputChange}
              />
            </StyledInput>
          </div>
          <ButtonContainer>
            <button className="learn-more">Add</button>
          </ButtonContainer>
        </Container>
      </Form>
    </FormContainer>
  );
};

export default SmurfForm;

const Form = styled.form`
  margin: auto;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  margin: 2%;
  padding: 2%;
  background-color: lightblue;
  width: 20%;
  border-radius: 20px;
  box-shadow: 0 0 0 2px #005ef8, 0 0.625em 0 0 #c2d4f1;

  div {
    padding: 2%;
  }

  p {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: bold;
  }
`;

const FormContainer = styled.div`
  margin: auto;
`;

const StyledInput = styled.div`
  margin: 1%;

  input {
    border-radius: 5px;
    line-height: 2rem;
    border-color: white;
    font-weight: bold;
    color: blue;
  }
`;
