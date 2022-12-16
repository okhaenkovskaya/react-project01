import {useState , useRef} from "react";
import styled from "styled-components";

const ContactFormContainer = styled.div`
    max-width: 1168px;
    margin: 0 auto;
    padding: 0 30px;
    
    input.error {
    background: red;
    }
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
    console.log(data);
  }

  const checkErrors = () => {
    const children = Array.from(formRef.current.children).filter(item => item.required);
    console.log(children)

    const errorItems = children.filter(item => item.classList.contains('error'));

    if(errorItems.length === 0) {
      buttonRef.current.disabled = false;
    } else {
      buttonRef.current.disabled = true;
    }

   // Object.values(data).map(item => console.log(item, 'item'))
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
      <h2>Contact Form</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input onChange={handleChange} required name="firstName" type="text" placeholder="First Name" value={data.firstName} />
        <input onChange={handleChange} name="lastName" type="text" placeholder="Last Name" value={data.lastName} />
        <input onChange={handleChange} required name="email" type="email" placeholder="Email" value={data.email} />
        <input onChange={handleChange} required name="phone" type="tel" placeholder="Phone" value={data.phone} />
        <textarea onChange={handleChange} name="message" placeholder="Message" value={data.message}></textarea>
        <button ref={buttonRef} disabled >Send</button>
      </form>
    </ContactFormContainer>
  );
};

export default ContactForm;
