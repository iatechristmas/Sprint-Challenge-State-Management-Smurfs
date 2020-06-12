import styled from "styled-components";

export const ButtonContainer = styled.span`
  @import url("https://fonts.googleapis.com/css?family=Rubik:700&display=swap");

  margin: 2%;

  button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    font-size: inherit;
    font-family: "Rubik", sans-serif;
    &.learn-more {
      font-weight: 600;
      color: $text;
      text-transform: uppercase;
      padding: 1.25em 2em;
      background: #b1ccf8;
      border: 2px solid #005ef8;
      border-radius: 0.75em;
      transform-style: preserve-3d;
      transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
        background 150ms cubic-bezier(0, 0, 0.58, 1);
      &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #005ef8;
        border-radius: inherit;
        box-shadow: 0 0 0 2px #005ef8, 0 0.625em 0 0 #c2d4f1;
        transform: translate3d(0, 0.75em, -1em);
        transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
          box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
      }
      &:hover {
        background: #7aa9f6;
        transform: translate(0, 0.25em);
        &::before {
          box-shadow: 0 0 0 2px #005ef8, 0 0.5em 0 0 #c2d4f1;
          transform: translate3d(0, 0.5em, -1em);
        }
      }
      &:active {
        background: #7aa9f6;
        transform: translate(0em, 0.75em);
        &::before {
          box-shadow: 0 0 0 2px #005ef8, 0 0 #c2d4f1;
          transform: translate3d(0, 0, -1em);
        }
      }
    }
  }
`;
