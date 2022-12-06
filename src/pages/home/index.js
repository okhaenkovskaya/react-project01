import styled from "styled-components";
import FullWidthImage from '../../components/FullWidthImage';
import FeaturedPost from "../../components/FeaturedPost";
import {fullImageData, potsData} from '../../data/HomeData';
import PostsList from "../../components/PostsList";
import FilterBar from "../../components/FilterBar";

const Container = styled.div`
    margin: 0 auto;
    max-width: 1250px;
    padding: 0 30px;
`;

const HomePage = () => {
  const featuredPostData = potsData.filter(post => post.featuredPost);
  const postsData = potsData.filter(post => !post.featuredPost);

  return (
    <>
      <FullWidthImage fullImageData={fullImageData} />
      <Container>
        <FilterBar potsData={potsData} />
        <FeaturedPost featuredPostData={featuredPostData[0]} />
        <PostsList postsData={postsData}/>
      </Container>
    </>
  );
};

export default HomePage;
