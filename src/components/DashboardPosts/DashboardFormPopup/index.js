
const DashboardFormPopup = ({setShowNewPopup, setPosts, posts, newPost, setNewPost, emptyPost }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowNewPopup(false)
    setPosts(posts.concat(newPost))
    setNewPost(emptyPost)
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setNewPost({...newPost, [name]: value})
  }



  return (
    <div className="popup">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="title" type="text" placeholder="title" value={newPost.title} />
        <input onChange={handleChange} name="author" type="text" placeholder="author" value={newPost.author} />

        <select onChange={handleChange} name="status">
          <option>status</option>
          <option value="Publish">Publish</option>
          <option value="Future">Future</option>
          <option value="Draft">Draft</option>
        </select>

        <input onChange={handleChange} name="data" type="text" placeholder="data" value={newPost.data} />

        <textarea onChange={handleChange} name="body" placeholder="body" value={newPost.body}></textarea>
        <button>Send</button>
      </form>
    </div>
  );
};

export default DashboardFormPopup;
