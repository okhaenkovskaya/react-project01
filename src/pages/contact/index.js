import styled from "styled-components";

import {fullImageData, pageData} from "../../data/ContactData";
import FullWidthImageWithTitle from "../../components/FullWidthImageWithTitle";


const Container = styled.div`
  margin:0 auto;

`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 300;
  font-size: 72px;
  line-height: 90px;
  color: #FFFFFF;
`;

const Contact = () => {
  return (
    <>
      <FullWidthImageWithTitle fullImageData={fullImageData} title={pageData.title} />
      <Container>
        <Title>Contact</Title>
      </Container>
    </>
  );
};

export default Contact;
