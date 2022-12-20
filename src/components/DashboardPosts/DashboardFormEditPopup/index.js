
const DashboardFormEditPopup = ({editPostData, setPosts, posts, setShowEditPopup, setEditPostData }) => {

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    let newPosts = posts.slice();
    newPosts[editPostData.id] = editPostData;
    setPosts(newPosts)
    setShowEditPopup(false)
  }

  const handleChangeEdit = (e) => {
    const {name, value} = e.target;
    setEditPostData({...editPostData, [name]: value})
  }



  return (
    <div className="popup">
      <form  onSubmit={handleSubmitEdit}>
        EDIT
        <input onChange={handleChangeEdit} name="title" type="text" placeholder="title" value={editPostData.title} />
        <input onChange={handleChangeEdit} name="author" type="text" placeholder="author" value={editPostData.author} />

        <select onChange={handleChangeEdit} name="status">
          <option>{editPostData.status}</option>
          <option value="Publish">Publish</option>
          <option value="Future">Future</option>
          <option value="Draft">Draft</option>
        </select>

        <input onChange={handleChangeEdit} name="data" type="text" placeholder="data" value={editPostData.data} />

        <textarea onChange={handleChangeEdit} name="body" placeholder="body" value={editPostData.body}></textarea>
        <button>Edit</button>
      </form>
    </div>
  );
};

export default DashboardFormEditPopup;
