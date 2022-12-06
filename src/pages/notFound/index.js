import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const NotFoundContainer = styled.div`
  padding: 50px;
  text-align: center;
  
  a {
    color: inherit;
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <h1>Page not find</h1>
      <Link to='/'>Go Home</Link>
    </NotFoundContainer>
  );
};

export default NotFound;
