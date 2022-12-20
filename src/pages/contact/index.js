import styled from "styled-components";

import {fullImageData, pageData, socialNetworkData} from "../../data/ContactData";
import FullWidthImageWithTitle from "../../components/FullWidthImageWithTitle";
import ContactForm from "../../components/ContactForm";
import SocialNetwork from "../../components/SocialNetwork";

const Container = styled.div`
    max-width: 1168px;
    margin: 0 auto;
    padding: 0 30px;
`;


const Contact = () => {
  return (
    <div>
      <FullWidthImageWithTitle fullImageData={fullImageData} title={pageData.title} />
      <Container>
        <ContactForm />
        <SocialNetwork socialNetworkData={socialNetworkData} />
      </Container>
    </div>
  );
};

export default Contact;
