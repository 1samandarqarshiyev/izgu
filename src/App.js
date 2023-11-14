import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './App.css';
import logo from './images/logo.png';
//
import Main from './pages/Main';
import Main2 from './pages/Main2';
import Facemain2 from './blocks/Layout';
import Facemain3 from './blocks2/Layout2';
import Footermain from './components/End';


function Myfunc(){
    const [birinchi, setBirinchi] = useState(true);
    const [ikkinchi, setIkkinchi] = useState(false);

    function birinchifunksiya(){
        setBirinchi(true);
        setIkkinchi(false);
    };

    function ikkinchifunksiya(){
        setBirinchi(false);
        setIkkinchi(true);
    };

    return (
      <>
        <div>
            <Navbar expand="sm" className='navbar_menu'>
                <Container fluid>
                    <Navbar.Brand href="#"><img src={logo} className='img-fluid'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>

                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="#action1"><a className='navbar_text' href="#" onClick={birinchifunksiya}>Главная</a></Nav.Link>
                            <Nav.Link href="#action2"><a className='navbar_text' href="#" onClick={ikkinchifunksiya}>Каталог</a></Nav.Link>
                        </Nav>

                        <Nav className="d-flex">
                            <Main/>
                            <Main2/>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {birinchi && <Facemain2/>}
            {ikkinchi && <Facemain3/>}
        </div>

        {/* Saytning footer qismi */}
        <Footermain/>
        </>
    );
};

export default Myfunc;
