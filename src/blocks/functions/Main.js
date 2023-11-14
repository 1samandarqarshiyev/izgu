import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Main.css';
//
import Block from './Block';
import Block2 from './Block2';


function App(){
    return(
        <Container className="block_photo_fon" fluid>
            <Container>
                <Row>
                    <Col className="block_photo" xl={5} lg={5} md={5} sm={12} xs={12}> <Block/> </Col>
                    <Col className="block_photo" xl={7} lg={7} md={7} sm={12} xs={12}> <Block2/> </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default App;