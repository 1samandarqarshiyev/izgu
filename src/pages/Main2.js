import { useState } from 'react';
import { Container } from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Style.css';
//
import Block from './Block';
import Block2 from './Block2';
import Block3 from './Block3';
import Block4 from './Block4';


function Example() {
  const [smShow, setSmShow] = useState(false);

  function secondmain(){
    setSmShow(true);
  }

  return (
    <>
      <Button onClick={secondmain} as="input" type="submit" className="me-2 button_navbar_1" value="Oбратный звонок"/>
      
      <Modal size="sm" show={smShow} onHide={() => setSmShow(false)} aria-labelledby="example-modal-sizes-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            <p className='modaltext1'>Главная Горшки</p>
            <p className='modaltext2'>Обратный звонок</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>

            <Row>
              <Col xl={6} lg={6} md={6} sm={6} xs={6} s={12}>
                <Block/>
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} xs={6} s={12}>
                <Block2/>
              </Col>
            </Row>

            <Row>
              <Col xl={12} lg={12} md={12} sm={12} xs={12} s={12}>
                <Block3/>
              </Col>
            </Row>

            <Row>
              <Col xl={12} lg={12} md={12} sm={12} xs={12} s={12}>
                <Block4/>
              </Col>
            </Row>

          </Container>
        </Modal.Body>
      </Modal>

    </>
  );
}

export default Example;