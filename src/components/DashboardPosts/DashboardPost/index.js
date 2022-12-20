
const DashboardPost = ({item, setPosts, posts , setEditPostData, setShowEditPopup, editedPost}) => {
  const deletePost = (id) => {
    setPosts(posts.filter(item => item.id !== id))
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
  }



  return (
    <div>
        <h3>{item.title}</h3>
        <span>{item.status}</span>
        <span>{item.data}</span>
        <span>{item.author}</span>
        <button type="button" onClick={() => deletePost(item.id)}>Dalete</button>


          <button type="button" onClick={() => editPost(item)}>Edit</button>

    </div>
  );
};

export default DashboardPost;
