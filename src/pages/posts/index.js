import styled from "styled-components";
import {useState} from 'react';

import { ReactComponent as IconNewPosts } from '../../assets/icons/new_post.svg';
import {PostsData} from '../../data/PostsData';
import DashboardPosts from "../../components/DashboardPosts";
import DashboardFormPopup from "../../components/DashboardPosts/DashboardFormPopup";
import DashboardFormEditPopup from "../../components/DashboardPosts/DashboardFormEditPopup";
import DashboardPostsHead from "../../components/DashboardPostsHead";


const Head = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 20px;
`;

const Title = styled.h2`
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: -0.02em;
    color: #C1C6DB;
    margin:0;
`;


const AddNewButton = styled.button`
    width: 48px;
    height: 48px;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    
    padding: 0;
    margin: 0;
    border: 0;
    position: relative;
    
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
`;

const Posts = () => {
  const [posts, setPosts] = useState(PostsData);
  const [postId, setPostId] = useState(posts.length);

  const emptyPost = {
    id: postId,
    title: '',
    author: '',
    status: '',
    data: '',
    body: ''
  }

  let editedPost = {
    id: '',
    title: '',
    author: '',
    status: '',
    data: '',
    body: ''
  }

  const [newPost, setNewPost] = useState(emptyPost);
  const [showNewPopup, setShowNewPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editPostData, setEditPostData] = useState(editedPost);



  return (
    <div>
      <Head>
      <Title>Posts</Title>
        <AddNewButton onClick={() => {
                  setShowNewPopup(true)
                  setPostId((postId) => postId + 1)
                }}
                type="button">
          <IconNewPosts />
        </AddNewButton>
      </Head>

      { posts.length > 0 && <DashboardPostsHead /> }

      { posts.length > 0 && <DashboardPosts posts={posts}
                                            setEditPostData={setEditPostData}
                                            setShowEditPopup={setShowEditPopup}
                                            setPosts={setPosts} /> }


      {showNewPopup ? <DashboardFormPopup setShowNewPopup={setShowNewPopup}
                                          setPosts={setPosts}
                                          setNewPost={setNewPost}
                                          posts={posts}
                                          setPosts={setPosts}
                                          setNewPost={setNewPost}
                                          newPost={newPost}
                                          emptyPost={emptyPost}
      /> : null}


      {showEditPopup ? <DashboardFormEditPopup editPostData={editPostData}
                                               setPosts={setPosts}
                                               posts={posts}
                                               setShowEditPopup={setShowEditPopup}
                                               setEditPostData={setEditPostData}
      /> : null}


    </div>
  );
};

export default Posts;
