import {useState , useRef} from "react";
import styled from "styled-components";

const ContactFormContainer = styled.div`
    max-width: 1168px;
    margin: 0 auto 30px;
    padding: 30px;
    background: #191A1D;
    border-radius: 20px;
    
    input.error {
      background: red;
    }
`;

const Form = styled.form`
    max-width: 790px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Title = styled.h2`
    margin: 0 0 30px;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 500;
    font-size: 42px;
    line-height: 53px;
    color: #fff;
    text-align:center;
`;

const Input = styled.input`
    height: 63px;
    background: rgba(48, 48, 51, 0.7);
    border-radius: 10px;
    color: #fff;
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
    background: rgba(48, 48, 51, 0.7);
    border-radius: 10px;
    color: #fff;
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
    background: rgba(48, 48, 51, 0.7);
    border-radius: 10px;
    color: #fff;
    font-weight: 300;
    font-size: 18px;
    line-height: 23px;
    padding: 0 15px;
    margin: 0 auto 40px;
    border: 0;
    display:block;
    width: 233px;
`;

const ContactForm = () => {
  const formRef = useRef(null);
  const buttonRef = useRef(null);

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const checkErrors = () => {
    const children = Array.from(formRef.current.children).filter(item => item.required);
    const errorItems = children.filter(item => item.classList.contains('error'));

    errorItems.length === 0 ? buttonRef.current.disabled = false : buttonRef.current.disabled = true;
  }

  const isValidField = (value) => {
    return value.length >= 3;
  }

  const isValidEmail = (email) => {
    return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email);
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    if(name === 'email') {
      isValidEmail(value) ? e.target.classList.remove('error') : e.target.classList.add('error');
    } else {
      isValidField(value) ? e.target.classList.remove('error') : e.target.classList.add('error');
    }
    checkErrors();

    setData({...data, [name]: value})
  }


  return (
    <ContactFormContainer>
      <Title>Contact Form</Title>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input onChange={handleChange}
               name="firstName"
               type="text"
               placeholder="First Name"
               value={data.firstName} />

        <Input onChange={handleChange}
               name="lastName" type="text"
               placeholder="Last Name"
               value={data.lastName} />
        <Input onChange={handleChange}
               name="email"
               type="email"
               placeholder="Email"
               value={data.email} />
        <Input onChange={handleChange}
               name="phone"
               type="tel"
               placeholder="Phone"
               value={data.phone} />
        <Textarea onChange={handleChange}
                  name="message"
                  placeholder="Message"
                  value={data.message}></Textarea>
        <Button ref={buttonRef} disabled >Send</Button>
      </Form>
    </ContactFormContainer>
  );
};

export default ContactForm;
