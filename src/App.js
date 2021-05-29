import './App.css';
import { Card, Button, Container, Row, Col, Navbar } from 'react-bootstrap';
import MotionItem from "./components/motionItem"
import ParticlesBackground from "./components/ParticlesBackground"
import Logo from "./images/logo.png"


function App() {
  return (
    <div className="App">
      <ParticlesBackground>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>


      <Container fluid>
        <Row className="vertical-align">
          <Col></Col>
          <Col>
            <MotionItem/>
          </Col>
          <Col></Col>

        </Row>
      </Container>
      </ParticlesBackground>
    </div>
  );
}

export default App;
