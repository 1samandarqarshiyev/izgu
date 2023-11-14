import { Container } from 'react-bootstrap';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import './Main2.css';
//
import Cup1 from './Cup1';
import Cup2 from './Cup2';
import Cup3 from './Cup3';
import Cup4 from './Cup4';


function App(){
    return(
        <Container className='cups'>
            <Row>
                <Col xl={3} lg={3} md={4} sm={6} xs={12}> <Cup1/> </Col>
                <Col xl={3} lg={3} md={4} sm={6} xs={12}> <Cup2/> </Col>
                <Col xl={3} lg={3} md={4} sm={6} xs={12}> <Cup3/> </Col>
                <Col xl={3} lg={3} md={4} sm={6} xs={12}> <Cup4/> </Col>

                <Col xl={3} lg={3} md={4} sm={6} xs={12}> <Cup3/> </Col>
                <Col xl={3} lg={3} md={4} sm={6} xs={12}> <Cup4/> </Col>
                <Col xl={3} lg={3} md={4} sm={6} xs={12}> <Cup1/> </Col>
                <Col xl={3} lg={3} md={4} sm={6} xs={12}> <Cup2/> </Col>

                <Col xl={3} lg={3} md={4} sm={6} xs={12}> <Cup1/> </Col>
                <Col xl={3} lg={3} md={4} sm={6} xs={12}> <Cup4/> </Col>
                <Col xl={3} lg={3} md={4} sm={6} xs={12}> <Cup2/> </Col>
                <Col xl={3} lg={3} md={4} sm={6} xs={12}> <Cup3/> </Col>
            </Row>
        </Container>
    )
}

export default App;