import { useState, useEffect, useRef } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import emailjs from '@emailjs/browser';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');
  const form = useRef();

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus(null);
        setMessage('');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.indexOf("@") > -1) {
      sendEmail();
    }
  };

  const sendEmail = () => {
    setStatus('sending');
    emailjs.sendForm('service_f1vkwrj', 'template_50cf0eb', form.current, 'n5Ise0R45ltEWHvQr')
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          setMessage('Subscription successful');
          clearFields();
      }, (error) => {
          console.log(error.text);
          setStatus('error');
          setMessage('Something went wrong, please try again later.');
      });
  };

  const clearFields = () => {
    setEmail('');
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to my Newsletter<br></br> & Never miss latest updates</h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form ref={form} onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input value={email} name='user_email' type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
