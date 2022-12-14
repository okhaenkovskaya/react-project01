import { useParams } from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from "axios";
import PostsList from "../../components/PostsList";
import PageHeader from "../../components/PageHeader";
import styled from "styled-components";

const Container = styled.div`
    margin: 0 auto;
    max-width: 1250px;
    padding: 0 30px;
`;

const ArchivePage = () => {
  const { filter, param } = useParams();
  const filterParamReady = param.replace('-', ' ')

  const BASE_URL = 'https://api.punkapi.com/v2/beers';
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [newBeersLoading, setNewBeersLoading] = useState(false);

  useEffect(() => {
    onLoadPage(1);
  }, [param])

  const onLoadPage = (page) => {
    axios.get(BASE_URL, {
      params: {
        page: page,
        per_page: 30,
        [filter]: filterParamReady
      }
    })
    .then(res => {
      setBeers( [...res.data]);
      setPage( (page) => page + 1);
      setNewBeersLoading(false);
      res.data.length < 30 ? setIsCompleted(true) : setIsCompleted(false)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const onRequestBeers = (page) => {
    axios.get(BASE_URL, {
      params: {
        page: page,
        per_page: 30,
        [filter]: filterParamReady
      }
    })
    .then(res => {
      setBeers( [...beers, ...res.data]);
      setPage( (page) => page + 1);
      setNewBeersLoading(false);
      res.data.length < 30 ? setIsCompleted(true) : setIsCompleted(false)
    })
    .catch((error) => {
      console.log(error)
    })
  }


  return (
    <Container>
      <PageHeader>Archive {filter}: {filterParamReady}</PageHeader>
      {beers.length > 0 && <PostsList beers={beers}
                                      page={page}
                                      newBeersLoading={newBeersLoading}
                                      isCompleted={isCompleted}
                                      onRequestBeers={onRequestBeers}
                                      setNewBeersLoading={setNewBeersLoading} /> }
    </Container>
  );
};

export default ArchivePage;
