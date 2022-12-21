import styled from "styled-components";
import {useState} from "react";

import {PostsData} from "../../../data/PostsData";

const Post = styled.div`
    display: flex;
    flex-wrap: nowrap;
    background: #FFFFFF;
    border: 1px solid #E6E7E9;
    border-radius: 8px;
    margin: 0 0 20px;
    position: relative;
    
    strong {
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 140%;
      letter-spacing: -0.3px;
      color: rgba(24, 24, 25, 0.7);
      width: 25%;
      padding: 15px 20px;
    }
    
    span {
      display: inline-block;
      padding: 5px 10px;
      margin: -5px -10px;
      border-radius: 100px;
    
      
      &.publish {
        background: #F2E7FC;
        color: #8C18E2;
      }
      
      &.future {
        background: #CBFFB2;
        color: #17BE1E;
      }
      
      &.draft {
        background: #B0ECFF;
        color: #2AABBC;
      }
    }
`;

const ButtonWrap = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;

const ButtonOpener = styled.button`
    color: #919294;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    adding: 0;
    margin: 0;
    border: 0;
    background: none;
`;

const Popup = styled.div`
    position: absolute;
    width: 97px;
    height: 112px;
    left: -118px;
    top: 0px;
    background: #EBEBEB;
    border-radius: 10px;
    padding: 15px;
    z-index: 10;
`;

const Button = styled.button`
    color: #919294;
    padding: 0;
    margin: 0 0 15px;
    border: 0;
    background: none;
    color:#000;
    font-weight: 400;
    font-size: 11px;
    line-height: 140%;
    letter-spacing: -0.3px;
    display:block;
`;


const DashboardPost = ({item, setPosts, posts , setEditPostData, setShowEditPopup, editedPost}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const deletePost = (id) => {
    setPosts(posts.filter(item => item.id !== id))
    setIsPopupOpen(false)
  }


  const editPost = (item) => {
    editedPost = {
      id: item.id,
      title: item.title,
      author: item.author,
      status: item.status,
      data: item.data,
      body: item.body
    }

    setEditPostData(editedPost);
    setShowEditPopup(true)
    setIsPopupOpen(false)
  }



  return (
    <Post>
        <strong>{item.title}</strong>
        <strong>
          <span  className={(item.status).toLowerCase() }>{item.status}</span>
        </strong>
        <strong>{item.data}</strong>
        <strong>
          {item.author}

          <ButtonWrap>
            <ButtonOpener onClick={() => setIsPopupOpen(!isPopupOpen)}>
              ...
            </ButtonOpener>

            { isPopupOpen && <Popup>
              <Button type="button" onClick={() => deletePost(item.id)}>Dalete</Button>
              <Button type="button" onClick={() => editPost(item)}>Edit</Button>
            </Popup> }

          </ButtonWrap>
        </strong>


    </Post>
  );
};

export default DashboardPost;
