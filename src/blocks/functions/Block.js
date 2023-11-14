import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Main.css';

function App(){
    return(
        <Container>
            <Row>
                <Col className="block_photo_2" xl={12} lg={12} md={12} sm={12} xs={12}>
                    <h1>Компания IZGU</h1>
                    <p>Является одним из лидеров среди производителей 
                        пластмассовых горшков для цветов не только в 
                        Узбекистане, но и в странах СНГ. В широком 
                        ассортименте представлены горшки для дома и 
                        сада IZGU стремится к постоянному развитию, 
                        современности игибкости.
                        </p>
                </Col>
            </Row>
        </Container>
    )
}

export default App;