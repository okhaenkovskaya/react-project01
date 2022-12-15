import { useParams } from 'react-router-dom';
import {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";

import Loader from "../../components/Loader";
import PostComment from "../../components/PostComments";

const Container = styled.div`
    margin: 0 auto;
    max-width: 1250px;
    padding: 50px 30px;
    font-size: 28px;
    line-height: 42px;
    color:#fff;
    font-weight: 300;
`;

const Intro = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin: 0 0 30px;
    
    img {
      max-height: 200px;
      width: auto;
      margin: 0 30px 0 0;
    }
`;

const PostPage = () => {
  const { postId } = useParams();
  const [beer, setBeer] = useState({});
  const [newBeerLoading, setNewBeerLoading] = useState(true);

  useEffect(() => {
    onRequestbeer();
  }, [])


  const onRequestbeer = () => {
    axios.get(`https://api.punkapi.com/v2/beers/${postId}`)
    .then(res => {
      setBeer(res.data[0]);
      setNewBeerLoading(false)
    })
  }

  const {name, description, image_url} = beer;

  return (
    <>
        {newBeerLoading && <Loader /> }

        <Container>
          <Intro>
            <img src={image_url} alt={name} />
            <h1>{name}</h1>
          </Intro>

          {description}

          <PostComment />
        </Container>
    </>
  );
};

export default PostPage;
