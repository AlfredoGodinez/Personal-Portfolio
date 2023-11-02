import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jos%C3%A9-alfredo-god%C3%ADnez-gasca/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/AlfredoGodinez" target="_blank"><img src={navIcon2} alt="Icon" /></a>
            </div>
            <p>AlfredoGoga - 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
