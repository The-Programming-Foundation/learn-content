import React from "react";
import styled from "styled-components";
import { useLocation } from "@reach/router";

const ToggleBannerStyled = styled.section`
  display: flex;
  width: 100%;
  border: 1px solid black;
  padding: 0.5em 5em;
  margin: 0 2em;
  align-items: center;
  justify-content: center;
  gap: 0.4em;
  border-radius: 25px;
  background-color: black;

  p {
    margin: 0;
    color: white;
  }

  button {
    background-color: white;
    color: black;
    padding: 0.2em 0.4em;
    border: none;
  }

  button:hover {
    color: white;
    background-color: #2f3032;
  }
`;

export default function ToggleBanner(props) {
  const { setShowTreeMenu, showTreeMenu } = props;
  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/" && (
        <ToggleBannerStyled>
          {showTreeMenu ? <p>Switch to </p> : <p>Switch to the new </p>}

          <button onClick={() => setShowTreeMenu(!showTreeMenu)}>
            {showTreeMenu ? "Slider View" : "Tree View"}
          </button>
        </ToggleBannerStyled>
      )}
    </>
  );
}
