import { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',  
    message: ''
  };
  
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const form = useRef();

  const onFormUpdate = (category, value) => {     
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  }

  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({});
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation check
    if (!formDetails.firstName || !formDetails.lastName || !formDetails.email || !formDetails.phone || !formDetails.message) {
      setStatus({ success: false, message: 'Please fill in all fields.' });
      return;
    }

    setButtonText("Sending...");
  
    emailjs.sendForm('service_f1vkwrj', 'template_50cf0eb', form.current, 'n5Ise0R45ltEWHvQr')
      .then((result) => {
          console.log(result.text);
          setStatus({ success: true, message: 'Message sent successfully' });
      }, (error) => {
          console.log(error.text);
          setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      })
      .finally(() => {
        setButtonText("Send");
        setFormDetails(formInitialDetails);
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <p>Mobile No: 9423944227</p>
                <p>Email: <a href="mailto:sakshibhavsar2018@gmail.com" style={{ color: '#fff' }}>Sakshibhavsar2018@gmail.com</a></p>
                <form ref={form} onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="user_firstname" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="user_lastname" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="user_email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="user_phone" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      {
                        status.message &&
                        <div className={`custom-alert ${status.success ? 'alert-success' : 'alert-danger'}`}>
                          {status.message}
                        </div>
                      }
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>      
    </section>
  );
}
