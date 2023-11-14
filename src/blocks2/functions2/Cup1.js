import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import './Main2.css';
import photo from './images/cup1.png';
import Block from './Block';

function App(){
    return (
        <div className="image_block">
            <Container>
                <Row>
                    <Col className="end_image" xl={12} lg={12} md={12} sm={12} xs={12} >
                        <img src={photo} className='img-fluid'/>
                    </Col>
                    <Col className="end_name" xl={12} lg={12} md={12} sm={12} xs={12} >
                        <div className="cup1_texts">
                            <p className="p1">Цветочный горшок 5 яр.</p>
                            <p className="p2">от 10 000 сум/шт.</p>
                        </div>
                    </Col>
                    <Col className="end_button" xl={12} lg={12} md={12} sm={12} xs={12} >
                        <Block/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default App;