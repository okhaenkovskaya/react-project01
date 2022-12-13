import {useState, useEffect} from 'react';
import axios from 'axios';
import styled from "styled-components";
import {fullImageData} from '../../data/HomeData';
import FullWidthImage from '../../components/FullWidthImage';
import FeaturedPost from "../../components/FeaturedPost";
import PostsList from "../../components/PostsList";
import FilterBar from "../../components/FilterBar";
import NotFound from "../../components/NotFound";

const Container = styled.div`
    margin: 0 auto;
    max-width: 1250px;
    padding: 0 30px;
`;

const HomePage = () => {
  const BASE_URL = 'https://api.punkapi.com/v2/beers';
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [newComicsLoading, setNewComicsLoading] = useState(false);

  useEffect(() => {
    onRequestBeers(page);
  }, [])

  const onFilter = (filterObj) => {
    axios.get(BASE_URL, {
      params: filterObj
    })
    .then(res => {
      setBeers( [...res.data]);
      setNewComicsLoading(false)
      res.data.length < 6 ? setIsCompleted(true) : setIsCompleted(false)
    })
    .catch((error) => {
      console.log(error)
    })
  }


  const onSearchBeer = (searchParam='') => {
    axios.get(BASE_URL, {
      params: {page: 1, per_page: 6, beer_name: searchParam}
    })
    .then(res => {
      setBeers( [...res.data]);
      setNewComicsLoading(false)
      res.data.length < 6 ? setIsCompleted(true) : setIsCompleted(false)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const onRequestBeers = (page) => {
    axios.get(BASE_URL, {
      params: {page: page, per_page: 6}
    })
    .then(res => {
      setBeers( [...beers, ...res.data]);
      setPage( (page) => page + 1);
      setNewComicsLoading(false);
      res.data.length < 6 ? setIsCompleted(true) : setIsCompleted(false)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <>
      <FullWidthImage fullImageData={fullImageData} />

      <Container>
        <FilterBar onSearchBeer={onSearchBeer} onFilter={onFilter} />

        {beers.length === 0 && <NotFound /> }

        {beers.length > 0 && <FeaturedPost beer={beers[0]} /> }

        {beers.length > 0 && <PostsList beers={beers}
                                        page={page}
                                        newComicsLoading={newComicsLoading}
                                        isCompleted={isCompleted}
                                        onRequestBeers={onRequestBeers}
                                        setNewComicsLoading={setNewComicsLoading} /> }
      </Container>
    </>
  );
};

export default HomePage;
