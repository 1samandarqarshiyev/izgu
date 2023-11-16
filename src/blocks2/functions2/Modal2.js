import { Container } from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import './Main2.css';
//
import Block2 from './Block2';


function Myfunc(){
    return (
        <Container>
            <Row className="size_1">
                <p>Размер</p>
            </Row>
            <Row className="size_2">
                <Col className="size_2_block" xl={4} lg={4} md={4} sm={4} xs={4}> 0,5 л. </Col>
                <Col className="size_2_block2" xl={4} lg={4} md={4} sm={4} xs={4}> 1 л. </Col>
                <Col className="size_2_block2" xl={4} lg={4} md={4} sm={4} xs={4}> 1,5 л. </Col>
            </Row>
            <Row className="size_3">
                <Col className="size_3_block" xl={12} lg={12} md={12} sm={12} xs={12}>
                    <p className="size_3_block1">Описание</p>
                    <p className="size_3_block2">Горшок Bag Pot Eco 
                        позволяет выращивать
                         любое растение в более
                          благоприятных условиях, 
                          чем в контейнерах из других 
                          материалов.</p>
                </Col>
            </Row>
            <Row className="size_4">
                <Col className="size_4_block" xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Block2/>
                </Col>
            </Row>
        </Container>
    )
}

export default Myfunc;