import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import './Main.css';
import Block3 from './Block3';

function App(){
    return(
        <Container>
            <Row>
                <Col className="karusel_block" xl={12} lg={12} md={12} sm={12} xs={12}> <Block3/> </Col>
            </Row>
        </Container>
    )
}

export default App;