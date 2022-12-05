import { ReactComponent as IconArrow } from '../../assets/icons/arrow.svg';
import styled from "styled-components";
import Button from "../../features/Button";
import View from "../../features/View";
import Comments from "../../features/Comments";

const Container = styled.div`
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  margin: 0 0 70px;
  display: flex;
  justify-content: space-between;
  background: #191A1D;
  border-radius: 28px;
  position: relative;
  overflow: hidden;
`;

const TextWrap = styled.div`
  width: 52%;
  padding: 84px 5%;
`;

const Image = styled.div`
  width: 48%;
  
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Title = styled.h2`
  font-size: 21px;
  line-height: 32px;
  font-weight: 700;
  margin: 0 0 20px;
  color: #fff;
`;

const Text = styled.div`
  margin: 0 0 20px;
`;

const Holder = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


const FeaturedPost = ({featuredPostData}) => {

  const {id, title, text, image, comments, view} = featuredPostData;

  return (
    <Container>
      <TextWrap>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Holder>
          <Button url={`/posts/${id}`}>
            Read more
            <IconArrow/>
          </Button>

          <div>
            <Comments>{comments}</Comments>
            <View>{view}</View>
          </div>
        </Holder>
      </TextWrap>
      <Image>
        <img src={image.src} alt={image.alt} />
      </Image>
    </Container>
  );
};

export default FeaturedPost;
