import DashboardPost from "./DashboardPost";


const DashboardPosts = ({posts, setPosts, setEditPostData, setShowEditPopup}) => {


  return (
    <div>
      {posts.map((item) => <DashboardPost key={item.id}
                                          item={item}
                                          posts={posts}
                                          setShowEditPopup={setShowEditPopup}
                                          setEditPostData={setEditPostData}
                                          setPosts={setPosts} />)}

    </div>
  );
};

export default DashboardPosts;
