import React, { useEffect } from "react";
import styled from "styled-components";

import { ButtonContainer } from "../styles/buttonStyle";

import { useSelector, useDispatch } from "react-redux";

import { removeSmurf } from "../actions/index";

const SmurfList = (props) => {
  const smurfs = useSelector((state) => state.smurfs);
  const dispatch = useDispatch();

  return (
    <ListContainer>
      {smurfs.length ? (
        <CardsContainer>
          {smurfs.map((item) => (
            <Card>
              <p>Name: {item.name}</p>
              <p>Age: {item.age}</p>
              <p>Height: {item.height}</p>
              <ButtonContainer>
                <button
                  className="learn-more"
                  onClick={() => dispatch(removeSmurf(item.id))}
                >
                  Remove
                </button>
              </ButtonContainer>
            </Card>
          ))}
        </CardsContainer>
      ) : (
        <p>You need to get some smurfs up in here</p>
      )}
    </ListContainer>
  );
};

export default SmurfList;

const Card = styled.div`
  margin: 2%;
  padding: 2%;
  background-color: lightblue;
  width: 20%;
  border-radius: 20px;
  box-shadow: 0 0 0 2px #005ef8, 0 0.625em 0 0 #c2d4f1;

  p {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: bold;
  }
`;

const CardsContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
`;

const ListContainer = styled.div`
  background-color: #7aa9f6;

  h4 {
    margin-top: 1%;
    padding: 2%;
    font-size: 2rem;
  }
`;
