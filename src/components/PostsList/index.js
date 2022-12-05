import React from 'react';
import styled from "styled-components";
import Post from "../Post";

const PostsListContainer = styled.div`
  margin: 0 0 20px;
  display: flex;
  flex-wrap: wrap;
`;

const PostsList = ({postsData}) => {

  return (
    <PostsListContainer>
      {postsData.map(post => <Post post={post}/>)}
    </PostsListContainer>
  );
};

export default PostsList;
