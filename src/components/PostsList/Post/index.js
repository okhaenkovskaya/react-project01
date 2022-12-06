import React from 'react';
import Button from "../../Link";
import {ReactComponent as IconArrow} from "../../../assets/icons/arrow.svg";
import Comments from "../../Comments";
import View from "../../View";
import styled from "styled-components";


const Container = styled.div`
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  margin: 0 38px 38px;
  width: calc(33.33% - 76px);
  background: #191A1D;
  border-radius: 28px;
  position: relative;
  overflow: hidden;
`;

const TextWrap = styled.div`
  padding: 20px 20px;
`;

const Image = styled.div`
  margin: 0;
  
  img {
    height: auto;
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


const Post = ({post}) => {
  const {id, title, text, image, comments, view} = post;

  let slicedText = text;
  if (text.length > 40) {
    slicedText = text.slice(0,59);
    slicedText += '...';
  }

  return (
    <Container>
      <Image>
        <img src={image.src} alt={image.alt} />
      </Image>
      <TextWrap>
        <Title>{title}</Title>
        <Text>{slicedText}</Text>
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
    </Container>
  );
};

export default Post;
