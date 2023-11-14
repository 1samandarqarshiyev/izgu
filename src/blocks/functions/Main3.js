import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import './Main.css';
//
import Block4 from './Block4';


function Myfunc(){
    return(
        <Container>
            <Row>
                <Col className="block_text_space" xl={1} lg={0} md={0} sm={0} xs={0}>  </Col>
                <Col className="block_text_end" xl={10} lg={12} md={12} sm={12} xs={12}> <Block4/> </Col>
                <Col className="block_text_space" xl={1} lg={0} md={0} sm={0} xs={0}>  </Col>
            </Row>
        </Container>
    )
}

export default Myfunc;