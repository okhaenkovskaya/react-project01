import {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import styled from "styled-components";
import FullWidthImage from '../../components/FullWidthImage';
import FeaturedPost from "../../components/FeaturedPost";
import {fullImageData, potsData} from '../../data/HomeData';
import PostsList from "../../components/PostsList";
import FilterBar from "../../components/FilterBar";
import Loader from '../../components/Loader';


const Container = styled.div`
    margin: 0 auto;
    max-width: 1250px;
    padding: 0 30px;
`;

const Button = styled.button`
    display: block;
    background: #5458F7;
    width: fit-content;
    padding: 7px 35px;
    margin: 0 auto;
    border: 0;
    border-radius: 40px;
    text-decoration: none;
    color: #fff;
    font-size: 12px;
    line-height: 1.5;
    font-weight: 600;
    
    &:hover {
      opacity: 0.7;
    }
`;

const HomePage = () => {

  const BASE_URL = 'https://api.punkapi.com/v2/beers';
  const [beer, setBeer] = useState(null);
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [newComicsLoading, setNewComicsLoading] = useState(false);

  useEffect(() => {
    onRequestBeer();
  }, [])

  useEffect(() => {
    onRequestBeers(1);
  }, [])


  const onRequestBeer = () => {
    axios.get(`${BASE_URL}/random`)
    .then(res => {
      const beerData = res.data;
      setBeer(beerData[0]);
    })
  }



  const onRequestBeers = (page) => {
    axios.get(BASE_URL, {
      params: {page: page, per_page: 6}
    })
    .then(res => {
      setBeers( [...beers, ...res.data]);
      setPage( (page) => page + 1);
      setIsCompleted(res.data.length > 0)
      setNewComicsLoading(false)

    })
    .catch((error) => {
      console.log(error)
    })
  }



  return (
    <>
      <FullWidthImage fullImageData={fullImageData} />

      <Container>

        <FilterBar potsData={potsData} />

        {beer ? <FeaturedPost beer={beer} /> : ''}

        {beers.length > 0 ? <PostsList postsData={beers}/> : ''}

        {newComicsLoading ? <Loader /> : ''}

        {beers.length > 0 ? <Button
          onClick={() => {
            onRequestBeers(page);
            setNewComicsLoading(true)
          }}>
          Load more
        </Button> : ''}
      </Container>
    </>
  );
};

export default HomePage;
