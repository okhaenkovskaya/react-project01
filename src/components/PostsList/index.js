import styled from "styled-components";
import Post from "./Post";

const PostsListContainer = styled.div`
  margin: 0 0 20px;
  display: flex;
  flex-wrap: wrap;
`;

const PostsList = ({postsData}) => {
  return (
    <PostsListContainer>
      {postsData.map(post => (<Post key={post.id} post={post}/>))}
    </PostsListContainer>
  );
};

export default PostsList;
