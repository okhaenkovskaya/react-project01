import React from 'react';
import styled from "styled-components";

const Head = styled.div`
    display: flex;
    flex-wrap: nowrap;
    background: #FFFFFF;
    border: 1px solid #E6E7E9;
    border-radius: 8px;
    margin: 0 0 20px;
    
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
`;

const DashboardPostsHead = () => {
  return (
    <Head>
      <strong>Post</strong>
      <strong>Status</strong>
      <strong>Date</strong>
      <strong>Author</strong>
    </Head>
  );
};

export default DashboardPostsHead;
