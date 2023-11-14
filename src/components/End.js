import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './End.css';
//
import Main from './Main';
import Main2 from './Main2';
import Main3 from './Main3';


function Myfunc(){
    return(
        <Navbar expand="sm" className='footer_menu'>
        <Container>
            <Navbar.Brand href="#">  </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll"/>

            <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" >
                    <Nav className='footer_text_end'>© 2022 IZGU. Все права защишены</Nav>
                </Nav>  

                <Form className="d-flex">
                    <Main/>
                    <Main2/>
                    <Main3/>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Myfunc;
