import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import './Main.css';
//
import Main4 from './Main4';


function Myfunc(){
    return(
        <Container className="block_end_block">
            <Row>
                <Col className="block_end_1" xl={12} lg={12} md={12} sm={12} xs={12}> 
                    <h1>Хотите обратный звонок?</h1>
                </Col>
                <Col className="block_end_2" xl={12} lg={12} md={12} sm={12} xs={12}> 
                    <p>
                        Заполните полей за 2 минуты и мы свяжемся с вами. 
                        Сейчас спросим только имя, фамилию и номер телефона
                    </p>
                </Col>
                <Col className="block_end_3" xl={12} lg={12} md={12} sm={12} xs={12}> 
                    <Main4/>
                </Col>
            </Row>
        </Container>
    )
}

export default Myfunc;