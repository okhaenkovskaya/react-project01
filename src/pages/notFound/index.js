import styled from "styled-components";

import Button from "../../components/Link";
import {notFoundImageData} from "../../data/NotFoundData";


const NotFoundContainer = styled.div`
  background-image: url(${notFoundImageData.src});
  background-position: 50%;
  background-size: cover;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  height: 513px;
  
  > div {
    padding: 50px;
    text-align: center;
    opacity: 0.82;
  }
  
  a {
    margin: 10px auto;
    min-width: 171px;
  }
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 300;
  font-size: 72px;
  line-height: 90px;
  color: #FFFFFF;
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <div>
        <Title>404</Title>
        <Button url={'/'}>Go to Homepage</Button>
      </div>
    </NotFoundContainer>
  );
};

export default NotFound;
