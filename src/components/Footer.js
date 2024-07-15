import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/twi.png'
import navIcon5 from '../assets/img/github-icon-size_24.png'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <span>Follow Me --  </span>
                <a href="https://www.linkedin.com/in/sakshi-bhavasar-84781a214/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/sam_bhavsar_1904" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
                <a href="https://www.instagram.com/sam_bhavsar_1904" target="_blank" rel="noopener noreferrer"><img className="white-icon" src={navIcon4} alt="" /></a>
                <a href="https://www.instagram.com/sam_bhavsar_1904" target="_blank" rel="noopener noreferrer"><img className="white-icon" src={navIcon5} alt="" /></a>
            </div>
            <p>Copyright Sakshi Bhavsar 2024.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
