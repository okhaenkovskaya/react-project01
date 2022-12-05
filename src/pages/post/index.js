import { useParams } from 'react-router-dom';
import {potsData} from '../../services/HomeData';
import styled from "styled-components";
import FullWidthImage from "../../components/FullWidthImage";

const Container = styled.div`
    margin: 0 auto;
    max-width: 1250px;
    padding: 0 30px;
`;

const PostPage = () => {
  const { postId } = useParams();
  const post = potsData.filter(post => post.id === postId);
  const {title, text, image} = post[0];

  return (
    <Container>
        <FullWidthImage fullImageData={image} />
        <h1>{title}</h1>
      {text}
    </Container>
  );
};

export default PostPage;
