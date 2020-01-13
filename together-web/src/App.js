import React from 'react';
import './App.css';
import { Route ,Link} from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import Home from './component/home.js';
import About from './component/about.js';
import Donate from './component/donate.js';
function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">一起共作室</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="about">關於一起共作室</Nav.Link>
            <Nav.Link as={Link} to="">Link</Nav.Link>
          </Nav>
          <Nav className="mr-left">
            <Nav.Link as={Link} to="donate">贊助我們</Nav.Link>
            <Nav.Link as={Link} to="subscription">訂閱我們</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route path='/' exact component={Home}/>
      <Route path='/About' component={About}/>
      <Route path='/donate' component={Donate}/>
    </div>
  );
}

export default App;
