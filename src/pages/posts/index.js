import {useState} from 'react';

import { ReactComponent as IconNewPosts } from '../../assets/icons/new_post.svg';
import {PostsData} from '../../data/PostsData';
import DashboardPosts from "../../components/DashboardPosts";
import DashboardFormPopup from "../../components/DashboardPosts/DashboardFormPopup";
import DashboardFormEditPopup from "../../components/DashboardPosts/DashboardFormEditPopup";


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
      <h2>Posts</h2>
      <button onClick={() => {
                setShowNewPopup(true)
                setPostId((postId) => postId + 1)
              }}
              type="button">
        Add New Post
        <IconNewPosts />
      </button>

      <DashboardPosts posts={posts}
                      setEditPostData={setEditPostData}
                      setShowEditPopup={setShowEditPopup}
                      setPosts={setPosts}

      />



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
