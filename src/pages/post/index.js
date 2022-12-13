import { useParams } from 'react-router-dom';
import styled from "styled-components";
import {useEffect, useState} from "react";
import axios from "axios";
import Loader from "../../components/Loader";

const Container = styled.div`
    margin: 0 auto;
    max-width: 1250px;
    padding: 0 30px;
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
        {newBeerLoading ? <Loader /> : <Container>
          <img src={image_url} alt={name} />
            <h1>{name}</h1>
            {description}
        </Container>}
    </>
  );
};

export default PostPage;
