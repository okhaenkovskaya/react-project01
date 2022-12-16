import styled from "styled-components";

import {fullImageData, pageData} from "../../data/ContactData";
import FullWidthImageWithTitle from "../../components/FullWidthImageWithTitle";
import ContactForm from "../../components/ContactForm";

const Container = styled.div`
    max-width: 1168px;
    margin: 0 auto;
    padding: 0 30px;
`;



const Contact = () => {
  return (
    <>
      <FullWidthImageWithTitle fullImageData={fullImageData} title={pageData.title} />
      <Container>
        <ContactForm />
      </Container>
    </>
  );
};

export default Contact;
