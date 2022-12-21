import styled from "styled-components";

const Popup = styled.div`
   position: fixed;
    top: 50%;
    left: 50%;
    width: 50vw;
    max-height: 90vh;
    overflow: auto;
    background: #262835;
    border-radius: 20px;
    transform: translateX(-50%) translateY(-50%);
    padding: 50px;
`;


const Title = styled.h2`
    font-weight: 500;
    font-size: 42px;
    line-height: 53px;
    color: #DADADA;
    margin:0 0 50px;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Input = styled.input`
    height: 63px;
    background: #BDB2FF;
    border-radius: 10px;
    color: #262835;
    font-weight: 300;
    font-size: 18px;
    line-height: 23px;
    padding: 0 15px;
    margin: 0 19px 40px;
    border: 0;
    display:block;
    width: calc(50% - 38px);
`;

const Select = styled.select`
    height: 63px;
    background: #BDB2FF;
    border-radius: 10px;
    color: #262835;
    font-weight: 300;
    font-size: 18px;
    line-height: 23px;
    padding: 0 15px;
    margin: 0 19px 40px;
    border: 0;
    display:block;
    width: calc(50% - 38px);
`;

const Textarea = styled.textarea`
    height: 227px;
    background: #BDB2FF;
    border-radius: 10px;
    color: #262835;
    font-weight: 300;
    font-size: 18px;
    line-height: 23px;
    padding: 15px 15px;
    margin: 0 19px 40px;
    border: 0;
    display:block;
    resize:none;
    width: calc(100% - 38px);
`;

const Button = styled.button`
    height: 51px;
    background: #BDB2FF;
    border-radius: 40px;
    color: #262835;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    padding: 0 15px;
    margin: 0 auto 40px;
    border: 0;
    display:block;
    width: 233px;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    height: 50px;
    background: #BDB2FF;
    border-radius: 50px;
    color: #262835;
    padding: 0;
    margin: 0;
    border: 0;
    display:block;
    width: 50px;
`;


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
    <Popup className="popup">
      <Title>EDIT Post</Title>
      <CloseButton type="button" onClick={() => setShowEditPopup(false) }>Close</CloseButton>
      <Form  onSubmit={handleSubmitEdit}>
        <Input onChange={handleChangeEdit} name="title" type="text" placeholder="title" value={editPostData.title} />
        <Input onChange={handleChangeEdit} name="author" type="text" placeholder="author" value={editPostData.author} />
        <Select onChange={handleChangeEdit} name="status">
          <option>{editPostData.status}</option>
          <option value="Publish">Publish</option>
          <option value="Future">Future</option>
          <option value="Draft">Draft</option>
        </Select>
        <Input onChange={handleChangeEdit} name="data" type="text" placeholder="data" value={editPostData.data} />
        <Textarea onChange={handleChangeEdit} name="body" placeholder="body" value={editPostData.body}></Textarea>
        <Button>Edit</Button>
      </Form>
    </Popup>
  );
};

export default DashboardFormEditPopup;
